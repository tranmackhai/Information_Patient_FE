import { size } from "lodash";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import { TRoute } from "../types/routes";
import HomePage from "../pages/HomePage";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Patient from "../pages/Patient/Patient";
import User from "../pages/User/User";
import BodyLayout from "../components/layouts/BodyLayout";
import CreateUser from "../pages/User/CreateUser";
import AddPatient from "../pages/Patient/AddPatient";
import { PatientDetail } from "../pages/Patient/PatientDetail/PatientDetail";
import NutritinalOverview from "../pages/Patient/PatientDetail/NutritionalAssessment/NutritinalOverview";

const routes: TRoute[] = [
  {
    path: "/",
    element: HomePage,
    layout: DefaultLayout,
  },
  {
    path: "/login",
    element: Login,
    layout: null,
  },
  {
    path: "/account",
    element: User,
    layout: DefaultLayout,
    subRoutes: [
      {
        path: "/create",
        element: CreateUser,
        layout: BodyLayout,
      },
    ],
  },
  {
    path: "/patient",
    element: Patient,
    layout: DefaultLayout,
    subRoutes: [
      {
        path: "/create",
        element: AddPatient,
        layout: BodyLayout,
      },
      {
        path: "/detail/:id",
        element: PatientDetail,
        layout: BodyLayout,
      },
      {
        path: "/nutritional-assessment",
        element: NutritinalOverview,
        layout: BodyLayout,
      },
    ],
  },
];

const renderRouter = (props: {
  routes: TRoute[] | undefined;
  pathPrefix?: string;
}): React.ReactElement => {
  const { routes, pathPrefix } = props;
  return (
    <React.Fragment>
      {routes?.map((route: TRoute, index: number): React.ReactElement => {
        const Layout = route.layout || React.Fragment;
        const Page = route.element;
        const path = route.path === "*" ? "*" : (pathPrefix ?? "") + route.path;
        return (
          <React.Fragment key={index}>
            <Route
              path={path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
            {size(route?.subRoutes) > 0 &&
              renderRouter({ routes: route.subRoutes, pathPrefix: path })}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

const MainRoutes = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        {renderRouter({
          routes,
          pathPrefix: "",
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
