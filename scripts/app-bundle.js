define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('loading-indicators',["require", "exports", "nprogress", "aurelia-framework"], function (require, exports, nprogress, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoadingIndicator = (function () {
        function LoadingIndicator() {
            this.loading = false;
        }
        LoadingIndicator.prototype.loadingChanged = function (newValue) {
            if (newValue) {
                nprogress.start();
            }
            else {
                nprogress.done();
            }
        };
        return LoadingIndicator;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], LoadingIndicator.prototype, "loading", void 0);
    LoadingIndicator = __decorate([
        aurelia_framework_1.noView(['nprogress/nprogress.css'])
    ], LoadingIndicator);
    exports.LoadingIndicator = LoadingIndicator;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctaW5kaWNhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxJQUFhLGdCQUFnQjtRQUQ3QjtZQUVZLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFTNUIsQ0FBQztRQVBDLHlDQUFjLEdBQWQsVUFBZSxRQUFRO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUM7UUFDSCx1QkFBQztJQUFELENBVkEsQUFVQyxJQUFBO0lBVFc7UUFBVCw0QkFBUTs7cURBQWlCO0lBRGYsZ0JBQWdCO1FBRDVCLDBCQUFNLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO09BQ3ZCLGdCQUFnQixDQVU1QjtJQVZZLDRDQUFnQiIsImZpbGUiOiJsb2FkaW5nLWluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBucHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IHtiaW5kYWJsZSwgbm9WaWV3fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5Abm9WaWV3KFsnbnByb2dyZXNzL25wcm9ncmVzcy5jc3MnXSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdJbmRpY2F0b3Ige1xyXG4gIEBiaW5kYWJsZSBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIGxvYWRpbmdDaGFuZ2VkKG5ld1ZhbHVlKSB7XHJcbiAgICBpZiAobmV3VmFsdWUpIHtcclxuICAgICAgbnByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBucHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot("menu/app"); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQWRELDhCQWNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1cmVsaWF9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJ1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZmVhdHVyZSgncmVzb3VyY2VzJyk7XG5cbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG4gIH1cblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XG4gIH1cblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoXCJtZW51L2FwcFwiKSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('utility',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function areEqual(obj1, obj2) {
        return Object.keys(obj1).every(function (key) { return obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]); });
    }
    exports.areEqual = areEqual;
    ;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUEsa0JBQXlCLElBQUksRUFBRSxJQUFJO1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXJELENBQXFELENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBRkQsNEJBRUM7SUFBQSxDQUFDIiwiZmlsZSI6InV0aWxpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXJlRXF1YWwob2JqMSwgb2JqMikge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMob2JqMSkuZXZlcnkoKGtleSkgPT4gb2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIChvYmoxW2tleV0gPT09IG9iajJba2V5XSkpO1xufTsiXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('contacts/app',["require", "exports", "aurelia-framework", "./web-api"], function (require, exports, aurelia_framework_1, web_api_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(api) {
            this.api = api;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Contacts';
            config.map([
                { route: 'contacts', moduleId: 'contacts/list', name: 'contacts' },
                { route: 'contacts/:id', moduleId: 'contacts/detail', name: 'contact' }
            ]);
            config.mapUnknownRoutes(function (instruction) {
                location.hash = '#/contacts';
                return 'contacts/list';
            });
            this.router = router;
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.inject(web_api_1.WebAPI),
        __metadata("design:paramtypes", [web_api_1.WebAPI])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLEdBQUc7UUFHZCxhQUFtQixHQUFXO1lBQVgsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUFHLENBQUM7UUFFbEMsNkJBQWUsR0FBZixVQUFnQixNQUEyQixFQUFFLE1BQWM7WUFDekQsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7WUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQU8sUUFBUSxFQUFFLGVBQWUsRUFBSSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUN6RSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUcsUUFBUSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBQyxTQUFTLEVBQUU7YUFDeEUsQ0FBQyxDQUFDO1lBRUYsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQUEsV0FBVztnQkFDakMsUUFBUSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7Z0JBQzdCLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7WUFFSixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBQ0gsVUFBQztJQUFELENBbkJBLEFBbUJDLElBQUE7SUFuQlksR0FBRztRQURmLDBCQUFNLENBQUMsZ0JBQU0sQ0FBQzt5Q0FJVyxnQkFBTTtPQUhuQixHQUFHLENBbUJmO0lBbkJZLGtCQUFHIiwiZmlsZSI6ImNvbnRhY3RzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9ufSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtXZWJBUEl9IGZyb20gJy4vd2ViLWFwaSc7XG5cbkBpbmplY3QoV2ViQVBJKVxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHJvdXRlcjogUm91dGVyO1xuICBcbiAgY29uc3RydWN0b3IocHVibGljIGFwaTogV2ViQVBJKSB7fVxuXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XG4gICAgY29uZmlnLnRpdGxlID0gJ0NvbnRhY3RzJztcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6ICdjb250YWN0cycsICAgICAgbW9kdWxlSWQ6ICdjb250YWN0cy9saXN0JywgICBuYW1lOiAnY29udGFjdHMnIH0sXG4gICAgICB7IHJvdXRlOiAnY29udGFjdHMvOmlkJywgIG1vZHVsZUlkOiAnY29udGFjdHMvZGV0YWlsJywgbmFtZTonY29udGFjdCcgfVxuICAgIF0pO1xuICAgIFxuICAgICBjb25maWcubWFwVW5rbm93blJvdXRlcyhpbnN0cnVjdGlvbiA9PiB7XG4gICAgICAgbG9jYXRpb24uaGFzaCA9ICcjL2NvbnRhY3RzJztcbiAgICAgICByZXR1cm4gJ2NvbnRhY3RzL2xpc3QnO1xuICAgICB9KTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('contacts/detail',["require", "exports", "aurelia-router", "aurelia-framework", "aurelia-event-aggregator", "./web-api", "./messages", "../utility"], function (require, exports, aurelia_router_1, aurelia_framework_1, aurelia_event_aggregator_1, web_api_1, messages_1, utility_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactDetail = (function () {
        function ContactDetail(api, ea, router) {
            this.api = api;
            this.ea = ea;
            this.router = router;
        }
        ContactDetail.prototype.activate = function (params, routeConfig) {
            var _this = this;
            this.routeConfig = routeConfig;
            return this.api.getContactDetails(params.id).then(function (contact) {
                _this.contact = contact;
                _this.routeConfig.navModel.setTitle(_this.contact.firstName);
                _this.originalContact = JSON.parse(JSON.stringify(_this.contact));
                _this.ea.publish(new messages_1.ContactViewed(_this.contact));
            });
        };
        Object.defineProperty(ContactDetail.prototype, "canSave", {
            get: function () {
                return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
            },
            enumerable: true,
            configurable: true
        });
        ContactDetail.prototype.save = function () {
            var _this = this;
            this.api.saveContact(this.contact).then(function (contact) {
                _this.contact = contact;
                _this.routeConfig.navModel.setTitle(_this.contact.firstName);
                _this.originalContact = JSON.parse(JSON.stringify(_this.contact));
                _this.ea.publish(new messages_1.ContactUpdated(_this.contact));
                _this.router.navigateToRoute('contacts');
            });
        };
        ContactDetail.prototype.cancel = function () {
            this.router.navigateToRoute('contacts');
        };
        ContactDetail.prototype.canDeactivate = function () {
            if (!utility_1.areEqual(this.originalContact, this.contact)) {
                var result = confirm('You have unsaved changes. Are you sure you wish to leave?');
                if (!result) {
                    this.ea.publish(new messages_1.ContactViewed(this.contact));
                }
                return result;
            }
            return true;
        };
        return ContactDetail;
    }());
    ContactDetail = __decorate([
        aurelia_framework_1.inject(web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator, aurelia_router_1.Router),
        __metadata("design:paramtypes", [web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator, aurelia_router_1.Router])
    ], ContactDetail);
    exports.ContactDetail = ContactDetail;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUM7UUFDZCxDQUFDO1FBQ0gsb0JBQUM7SUFBRCxDQWpEQSxBQWlEQyxJQUFBO0lBakRZLGFBQWE7UUFEekIsMEJBQU0sQ0FBQyxnQkFBTSxFQUFFLDBDQUFlLEVBQUUsdUJBQU0sQ0FBQzt5Q0FNYixnQkFBTSxFQUFjLDBDQUFlLEVBQWtCLHVCQUFNO09BTHpFLGFBQWEsQ0FpRHpCO0lBakRZLHNDQUFhIiwiZmlsZSI6ImNvbnRhY3RzL2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCB7V2ViQVBJfSBmcm9tICcuL3dlYi1hcGknO1xyXG5pbXBvcnQge0NvbnRhY3RVcGRhdGVkLENvbnRhY3RWaWV3ZWR9IGZyb20gJy4vbWVzc2FnZXMnO1xyXG5pbXBvcnQge2FyZUVxdWFsfSBmcm9tICcuLi91dGlsaXR5JztcclxuXHJcbmludGVyZmFjZSBDb250YWN0IHtcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBpbmplY3QoV2ViQVBJLCBFdmVudEFnZ3JlZ2F0b3IsIFJvdXRlcilcclxuZXhwb3J0IGNsYXNzIENvbnRhY3REZXRhaWwge1xyXG4gIHJvdXRlQ29uZmlnO1xyXG4gIGNvbnRhY3Q6IENvbnRhY3Q7XHJcbiAgb3JpZ2luYWxDb250YWN0OiBDb250YWN0O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogV2ViQVBJLCBwcml2YXRlIGVhOiBFdmVudEFnZ3JlZ2F0b3IsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBhY3RpdmF0ZShwYXJhbXMsIHJvdXRlQ29uZmlnKSB7XHJcbiAgICB0aGlzLnJvdXRlQ29uZmlnID0gcm91dGVDb25maWc7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYXBpLmdldENvbnRhY3REZXRhaWxzKHBhcmFtcy5pZCkudGhlbihjb250YWN0ID0+IHtcclxuICAgICAgdGhpcy5jb250YWN0ID0gPENvbnRhY3Q+Y29udGFjdDtcclxuICAgICAgdGhpcy5yb3V0ZUNvbmZpZy5uYXZNb2RlbC5zZXRUaXRsZSh0aGlzLmNvbnRhY3QuZmlyc3ROYW1lKTtcclxuICAgICAgdGhpcy5vcmlnaW5hbENvbnRhY3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuY29udGFjdCkpO1xyXG4gICAgICB0aGlzLmVhLnB1Ymxpc2gobmV3IENvbnRhY3RWaWV3ZWQodGhpcy5jb250YWN0KSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCBjYW5TYXZlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFjdC5maXJzdE5hbWUgJiYgdGhpcy5jb250YWN0Lmxhc3ROYW1lICYmICF0aGlzLmFwaS5pc1JlcXVlc3Rpbmc7XHJcbiAgfVxyXG5cclxuICBzYXZlKCkge1xyXG4gICAgdGhpcy5hcGkuc2F2ZUNvbnRhY3QodGhpcy5jb250YWN0KS50aGVuKGNvbnRhY3QgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRhY3QgPSA8Q29udGFjdD5jb250YWN0O1xyXG4gICAgICB0aGlzLnJvdXRlQ29uZmlnLm5hdk1vZGVsLnNldFRpdGxlKHRoaXMuY29udGFjdC5maXJzdE5hbWUpO1xyXG4gICAgICB0aGlzLm9yaWdpbmFsQ29udGFjdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5jb250YWN0KSk7XHJcbiAgICAgIHRoaXMuZWEucHVibGlzaChuZXcgQ29udGFjdFVwZGF0ZWQodGhpcy5jb250YWN0KSk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZSgnY29udGFjdHMnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKCdjb250YWN0cycpO1xyXG4gIH1cclxuXHJcbiAgY2FuRGVhY3RpdmF0ZSgpIHtcclxuICAgIGlmKCFhcmVFcXVhbCh0aGlzLm9yaWdpbmFsQ29udGFjdCwgdGhpcy5jb250YWN0KSl7XHJcbiAgICAgIGxldCByZXN1bHQgPSBjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXMuIEFyZSB5b3Ugc3VyZSB5b3Ugd2lzaCB0byBsZWF2ZT8nKTtcclxuXHJcbiAgICAgIGlmKCFyZXN1bHQpIHtcclxuICAgICAgICB0aGlzLmVhLnB1Ymxpc2gobmV3IENvbnRhY3RWaWV3ZWQodGhpcy5jb250YWN0KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('contacts/list',["require", "exports", "aurelia-event-aggregator", "./web-api", "./messages", "aurelia-framework"], function (require, exports, aurelia_event_aggregator_1, web_api_1, messages_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactList = (function () {
        function ContactList(api, ea) {
            var _this = this;
            this.api = api;
            this.selectedId = 0;
            ea.subscribe(messages_1.ContactViewed, function (msg) { return _this.select(msg.contact); });
            ea.subscribe(messages_1.ContactUpdated, function (msg) {
                var id = msg.contact.id;
                var found = _this.contacts.find(function (x) { return x.id == id; });
                Object.assign(found, msg.contact);
            });
        }
        ContactList.prototype.created = function () {
            var _this = this;
            this.api.getContactList().then(function (contacts) { return _this.contacts = contacts; });
        };
        ContactList.prototype.select = function (contact) {
            this.selectedId = contact.id;
            return true;
        };
        return ContactList;
    }());
    ContactList = __decorate([
        aurelia_framework_1.inject(web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator])
    ], ContactList);
    exports.ContactList = ContactList;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBTUEsSUFBYSxXQUFXO1FBSXRCLHFCQUFvQixHQUFXLEVBQUUsRUFBbUI7WUFBcEQsaUJBT0M7WUFQbUIsUUFBRyxHQUFILEdBQUcsQ0FBUTtZQUYvQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1lBR2IsRUFBRSxDQUFDLFNBQVMsQ0FBQyx3QkFBYSxFQUFFLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztZQUM3RCxFQUFFLENBQUMsU0FBUyxDQUFDLHlCQUFjLEVBQUUsVUFBQSxHQUFHO2dCQUM5QixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELDZCQUFPLEdBQVA7WUFBQSxpQkFFQztZQURDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBRUQsNEJBQU0sR0FBTixVQUFPLE9BQU87WUFDWixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFDSCxrQkFBQztJQUFELENBckJBLEFBcUJDLElBQUE7SUFyQlksV0FBVztRQUR2QiwwQkFBTSxDQUFDLGdCQUFNLEVBQUUsMENBQWUsQ0FBQzt5Q0FLTCxnQkFBTSxFQUFNLDBDQUFlO09BSnpDLFdBQVcsQ0FxQnZCO0lBckJZLGtDQUFXIiwiZmlsZSI6ImNvbnRhY3RzL2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtXZWJBUEl9IGZyb20gJy4vd2ViLWFwaSc7XHJcbmltcG9ydCB7Q29udGFjdFVwZGF0ZWQsIENvbnRhY3RWaWV3ZWR9IGZyb20gJy4vbWVzc2FnZXMnO1xyXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGluamVjdChXZWJBUEksIEV2ZW50QWdncmVnYXRvcilcclxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0IHtcclxuICBjb250YWN0cztcclxuICBzZWxlY3RlZElkID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IFdlYkFQSSwgZWE6IEV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgZWEuc3Vic2NyaWJlKENvbnRhY3RWaWV3ZWQsIG1zZyA9PiB0aGlzLnNlbGVjdChtc2cuY29udGFjdCkpO1xyXG4gICAgZWEuc3Vic2NyaWJlKENvbnRhY3RVcGRhdGVkLCBtc2cgPT4ge1xyXG4gICAgICBsZXQgaWQgPSBtc2cuY29udGFjdC5pZDtcclxuICAgICAgbGV0IGZvdW5kID0gdGhpcy5jb250YWN0cy5maW5kKHggPT4geC5pZCA9PSBpZCk7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24oZm91bmQsIG1zZy5jb250YWN0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuYXBpLmdldENvbnRhY3RMaXN0KCkudGhlbihjb250YWN0cyA9PiB0aGlzLmNvbnRhY3RzID0gY29udGFjdHMpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KGNvbnRhY3QpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJZCA9IGNvbnRhY3QuaWQ7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('contacts/messages',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactUpdated = (function () {
        function ContactUpdated(contact) {
            this.contact = contact;
        }
        return ContactUpdated;
    }());
    exports.ContactUpdated = ContactUpdated;
    var ContactViewed = (function () {
        function ContactViewed(contact) {
            this.contact = contact;
        }
        return ContactViewed;
    }());
    exports.ContactViewed = ContactViewed;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL21lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQ0Usd0JBQW1CLE9BQU87WUFBUCxZQUFPLEdBQVAsT0FBTyxDQUFBO1FBQUksQ0FBQztRQUNqQyxxQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksd0NBQWM7SUFJM0I7UUFDRSx1QkFBbUIsT0FBTztZQUFQLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFBSSxDQUFDO1FBQ2pDLG9CQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFGWSxzQ0FBYSIsImZpbGUiOiJjb250YWN0cy9tZXNzYWdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb250YWN0VXBkYXRlZCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnRhY3QpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGFjdFZpZXdlZCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnRhY3QpIHsgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('contacts/web-api',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var latency = 200;
    var id = 0;
    function getId() {
        return ++id;
    }
    var contacts = [
        {
            id: getId(),
            firstName: 'John',
            lastName: 'Tolkien',
            email: 'tolkien@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Clive',
            lastName: 'Lewis',
            email: 'lewis@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Owen',
            lastName: 'Barfield',
            email: 'barfield@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Charles',
            lastName: 'Williams',
            email: 'williams@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Roger',
            lastName: 'Green',
            email: 'green@inklings.com',
            phoneNumber: '867-5309'
        }
    ];
    var WebAPI = (function () {
        function WebAPI() {
            this.isRequesting = false;
        }
        WebAPI.prototype.getContactList = function () {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var results = contacts.map(function (x) {
                        return {
                            id: x.id,
                            firstName: x.firstName,
                            lastName: x.lastName,
                            email: x.email
                        };
                    });
                    resolve(results);
                    _this.isRequesting = false;
                }, latency);
            });
        };
        WebAPI.prototype.getContactDetails = function (id) {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var found = contacts.filter(function (x) { return x.id == id; })[0];
                    resolve(JSON.parse(JSON.stringify(found)));
                    _this.isRequesting = false;
                }, latency);
            });
        };
        WebAPI.prototype.saveContact = function (contact) {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var instance = JSON.parse(JSON.stringify(contact));
                    var found = contacts.filter(function (x) { return x.id == contact.id; })[0];
                    if (found) {
                        var index = contacts.indexOf(found);
                        contacts[index] = instance;
                    }
                    else {
                        instance.id = getId();
                        contacts.push(instance);
                    }
                    _this.isRequesting = false;
                    resolve(instance);
                }, latency);
            });
        };
        return WebAPI;
    }());
    exports.WebAPI = WebAPI;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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O1lBQW5CLGlCQW1CQztZQWxCQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUN4QixVQUFVLENBQUM7b0JBQ1QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ25ELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFeEQsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQzt3QkFDUixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNwQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUM3QixDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNKLFFBQVEsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7d0JBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzFCLENBQUM7b0JBRUQsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0gsYUFBQztJQUFELENBbERBLEFBa0RDLElBQUE7SUFsRFksd0JBQU0iLCJmaWxlIjoiY29udGFjdHMvd2ViLWFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBsYXRlbmN5ID0gMjAwO1xubGV0IGlkID0gMDtcblxuZnVuY3Rpb24gZ2V0SWQoKXtcbiAgcmV0dXJuICsraWQ7XG59XG5cbmxldCBjb250YWN0cyA9IFtcbiAge1xuICAgIGlkOmdldElkKCksXG4gICAgZmlyc3ROYW1lOidKb2huJyxcbiAgICBsYXN0TmFtZTonVG9sa2llbicsXG4gICAgZW1haWw6J3RvbGtpZW5AaW5rbGluZ3MuY29tJyxcbiAgICBwaG9uZU51bWJlcjonODY3LTUzMDknXG4gIH0sXG4gIHtcbiAgICBpZDpnZXRJZCgpLFxuICAgIGZpcnN0TmFtZTonQ2xpdmUnLFxuICAgIGxhc3ROYW1lOidMZXdpcycsXG4gICAgZW1haWw6J2xld2lzQGlua2xpbmdzLmNvbScsXG4gICAgcGhvbmVOdW1iZXI6Jzg2Ny01MzA5J1xuICB9LFxuICB7XG4gICAgaWQ6Z2V0SWQoKSxcbiAgICBmaXJzdE5hbWU6J093ZW4nLFxuICAgIGxhc3ROYW1lOidCYXJmaWVsZCcsXG4gICAgZW1haWw6J2JhcmZpZWxkQGlua2xpbmdzLmNvbScsXG4gICAgcGhvbmVOdW1iZXI6Jzg2Ny01MzA5J1xuICB9LFxuICB7XG4gICAgaWQ6Z2V0SWQoKSxcbiAgICBmaXJzdE5hbWU6J0NoYXJsZXMnLFxuICAgIGxhc3ROYW1lOidXaWxsaWFtcycsXG4gICAgZW1haWw6J3dpbGxpYW1zQGlua2xpbmdzLmNvbScsXG4gICAgcGhvbmVOdW1iZXI6Jzg2Ny01MzA5J1xuICB9LFxuICB7XG4gICAgaWQ6Z2V0SWQoKSxcbiAgICBmaXJzdE5hbWU6J1JvZ2VyJyxcbiAgICBsYXN0TmFtZTonR3JlZW4nLFxuICAgIGVtYWlsOidncmVlbkBpbmtsaW5ncy5jb20nLFxuICAgIHBob25lTnVtYmVyOic4NjctNTMwOSdcbiAgfVxuXTtcblxuZXhwb3J0IGNsYXNzIFdlYkFQSSB7XG4gIGlzUmVxdWVzdGluZyA9IGZhbHNlO1xuICBcbiAgZ2V0Q29udGFjdExpc3QoKXtcbiAgICB0aGlzLmlzUmVxdWVzdGluZyA9IHRydWU7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHRzID0gY29udGFjdHMubWFwKHggPT4gIHsgcmV0dXJuIHtcbiAgICAgICAgICBpZDp4LmlkLFxuICAgICAgICAgIGZpcnN0TmFtZTp4LmZpcnN0TmFtZSxcbiAgICAgICAgICBsYXN0TmFtZTp4Lmxhc3ROYW1lLFxuICAgICAgICAgIGVtYWlsOnguZW1haWxcbiAgICAgICAgfX0pO1xuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSwgbGF0ZW5jeSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250YWN0RGV0YWlscyhpZCl7XG4gICAgdGhpcy5pc1JlcXVlc3RpbmcgPSB0cnVlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgZm91bmQgPSBjb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGlkKVswXTtcbiAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvdW5kKSkpO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSwgbGF0ZW5jeSk7XG4gICAgfSk7XG4gIH1cblxuICBzYXZlQ29udGFjdChjb250YWN0KXtcbiAgICB0aGlzLmlzUmVxdWVzdGluZyA9IHRydWU7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBpbnN0YW5jZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29udGFjdCkpO1xuICAgICAgICBsZXQgZm91bmQgPSBjb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGNvbnRhY3QuaWQpWzBdO1xuXG4gICAgICAgIGlmKGZvdW5kKXtcbiAgICAgICAgICBsZXQgaW5kZXggPSBjb250YWN0cy5pbmRleE9mKGZvdW5kKTtcbiAgICAgICAgICBjb250YWN0c1tpbmRleF0gPSBpbnN0YW5jZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgaW5zdGFuY2UuaWQgPSBnZXRJZCgpO1xuICAgICAgICAgIGNvbnRhY3RzLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1JlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgcmVzb2x2ZShpbnN0YW5jZSk7XG4gICAgICB9LCBsYXRlbmN5KTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('menu/app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Menù';
            config.map([
                { route: '', moduleId: 'menu/list', name: 'list' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUdBO1FBR0U7UUFBZSxDQUFDO1FBRWhCLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3pELE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1YsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFPLFFBQVEsRUFBRSxXQUFXLEVBQUksSUFBSSxFQUFFLE1BQU0sRUFBRTthQUN6RCxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBQ0gsVUFBQztJQUFELENBYkEsQUFhQyxJQUFBO0lBYlksa0JBQUciLCJmaWxlIjoibWVudS9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlciwgUm91dGVyQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHJvdXRlcjogUm91dGVyO1xuICBcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XG4gICAgY29uZmlnLnRpdGxlID0gJ01lbsO5JztcbiAgICBjb25maWcubWFwKFtcbiAgICAgeyByb3V0ZTogJycsICAgICAgbW9kdWxlSWQ6ICdtZW51L2xpc3QnLCAgIG5hbWU6ICdsaXN0JyB9XG4gICAgXSk7XG5cbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('menu/list',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "aurelia-framework"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, aurelia_framework_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var List = (function () {
        function List(aurelia, ea) {
            this.aurelia = aurelia;
        }
        List.prototype.contacts = function () {
            this.aurelia.setRoot("contacts/app");
        };
        return List;
    }());
    List = __decorate([
        aurelia_framework_2.inject(aurelia_framework_1.Aurelia, aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [aurelia_framework_1.Aurelia, aurelia_event_aggregator_1.EventAggregator])
    ], List);
    exports.List = List;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLElBQUk7UUFDZixjQUFvQixPQUFlLEVBQUUsRUFBbUI7WUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNuQyxDQUFDO1FBRUQsdUJBQVEsR0FBUjtZQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDSCxXQUFDO0lBQUQsQ0FQQSxBQU9DLElBQUE7SUFQWSxJQUFJO1FBRGhCLDBCQUFNLENBQUMsMkJBQU8sRUFBRSwwQ0FBZSxDQUFDO3lDQUVILDJCQUFPLEVBQU0sMENBQWU7T0FEN0MsSUFBSSxDQU9oQjtJQVBZLG9CQUFJIiwiZmlsZSI6Im1lbnUvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBpbmplY3QoQXVyZWxpYSwgRXZlbnRBZ2dyZWdhdG9yKVxyXG5leHBvcnQgY2xhc3MgTGlzdCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXJlbGlhOkF1cmVsaWEsIGVhOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuICB9XHJcblxyXG4gIGNvbnRhY3RzKCkge1xyXG4gICAgdGhpcy5hdXJlbGlhLnNldFJvb3QoXCJjb250YWN0cy9hcHBcIik7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFDeEQsQ0FBQztJQURELDhCQUNDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!contacts/app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"./styles.css\"></require>\n  <div class=\"navbar-header\">\n    <ol class=\"breadcrumb\">\n      <li><a href=\"\">Menu</a></li>\n      <li class=\"active\">Contacts</li>\n    </ol>\n  </div>\n  </nav>\n\n  <loading-indicator loading.bind=\"router.isNavigating || api.isRequesting\"></loading-indicator>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <router-view class=\"col-md-12\"></router-view>\n    </div>\n  </div>\n</template>"; });
define('text!contacts/styles.css', ['module'], function(module) { module.exports = "body { padding-top: 70px; }\n\nsection {\n  margin: 0 20px;\n}\n\na:focus {\n  outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.panel {\n  margin: 20px;\n}\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white;\n}\n\n.button-bar > button {\n  float: right;\n  margin: 20px;\n}\n\nli.list-group-item {\n  list-style: none;\n}\n\nli.list-group-item > a {\n  text-decoration: none;\n}\n\nli.list-group-item.active > a {\n  color: white;\n}\n"; });
define('text!contacts/detail.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n            <h3 class=\"panel-title\">Profile</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            <form role=\"form\" class=\"form-horizontal\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-2 control-label\">First Name</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"text\" placeholder=\"first name\" class=\"form-control\" value.bind=\"contact.firstName\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-2 control-label\">Last Name</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"text\" placeholder=\"last name\" class=\"form-control\" value.bind=\"contact.lastName\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-2 control-label\">Email</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"text\" placeholder=\"email\" class=\"form-control\" value.bind=\"contact.email\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-2 control-label\">Phone Number</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"text\" placeholder=\"phone number\" class=\"form-control\" value.bind=\"contact.phoneNumber\">\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"button-bar\">\r\n        <button class=\"btn\" click.delegate=\"cancel()\">Cancel</button>\r\n        <button class=\"btn btn-success\" click.delegate=\"save()\" disabled.bind=\"!canSave\">Save</button>\r\n    </div>\r\n</template>"; });
define('text!menu/styles.css', ['module'], function(module) { module.exports = "body { padding-top: 70px; }\n\nsection {\n  margin: 0 20px;\n}\n\na:focus {\n  outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.panel {\n  margin: 20px;\n}\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white;\n}\n\n.button-bar > button {\n  float: right;\n  margin: 20px;\n}\n\nli.list-group-item {\n  list-style: none;\n}\n\nli.list-group-item > a {\n  text-decoration: none;\n}\n\nli.list-group-item.active > a {\n  color: white;\n}\n"; });
define('text!contacts/list.html', ['module'], function(module) { module.exports = "<template>\r\n  <table class=\"table table-striped table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>last name</th>\r\n        <th>first name</th>\r\n        <th>email</th>\r\n        <th>#</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr repeat.for=\"contact of contacts\">\r\n        <td>${contact.lastName}</td>\r\n        <td>${contact.firstName} </td>\r\n        <td>${contact.email}</td>\r\n        <td><a route-href=\"route: contact; params.bind: {id:contact.id}\" click.delegate=\"$parent.select(contact)\">edit</a></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</template>"; });
define('text!menu/app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"./styles.css\"></require>\n  <div class=\"navbar-header\">\n    <ol class=\"breadcrumb\">\n      <li class=\"active\">Menu</li>\n    </ol>\n  </div>\n  </nav>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <router-view class=\"col-md-12\"></router-view>\n    </div>\n  </div>\n</template>"; });
define('text!menu/list.html', ['module'], function(module) { module.exports = "<template>\r\n <a click.delegate=\"contacts()\">contacts</a>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map