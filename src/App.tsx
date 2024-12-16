import { ErrorComponent, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { notificationProvider } from "./providers/notificationProvider";
import { useDataProvider } from "./providers/delivery_api-provider";
import { ThemeProvider } from "./providers/theme-provider";
import i18nProvider from "./providers/i18n-provider";
import { isRtl, Languages } from "./i18n";

import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/rtl.css";
import DashboardPage from "./app/dashboard/page";
import { TaskList, TaskCreate } from "./pages/tasks";
import { DeliveryVehicleList } from "./pages/delivery-vehicles";
import { ModeToggle } from "./components/modeToggle";
import { LanguageSwitcher } from "./components/language-switcher";

import { TruckIcon, ListTodoIcon, MapPinIcon } from "lucide-react";
import { useEffect } from "react";

function App() {
  const dataProvider = useDataProvider();

  // Set initial direction based on default locale
  useEffect(() => {
    const defaultLocale = i18nProvider.getLocale() as Languages;
    document.dir = isRtl(defaultLocale) ? 'rtl' : 'ltr';
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <RefineKbarProvider>
          <Refine
            dataProvider={dataProvider}
            i18nProvider={i18nProvider}
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
                  icon: <TruckIcon size={16} className="no-rtl" />,
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
                  icon: <ListTodoIcon size={16} className="no-rtl" />,
                },
              },
              {
                name: "taskTrackingInfo",
                list: "/tracking",
                show: "/tracking/show/:id",
                meta: {
                  icon: <MapPinIcon size={16} className="no-rtl" />,
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
            <div className="relative">
              <div className="fixed top-4 right-4 z-50 flex gap-2 no-rtl">
                <LanguageSwitcher />
                <ModeToggle />
              </div>
              <Routes>
                <Route element={<DashboardPage />}>
                  <Route
                    path="/"
                    element={<NavigateToResource resource="deliveryVehicles" />}
                  />
                  <Route path="/tasks">
                    <Route index element={<TaskList />} />
                    <Route path="create" element={<TaskCreate />} />
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
            </div>
          </Refine>
        </RefineKbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
