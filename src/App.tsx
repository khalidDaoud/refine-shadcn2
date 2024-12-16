import { ErrorComponent, Refine } from "@refinedev/core";

import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { notificationProvider } from "./providers/notificationProvider";
import { useDataProvider } from "./providers/delivery_api-provider";

import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage from "./app/dashboard/page";
import { TaskList } from "./pages/tasks";
import { DeliveryVehicleList } from "./pages/delivery-vehicles";

import { TruckIcon, ListTodoIcon, MapPinIcon } from "lucide-react";

function App() {
  const dataProvider = useDataProvider();

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <Refine
          dataProvider={dataProvider}
          notificationProvider={notificationProvider}
          routerProvider={routerBindings}          
          resources={[
            {
              name: "deliveryVehicles",
              list: "/delivery-vehicles",
              create: "/delivery-vehicles/create",
              edit: "/delivery-vehicles/edit/:id",
              show: "/delivery-vehicles/show/:id",
              meta: {
                canDelete: true,
                icon: <TruckIcon size={16} />,
              },
            },
            {
              name: "tasks",
              list: "/tasks",
              create: "/tasks/create",
              edit: "/tasks/edit/:id",
              show: "/tasks/show/:id",
              meta: {
                canDelete: true,
                icon: <ListTodoIcon size={16} />,
              },
            },
            {
              name: "taskTrackingInfo",
              list: "/tracking",
              show: "/tracking/show/:id",
              meta: {
                icon: <MapPinIcon size={16} />,
              },
            },
          ]}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
            useNewQueryKeys: true,
            disableTelemetry: true,
            reactQuery: {
              clientConfig: {
                defaultOptions: {
                  queries: {
                    networkMode: "always",
                  },
                  mutations: {
                    networkMode: "always",
                  },
                  title: {
                    icon: "src/assets/logo-mini.svg",
                    text: "LogiTech",
                  },
                },
              },
            },
          }}
        >
          <Routes>
            <Route element={<DashboardPage />}>
              <Route
                path="/"
                element={<NavigateToResource resource="deliveryVehicles" />}
              />
              <Route path="/tasks">
                <Route index element={<TaskList />} />
              </Route>
              <Route path="/delivery-vehicles">
                <Route index element={<DeliveryVehicleList />} />
              </Route>
              <Route path="*" element={<ErrorComponent />} />
            </Route>
            <Route path="*" element={<ErrorComponent />} />
          </Routes>

          <RefineKbar />
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
