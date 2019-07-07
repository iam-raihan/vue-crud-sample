import Vue from "vue";

/**
 * adding bootstrap-vue
 */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

/**
 * adding toastr
 */
import "cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css";
import CxltToastr from "cxlt-vue2-toastr";

Vue.use(CxltToastr, {
  position: "top right",
  timeOut: 3000,
  progressBar: true,
  showMethod: "slideInRight",
  hideMethod: "slideOutRight",
  title: "Notification"
});
