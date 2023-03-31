import i18n from "i18next";
import HttpBackend, { HttpBackendOptions } from "i18next-http-backend";
i18n.use(HttpBackend).init<HttpBackendOptions>({
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    // http backend options
  },
});
