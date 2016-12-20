webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var app_module_1 = __webpack_require__(23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21);
	var forms_1 = __webpack_require__(24);
	var http_1 = __webpack_require__(28);
	var ng_semantic_1 = __webpack_require__(29);
	var app_component_1 = __webpack_require__(65);
	var login_component_1 = __webpack_require__(66);
	var info_component_1 = __webpack_require__(100);
	var detailed_component_1 = __webpack_require__(102);
	var footer_component_1 = __webpack_require__(104);
	var header_component_1 = __webpack_require__(106);
	var appRouter_module_1 = __webpack_require__(108);
	var AppModule = (function () {
	    function AppModule() {
	        // $('.loading-dimmer').removeClass('visible active').addClass('hidden').removeAttr("style");
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            ng_semantic_1.NgSemanticModule,
	            forms_1.FormsModule,
	            platform_browser_1.BrowserModule,
	            http_1.HttpModule,
	            appRouter_module_1.AppRoutingModule,
	        ],
	        declarations: [
	            app_component_1.AppComponent,
	            login_component_1.LoginComponent,
	            info_component_1.InfoComponent,
	            detailed_component_1.DetailedComponent,
	            footer_component_1.FooterComponent,
	            header_component_1.HeaderComponent,
	        ],
	        bootstrap: [app_component_1.AppComponent]
	    }),
	    __metadata("design:paramtypes", [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v2.3.1
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(3), __webpack_require__(25), __webpack_require__(4), __webpack_require__(5), __webpack_require__(26)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
	}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     *  Base class for control directives.
	      * *
	      * Only used internally in the forms module.
	      * *
	     * @abstract
	     */
	    var AbstractControlDirective = (function () {
	        function AbstractControlDirective() {
	        }
	        Object.defineProperty(AbstractControlDirective.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { throw new Error('unimplemented'); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "value", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.value : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.valid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.invalid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.pending : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.errors : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.pristine : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.dirty : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.touched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.untouched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.disabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.enabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.statusChanges : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.valueChanges : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        AbstractControlDirective.prototype.reset = function (value) {
	            if (value === void 0) { value = undefined; }
	            if (this.control)
	                this.control.reset(value);
	        };
	        /**
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControlDirective.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return this.control ? this.control.hasError(errorCode, path) : false;
	        };
	        /**
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControlDirective.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return this.control ? this.control.getError(errorCode, path) : null;
	        };
	        return AbstractControlDirective;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     *  A directive that contains multiple {@link NgControl}s.
	      * *
	      * Only used by the forms module.
	      * *
	     */
	    var ControlContainer = (function (_super) {
	        __extends$1(ControlContainer, _super);
	        function ControlContainer() {
	            _super.apply(this, arguments);
	        }
	        Object.defineProperty(ControlContainer.prototype, "formDirective", {
	            /**
	             *  Get the form to which this container belongs.
	             * @return {?}
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ControlContainer.prototype, "path", {
	            /**
	             *  Get the path to this container.
	             * @return {?}
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return ControlContainer;
	    }(AbstractControlDirective));
	
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isPresent(obj) {
	        return obj != null;
	    }
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isBlank(obj) {
	        return obj == null;
	    }
	    /**
	     * @param {?} a
	     * @param {?} b
	     * @return {?}
	     */
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    /**
	     * @param {?} o
	     * @return {?}
	     */
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	
	    /**
	     *  Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        /**
	         * @param {?} m1
	         * @param {?} m2
	         * @return {?}
	         */
	        StringMapWrapper.merge = function (m1, m2) {
	            var /** @type {?} */ m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        /**
	         * @param {?} m1
	         * @param {?} m2
	         * @return {?}
	         */
	        StringMapWrapper.equals = function (m1, m2) {
	            var /** @type {?} */ k1 = Object.keys(m1);
	            var /** @type {?} */ k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var /** @type {?} */ i = 0; i < k1.length; i++) {
	                var /** @type {?} */ key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        /**
	         * @param {?} arr
	         * @param {?} condition
	         * @return {?}
	         */
	        ListWrapper.findLast = function (arr, condition) {
	            for (var /** @type {?} */ i = arr.length - 1; i >= 0; i--) {
	                if (condition(arr[i])) {
	                    return arr[i];
	                }
	            }
	            return null;
	        };
	        /**
	         * @param {?} list
	         * @param {?} items
	         * @return {?}
	         */
	        ListWrapper.removeAll = function (list, items) {
	            for (var /** @type {?} */ i = 0; i < items.length; ++i) {
	                var /** @type {?} */ index = list.indexOf(items[i]);
	                if (index > -1) {
	                    list.splice(index, 1);
	                }
	            }
	        };
	        /**
	         * @param {?} list
	         * @param {?} el
	         * @return {?}
	         */
	        ListWrapper.remove = function (list, el) {
	            var /** @type {?} */ index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        /**
	         * @param {?} a
	         * @param {?} b
	         * @return {?}
	         */
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var /** @type {?} */ i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        /**
	         * @param {?} list
	         * @return {?}
	         */
	        ListWrapper.flatten = function (list) {
	            return list.reduce(function (flat, item) {
	                var /** @type {?} */ flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
	                return ((flat)).concat(flatItem);
	            }, []);
	        };
	        return ListWrapper;
	    }());
	
	    var /** @type {?} */ isPromise = _angular_core.__core_private__.isPromise;
	
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    function isEmptyInputValue(value) {
	        return value == null || typeof value === 'string' && value.length === 0;
	    }
	    /**
	     * Providers for validators to be used for {@link FormControl}s in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * ### Example
	     *
	     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	     * @stable
	     */
	    var /** @type {?} */ NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
	    /**
	     * Providers for asynchronous validators to be used for {@link FormControl}s
	     * in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * See {@link NG_VALIDATORS} for more details.
	     *
	     * @stable
	     */
	    var /** @type {?} */ NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
	    /**
	     *  Provides a set of validators used by form controls.
	      * *
	      * A validator is a function that processes a {@link FormControl} or collection of
	      * controls and returns a map of errors. A null map means that validation has passed.
	      * *
	      * ### Example
	      * *
	      * ```typescript
	      * var loginControl = new FormControl("", Validators.required)
	      * ```
	      * *
	     */
	    var Validators = (function () {
	        function Validators() {
	        }
	        /**
	         *  Validator that requires controls to have a non-empty value.
	         * @param {?} control
	         * @return {?}
	         */
	        Validators.required = function (control) {
	            return isEmptyInputValue(control.value) ? { 'required': true } : null;
	        };
	        /**
	         *  Validator that requires control value to be true.
	         * @param {?} control
	         * @return {?}
	         */
	        Validators.requiredTrue = function (control) {
	            return control.value === true ? null : { 'required': true };
	        };
	        /**
	         *  Validator that requires controls to have a value of a minimum length.
	         * @param {?} minLength
	         * @return {?}
	         */
	        Validators.minLength = function (minLength) {
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var /** @type {?} */ length = control.value ? control.value.length : 0;
	                return length < minLength ?
	                    { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         *  Validator that requires controls to have a value of a maximum length.
	         * @param {?} maxLength
	         * @return {?}
	         */
	        Validators.maxLength = function (maxLength) {
	            return function (control) {
	                var /** @type {?} */ length = control.value ? control.value.length : 0;
	                return length > maxLength ?
	                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         *  Validator that requires a control to match a regex to its value.
	         * @param {?} pattern
	         * @return {?}
	         */
	        Validators.pattern = function (pattern) {
	            if (!pattern)
	                return Validators.nullValidator;
	            var /** @type {?} */ regex;
	            var /** @type {?} */ regexStr;
	            if (typeof pattern === 'string') {
	                regexStr = "^" + pattern + "$";
	                regex = new RegExp(regexStr);
	            }
	            else {
	                regexStr = pattern.toString();
	                regex = pattern;
	            }
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var /** @type {?} */ value = control.value;
	                return regex.test(value) ? null :
	                    { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
	            };
	        };
	        /**
	         *  No-op validator.
	         * @param {?} c
	         * @return {?}
	         */
	        Validators.nullValidator = function (c) { return null; };
	        /**
	         *  Compose multiple validators into a single function that returns the union
	          * of the individual error maps.
	         * @param {?} validators
	         * @return {?}
	         */
	        Validators.compose = function (validators) {
	            if (!validators)
	                return null;
	            var /** @type {?} */ presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                return _mergeErrors(_executeValidators(control, presentValidators));
	            };
	        };
	        /**
	         * @param {?} validators
	         * @return {?}
	         */
	        Validators.composeAsync = function (validators) {
	            if (!validators)
	                return null;
	            var /** @type {?} */ presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                var /** @type {?} */ promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	                return Promise.all(promises).then(_mergeErrors);
	            };
	        };
	        return Validators;
	    }());
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function _convertToPromise(obj) {
	        return isPromise(obj) ? obj : rxjs_operator_toPromise.toPromise.call(obj);
	    }
	    /**
	     * @param {?} control
	     * @param {?} validators
	     * @return {?}
	     */
	    function _executeValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    /**
	     * @param {?} control
	     * @param {?} validators
	     * @return {?}
	     */
	    function _executeAsyncValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    /**
	     * @param {?} arrayOfErrors
	     * @return {?}
	     */
	    function _mergeErrors(arrayOfErrors) {
	        var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
	            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
	        }, {});
	        return Object.keys(res).length === 0 ? null : res;
	    }
	
	    /**
	     * Used to provide a {@link ControlValueAccessor} for form controls.
	     *
	     * See {@link DefaultValueAccessor} for how to implement one.
	     * @stable
	     */
	    var /** @type {?} */ NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');
	
	    var /** @type {?} */ CHECKBOX_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
	        multi: true,
	    };
	    /**
	     *  The accessor for writing a value and listening to changes on a checkbox input element.
	      * *
	      * ### Example
	      * ```
	      * <input type="checkbox" name="rememberLogin" ngModel>
	      * ```
	      * *
	      * @stable
	     */
	    var CheckboxControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function CheckboxControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        CheckboxControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                        providers: [CHECKBOX_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return CheckboxControlValueAccessor;
	    }());
	
	    var /** @type {?} */ DEFAULT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  The default accessor for writing a value and listening to changes that is used by the
	      * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	      * *
	      * ### Example
	      * ```
	      * <input type="text" name="searchQuery" ngModel>
	      * ```
	      * *
	      * @stable
	     */
	    var DefaultValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function DefaultValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.writeValue = function (value) {
	            var /** @type {?} */ normalizedValue = value == null ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        DefaultValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                        // TODO: vsavkin replace the above selector with the one below it once
	                        // https://github.com/angular/angular/issues/3011 is implemented
	                        // selector: '[ngControl],[ngModel],[ngFormControl]',
	                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [DEFAULT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        DefaultValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return DefaultValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * @param {?} validator
	     * @return {?}
	     */
	    function normalizeValidator(validator) {
	        if (((validator)).validate) {
	            return function (c) { return ((validator)).validate(c); };
	        }
	        else {
	            return (validator);
	        }
	    }
	    /**
	     * @param {?} validator
	     * @return {?}
	     */
	    function normalizeAsyncValidator(validator) {
	        if (((validator)).validate) {
	            return function (c) { return ((validator)).validate(c); };
	        }
	        else {
	            return (validator);
	        }
	    }
	
	    var /** @type {?} */ NUMBER_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  The accessor for writing a number value and listening to changes that is used by the
	      * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	      * *
	      * ### Example
	      * ```
	      * <input type="number" [(ngModel)]="age">
	      * ```
	     */
	    var NumberValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function NumberValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.writeValue = function (value) {
	            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	            var /** @type {?} */ normalizedValue = value == null ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        NumberValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [NUMBER_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        NumberValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return NumberValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @return {?}
	     */
	    function unimplemented() {
	        throw new Error('unimplemented');
	    }
	    /**
	     *  A base class that all control directive extend.
	      * It binds a {@link FormControl} object to a DOM element.
	      * *
	      * Used internally by Angular forms.
	      * *
	     * @abstract
	     */
	    var NgControl = (function (_super) {
	        __extends$2(NgControl, _super);
	        function NgControl() {
	            _super.apply(this, arguments);
	            /** @internal */
	            this._parent = null;
	            this.name = null;
	            this.valueAccessor = null;
	            /** @internal */
	            this._rawValidators = [];
	            /** @internal */
	            this._rawAsyncValidators = [];
	        }
	        Object.defineProperty(NgControl.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return (unimplemented()); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgControl.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return (unimplemented()); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @abstract
	         * @param {?} newValue
	         * @return {?}
	         */
	        NgControl.prototype.viewToModelUpdate = function (newValue) { };
	        return NgControl;
	    }(AbstractControlDirective));
	
	    var /** @type {?} */ RADIO_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  Internal class used by Angular to uncheck radio buttons with the matching name.
	     */
	    var RadioControlRegistry = (function () {
	        function RadioControlRegistry() {
	            this._accessors = [];
	        }
	        /**
	         * @param {?} control
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype.add = function (control, accessor) {
	            this._accessors.push([control, accessor]);
	        };
	        /**
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype.remove = function (accessor) {
	            for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
	                if (this._accessors[i][1] === accessor) {
	                    this._accessors.splice(i, 1);
	                    return;
	                }
	            }
	        };
	        /**
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype.select = function (accessor) {
	            var _this = this;
	            this._accessors.forEach(function (c) {
	                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                    c[1].fireUncheck(accessor.value);
	                }
	            });
	        };
	        /**
	         * @param {?} controlPair
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	            if (!controlPair[0].control)
	                return false;
	            return controlPair[0]._parent === accessor._control._parent &&
	                controlPair[1].name === accessor.name;
	        };
	        RadioControlRegistry.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        RadioControlRegistry.ctorParameters = function () { return []; };
	        return RadioControlRegistry;
	    }());
	    /**
	     *  *
	      * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	      * to keep the view synced with the {@link FormControl} model.
	      * *
	      * *
	      * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	      * value accessor will be active on any radio control that has a form directive. You do
	      * **not** need to add a special selector to activate it.
	      * *
	      * ### How to use radio buttons with form directives
	      * *
	      * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
	      * in the same group have the same `name` attribute.  Radio buttons with different `name`
	      * attributes do not affect each other.
	      * *
	      * {@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
	      * *
	      * When using radio buttons in a reactive form, radio buttons in the same group should have the
	      * same `formControlName`. You can also add a `name` attribute, but it's optional.
	      * *
	      * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * @stable
	     */
	    var RadioControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         * @param {?} _registry
	         * @param {?} _injector
	         */
	        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this._registry = _registry;
	            this._injector = _injector;
	            this.onChange = function () { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.ngOnInit = function () {
	            this._control = this._injector.get(NgControl);
	            this._checkName();
	            this._registry.add(this._control, this);
	        };
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.writeValue = function (value) {
	            this._state = value === this.value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this._fn = fn;
	            this.onChange = function () {
	                fn(_this.value);
	                _this._registry.select(_this);
	            };
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype._checkName = function () {
	            if (this.name && this.formControlName && this.name !== this.formControlName) {
	                this._throwNameError();
	            }
	            if (!this.name && this.formControlName)
	                this.name = this.formControlName;
	        };
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype._throwNameError = function () {
	            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	        };
	        RadioControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                        providers: [RADIO_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RadioControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	            { type: RadioControlRegistry, },
	            { type: _angular_core.Injector, },
	        ]; };
	        RadioControlValueAccessor.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'formControlName': [{ type: _angular_core.Input },],
	            'value': [{ type: _angular_core.Input },],
	        };
	        return RadioControlValueAccessor;
	    }());
	
	    var /** @type {?} */ RANGE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RangeValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  The accessor for writing a range value and listening to changes that is used by the
	      * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	      * *
	      * ### Example
	      * ```
	      * <input type="range" [(ngModel)]="age" >
	      * ```
	     */
	    var RangeValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function RangeValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        RangeValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [RANGE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RangeValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return RangeValueAccessor;
	    }());
	
	    var /** @type {?} */ SELECT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * @param {?} id
	     * @param {?} value
	     * @return {?}
	     */
	    function _buildValueString(id, value) {
	        if (id == null)
	            return "" + value;
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    /**
	     * @param {?} valueString
	     * @return {?}
	     */
	    function _extractId(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     *  *
	      * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	      * to keep the view synced with the {@link FormControl} model.
	      * *
	      * *
	      * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	      * value accessor will be active on any select control that has a form directive. You do
	      * **not** need to add a special selector to activate it.
	      * *
	      * ### How to use select controls with form directives
	      * *
	      * To use a select in a template-driven form, simply add an `ngModel` and a `name`
	      * attribute to the main `<select>` tag.
	      * *
	      * If your option values are simple strings, you can bind to the normal `value` property
	      * on the option.  If your option values happen to be objects (and you'd like to save the
	      * selection in your form as an object), use `ngValue` instead:
	      * *
	      * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
	      * *
	      * In reactive forms, you'll also want to add your form directive (`formControlName` or
	      * `formControl`) on the main `<select>` tag. Like in the former example, you have the
	      * choice of binding to the  `value` or `ngValue` property on the select's options.
	      * *
	      * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
	      * *
	      * Note: We listen to the 'change' event because 'input' events aren't fired
	      * for selects in Firefox and IE:
	      * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	      * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var SelectControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function SelectControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.writeValue = function (value) {
	            this.value = value;
	            var /** @type {?} */ valueString = _buildValueString(this._getOptionId(value), value);
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (valueString) {
	                _this.value = valueString;
	                fn(_this._getOptionValue(valueString));
	            };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /**
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id), value))
	                    return id;
	            }
	            return null;
	        };
	        /**
	         * @param {?} valueString
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var /** @type {?} */ id = _extractId(valueString);
	            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
	        };
	        SelectControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return SelectControlValueAccessor;
	    }());
	    /**
	     *  *
	      * *
	      * See docs for {@link SelectControlValueAccessor} for usage examples.
	      * *
	     */
	    var NgSelectOption = (function () {
	        /**
	         * @param {?} _element
	         * @param {?} _renderer
	         * @param {?} _select
	         */
	        function NgSelectOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (this._select)
	                this.id = this._select._registerOption();
	        }
	        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._select._optionMap.set(this.id, value);
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectOption.prototype, "value", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                this._setElementValue(value);
	                if (this._select)
	                    this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgSelectOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /**
	         * @return {?}
	         */
	        NgSelectOption.prototype.ngOnDestroy = function () {
	            if (this._select) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectOption.ctorParameters = function () { return [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ]; };
	        NgSelectOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectOption;
	    }());
	
	    var /** @type {?} */ SELECT_MULTIPLE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * @param {?} id
	     * @param {?} value
	     * @return {?}
	     */
	    function _buildValueString$1(id, value) {
	        if (id == null)
	            return "" + value;
	        if (typeof value === 'string')
	            value = "'" + value + "'";
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    /**
	     * @param {?} valueString
	     * @return {?}
	     */
	    function _extractId$1(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     *  The accessor for writing a value and listening to changes on a select element.
	      * *
	     */
	    var SelectMultipleControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	            var _this = this;
	            this.value = value;
	            var /** @type {?} */ optionSelectedStateSetter;
	            if (Array.isArray(value)) {
	                // convert values to ids
	                var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
	                optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
	            }
	            else {
	                optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
	            }
	            this._optionMap.forEach(optionSelectedStateSetter);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (_) {
	                var /** @type {?} */ selected = [];
	                if (_.hasOwnProperty('selectedOptions')) {
	                    var /** @type {?} */ options = _.selectedOptions;
	                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
	                        var /** @type {?} */ opt = options.item(i);
	                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	                else {
	                    var /** @type {?} */ options = (_.options);
	                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
	                        var /** @type {?} */ opt = options.item(i);
	                        if (opt.selected) {
	                            var /** @type {?} */ val = _this._getOptionValue(opt.value);
	                            selected.push(val);
	                        }
	                    }
	                }
	                _this.value = selected;
	                fn(selected);
	            };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	            var /** @type {?} */ id = (this._idCounter++).toString();
	            this._optionMap.set(id, value);
	            return id;
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id)._value, value))
	                    return id;
	            }
	            return null;
	        };
	        /**
	         * @param {?} valueString
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var /** @type {?} */ id = _extractId$1(valueString);
	            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
	        };
	        SelectMultipleControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectMultipleControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return SelectMultipleControlValueAccessor;
	    }());
	    /**
	     *  Marks `<option>` as dynamic, so Angular can be notified when options change.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <select multiple name="city" ngModel>
	      * <option *ngFor="let c of cities" [value]="c"></option>
	      * </select>
	      * ```
	     */
	    var NgSelectMultipleOption = (function () {
	        /**
	         * @param {?} _element
	         * @param {?} _renderer
	         * @param {?} _select
	         */
	        function NgSelectMultipleOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (this._select) {
	                this.id = this._select._registerOption(this);
	            }
	        }
	        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._value = value;
	                this._setElementValue(_buildValueString$1(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                if (this._select) {
	                    this._value = value;
	                    this._setElementValue(_buildValueString$1(this.id, value));
	                    this._select.writeValue(this._select.value);
	                }
	                else {
	                    this._setElementValue(value);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgSelectMultipleOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /**
	         * @param {?} selected
	         * @return {?}
	         */
	        NgSelectMultipleOption.prototype._setSelected = function (selected) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	        };
	        /**
	         * @return {?}
	         */
	        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	            if (this._select) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectMultipleOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectMultipleOption.ctorParameters = function () { return [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ]; };
	        NgSelectMultipleOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectMultipleOption;
	    }());
	
	    /**
	     * @param {?} name
	     * @param {?} parent
	     * @return {?}
	     */
	    function controlPath(name, parent) {
	        return parent.path.concat([name]);
	    }
	    /**
	     * @param {?} control
	     * @param {?} dir
	     * @return {?}
	     */
	    function setUpControl(control, dir) {
	        if (!control)
	            _throwError(dir, 'Cannot find control with');
	        if (!dir.valueAccessor)
	            _throwError(dir, 'No value accessor for form control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	        dir.valueAccessor.writeValue(control.value);
	        // view -> model
	        dir.valueAccessor.registerOnChange(function (newValue) {
	            dir.viewToModelUpdate(newValue);
	            control.markAsDirty();
	            control.setValue(newValue, { emitModelToViewChange: false });
	        });
	        // touched
	        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	        control.registerOnChange(function (newValue, emitModelEvent) {
	            // control -> view
	            dir.valueAccessor.writeValue(newValue);
	            // control -> ngModel
	            if (emitModelEvent)
	                dir.viewToModelUpdate(newValue);
	        });
	        if (dir.valueAccessor.setDisabledState) {
	            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
	        }
	        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
	        dir._rawValidators.forEach(function (validator) {
	            if (((validator)).registerOnValidatorChange)
	                ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (((validator)).registerOnValidatorChange)
	                ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	    }
	    /**
	     * @param {?} control
	     * @param {?} dir
	     * @return {?}
	     */
	    function cleanUpControl(control, dir) {
	        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
	        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
	        dir._rawValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange) {
	                validator.registerOnValidatorChange(null);
	            }
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange) {
	                validator.registerOnValidatorChange(null);
	            }
	        });
	        if (control)
	            control._clearChangeFns();
	    }
	    /**
	     * @param {?} control
	     * @param {?} dir
	     * @return {?}
	     */
	    function setUpFormContainer(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    }
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    function _noControlError(dir) {
	        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
	    }
	    /**
	     * @param {?} dir
	     * @param {?} message
	     * @return {?}
	     */
	    function _throwError(dir, message) {
	        var /** @type {?} */ messageEnd;
	        if (dir.path.length > 1) {
	            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	        }
	        else if (dir.path[0]) {
	            messageEnd = "name: '" + dir.path + "'";
	        }
	        else {
	            messageEnd = 'unspecified name attribute';
	        }
	        throw new Error(message + " " + messageEnd);
	    }
	    /**
	     * @param {?} validators
	     * @return {?}
	     */
	    function composeValidators(validators) {
	        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
	    }
	    /**
	     * @param {?} validators
	     * @return {?}
	     */
	    function composeAsyncValidators(validators) {
	        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
	            null;
	    }
	    /**
	     * @param {?} changes
	     * @param {?} viewModel
	     * @return {?}
	     */
	    function isPropertyUpdated(changes, viewModel) {
	        if (!changes.hasOwnProperty('model'))
	            return false;
	        var /** @type {?} */ change = changes['model'];
	        if (change.isFirstChange())
	            return true;
	        return !looseIdentical(viewModel, change.currentValue);
	    }
	    var /** @type {?} */ BUILTIN_ACCESSORS = [
	        CheckboxControlValueAccessor,
	        RangeValueAccessor,
	        NumberValueAccessor,
	        SelectControlValueAccessor,
	        SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor,
	    ];
	    /**
	     * @param {?} valueAccessor
	     * @return {?}
	     */
	    function isBuiltInAccessor(valueAccessor) {
	        return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
	    }
	    /**
	     * @param {?} dir
	     * @param {?} valueAccessors
	     * @return {?}
	     */
	    function selectValueAccessor(dir, valueAccessors) {
	        if (!valueAccessors)
	            return null;
	        var /** @type {?} */ defaultAccessor;
	        var /** @type {?} */ builtinAccessor;
	        var /** @type {?} */ customAccessor;
	        valueAccessors.forEach(function (v) {
	            if (v.constructor === DefaultValueAccessor) {
	                defaultAccessor = v;
	            }
	            else if (isBuiltInAccessor(v)) {
	                if (builtinAccessor)
	                    _throwError(dir, 'More than one built-in value accessor matches form control with');
	                builtinAccessor = v;
	            }
	            else {
	                if (customAccessor)
	                    _throwError(dir, 'More than one custom value accessor matches form control with');
	                customAccessor = v;
	            }
	        });
	        if (customAccessor)
	            return customAccessor;
	        if (builtinAccessor)
	            return builtinAccessor;
	        if (defaultAccessor)
	            return defaultAccessor;
	        _throwError(dir, 'No valid value accessor for form control with');
	        return null;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     *  This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	      * *
	     */
	    var AbstractFormGroupDirective = (function (_super) {
	        __extends(AbstractFormGroupDirective, _super);
	        function AbstractFormGroupDirective() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @return {?}
	         */
	        AbstractFormGroupDirective.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormGroup(this);
	        };
	        /**
	         * @return {?}
	         */
	        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormGroup(this);
	            }
	        };
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	            /**
	             *  Get the {@link FormGroup} backing this binding.
	             * @return {?}
	             */
	            get: function () { return this.formDirective.getFormGroup(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	            /**
	             *  Get the path to this control group.
	             * @return {?}
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	            /**
	             *  Get the {@link Form} to which this group belongs.
	             * @return {?}
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @return {?}
	         */
	        AbstractFormGroupDirective.prototype._checkParentType = function () { };
	        return AbstractFormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var AbstractControlStatus = (function () {
	        /**
	         * @param {?} cd
	         */
	        function AbstractControlStatus(cd) {
	            this._cd = cd;
	        }
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.untouched : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.touched : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.pristine : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.dirty : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.valid : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.invalid : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.pending : false; },
	            enumerable: true,
	            configurable: true
	        });
	        return AbstractControlStatus;
	    }());
	    var /** @type {?} */ ngControlStatusHost = {
	        '[class.ng-untouched]': 'ngClassUntouched',
	        '[class.ng-touched]': 'ngClassTouched',
	        '[class.ng-pristine]': 'ngClassPristine',
	        '[class.ng-dirty]': 'ngClassDirty',
	        '[class.ng-valid]': 'ngClassValid',
	        '[class.ng-invalid]': 'ngClassInvalid',
	        '[class.ng-pending]': 'ngClassPending',
	    };
	    /**
	     *  Directive automatically applied to Angular form controls that sets CSS classes
	      * based on control status (valid/invalid/dirty/etc).
	      * *
	     */
	    var NgControlStatus = (function (_super) {
	        __extends$3(NgControlStatus, _super);
	        /**
	         * @param {?} cd
	         */
	        function NgControlStatus(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatus.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
	        ];
	        /** @nocollapse */
	        NgControlStatus.ctorParameters = function () { return [
	            { type: NgControl, decorators: [{ type: _angular_core.Self },] },
	        ]; };
	        return NgControlStatus;
	    }(AbstractControlStatus));
	    /**
	     *  Directive automatically applied to Angular form groups that sets CSS classes
	      * based on control status (valid/invalid/dirty/etc).
	      * *
	     */
	    var NgControlStatusGroup = (function (_super) {
	        __extends$3(NgControlStatusGroup, _super);
	        /**
	         * @param {?} cd
	         */
	        function NgControlStatusGroup(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatusGroup.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
	                        host: ngControlStatusHost
	                    },] },
	        ];
	        /** @nocollapse */
	        NgControlStatusGroup.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
	        ]; };
	        return NgControlStatusGroup;
	    }(AbstractControlStatus));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     *  Use by directives and components to emit custom Events.
	      * *
	      * ### Examples
	      * *
	      * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	      * title gets clicked:
	      * *
	      * ```
	      * selector: 'zippy',
	      * template: `
	      * <div class="zippy">
	      * <div (click)="toggle()">Toggle</div>
	      * <div [hidden]="!visible">
	      * <ng-content></ng-content>
	      * </div>
	      * </div>`})
	      * export class Zippy {
	      * visible: boolean = true;
	      * @Output() open: EventEmitter<any> = new EventEmitter();
	      * @Output() close: EventEmitter<any> = new EventEmitter();
	      * *
	      * toggle() {
	      * this.visible = !this.visible;
	      * if (this.visible) {
	      * this.open.emit(null);
	      * } else {
	      * this.close.emit(null);
	      * }
	      * }
	      * }
	      * ```
	      * *
	      * The events payload can be accessed by the parameter `$event` on the components output event
	      * handler:
	      * *
	      * ```
	      * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	      * ```
	      * *
	      * Uses Rx.Observable but provides an adapter to make it work as specified here:
	      * https://github.com/jhusain/observable-spec
	      * *
	      * Once a reference implementation of the spec is available, switch to it.
	     */
	    var EventEmitter = (function (_super) {
	        __extends$5(EventEmitter, _super);
	        /**
	         *  Creates an instance of [EventEmitter], which depending on [isAsync],
	          * delivers events synchronously or asynchronously.
	         * @param {?=} isAsync
	         */
	        function EventEmitter(isAsync) {
	            if (isAsync === void 0) { isAsync = false; }
	            _super.call(this);
	            this.__isAsync = isAsync;
	        }
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	        /**
	         * @param {?=} generatorOrNext
	         * @param {?=} error
	         * @param {?=} complete
	         * @return {?}
	         */
	        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	            var /** @type {?} */ schedulerFn;
	            var /** @type {?} */ errorFn = function (err) { return null; };
	            var /** @type {?} */ completeFn = function () { return null; };
	            if (generatorOrNext && typeof generatorOrNext === 'object') {
	                schedulerFn = this.__isAsync ? function (value) {
	                    setTimeout(function () { return generatorOrNext.next(value); });
	                } : function (value) { generatorOrNext.next(value); };
	                if (generatorOrNext.error) {
	                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                        function (err) { generatorOrNext.error(err); };
	                }
	                if (generatorOrNext.complete) {
	                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                        function () { generatorOrNext.complete(); };
	                }
	            }
	            else {
	                schedulerFn = this.__isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                    function (value) { generatorOrNext(value); };
	                if (error) {
	                    errorFn =
	                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	                }
	                if (complete) {
	                    completeFn =
	                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	                }
	            }
	            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	        };
	        return EventEmitter;
	    }(rxjs_Subject.Subject));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	     */
	    var /** @type {?} */ VALID = 'VALID';
	    /**
	     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	     */
	    var /** @type {?} */ INVALID = 'INVALID';
	    /**
	     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	     * errors are not yet available for the input value.
	     */
	    var /** @type {?} */ PENDING = 'PENDING';
	    /**
	     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
	     * calculations of validity or value.
	     */
	    var /** @type {?} */ DISABLED = 'DISABLED';
	    /**
	     * @param {?} control
	     * @param {?} path
	     * @param {?} delimiter
	     * @return {?}
	     */
	    function _find(control, path, delimiter) {
	        if (path == null)
	            return null;
	        if (!(path instanceof Array)) {
	            path = ((path)).split(delimiter);
	        }
	        if (path instanceof Array && (path.length === 0))
	            return null;
	        return ((path)).reduce(function (v, name) {
	            if (v instanceof FormGroup) {
	                return v.controls[name] || null;
	            }
	            if (v instanceof FormArray) {
	                return v.at(/** @type {?} */ (name)) || null;
	            }
	            return null;
	        }, control);
	    }
	    /**
	     * @param {?} r
	     * @return {?}
	     */
	    function toObservable(r) {
	        return isPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
	    }
	    /**
	     * @param {?} validator
	     * @return {?}
	     */
	    function coerceToValidator(validator) {
	        return Array.isArray(validator) ? composeValidators(validator) : validator;
	    }
	    /**
	     * @param {?} asyncValidator
	     * @return {?}
	     */
	    function coerceToAsyncValidator(asyncValidator) {
	        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
	    }
	    /**
	     *  {@link FormArray}.
	      * *
	      * It provides some of the shared behavior that all controls and groups of controls have, like
	      * running validators, calculating status, and resetting state. It also defines the properties
	      * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
	      * instantiated directly.
	      * *
	     * @abstract
	     */
	    var AbstractControl = (function () {
	        /**
	         * @param {?} validator
	         * @param {?} asyncValidator
	         */
	        function AbstractControl(validator, asyncValidator) {
	            this.validator = validator;
	            this.asyncValidator = asyncValidator;
	            /** @internal */
	            this._onCollectionChange = function () { };
	            this._pristine = true;
	            this._touched = false;
	            /** @internal */
	            this._onDisabledChange = [];
	        }
	        Object.defineProperty(AbstractControl.prototype, "value", {
	            /**
	             *  The value of the control.
	             * @return {?}
	             */
	            get: function () { return this._value; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "parent", {
	            /**
	             *  The parent control.
	             * @return {?}
	             */
	            get: function () { return this._parent; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "status", {
	            /**
	             *  The validation status of the control. There are four possible
	              * validation statuses:
	              * *
	              * * **VALID**:  control has passed all validation checks
	              * * **INVALID**: control has failed at least one validation check
	              * * **PENDING**: control is in the midst of conducting a validation check
	              * * **DISABLED**: control is exempt from validation checks
	              * *
	              * These statuses are mutually exclusive, so a control cannot be
	              * both valid AND invalid or invalid AND disabled.
	             * @return {?}
	             */
	            get: function () { return this._status; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valid", {
	            /**
	             *  A control is `valid` when its `status === VALID`.
	              * *
	              * In order to have this status, the control must have passed all its
	              * validation checks.
	             * @return {?}
	             */
	            get: function () { return this._status === VALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "invalid", {
	            /**
	             *  A control is `invalid` when its `status === INVALID`.
	              * *
	              * In order to have this status, the control must have failed
	              * at least one of its validation checks.
	             * @return {?}
	             */
	            get: function () { return this._status === INVALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pending", {
	            /**
	             *  A control is `pending` when its `status === PENDING`.
	              * *
	              * In order to have this status, the control must be in the
	              * middle of conducting a validation check.
	             * @return {?}
	             */
	            get: function () { return this._status == PENDING; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "disabled", {
	            /**
	             *  A control is `disabled` when its `status === DISABLED`.
	              * *
	              * Disabled controls are exempt from validation checks and
	              * are not included in the aggregate value of their ancestor
	              * controls.
	             * @return {?}
	             */
	            get: function () { return this._status === DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "enabled", {
	            /**
	             *  A control is `enabled` as long as its `status !== DISABLED`.
	              * *
	              * In other words, it has a status of `VALID`, `INVALID`, or
	              * `PENDING`.
	             * @return {?}
	             */
	            get: function () { return this._status !== DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "errors", {
	            /**
	             *  Returns any errors generated by failing validation. If there
	              * are no errors, it will return null.
	             * @return {?}
	             */
	            get: function () { return this._errors; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pristine", {
	            /**
	             *  A control is `pristine` if the user has not yet changed
	              * the value in the UI.
	              * *
	              * Note that programmatic changes to a control's value will
	              * *not* mark it dirty.
	             * @return {?}
	             */
	            get: function () { return this._pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "dirty", {
	            /**
	             *  A control is `dirty` if the user has changed the value
	              * in the UI.
	              * *
	              * Note that programmatic changes to a control's value will
	              * *not* mark it dirty.
	             * @return {?}
	             */
	            get: function () { return !this.pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "touched", {
	            /**
	             *  A control is marked `touched` once the user has triggered
	              * a `blur` event on it.
	             * @return {?}
	             */
	            get: function () { return this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "untouched", {
	            /**
	             *  A control is `untouched` if the user has not yet triggered
	              * a `blur` event on it.
	             * @return {?}
	             */
	            get: function () { return !this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	            /**
	             *  Emits an event every time the value of the control changes, in
	              * the UI or programmatically.
	             * @return {?}
	             */
	            get: function () { return this._valueChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	            /**
	             *  Emits an event every time the validation status of the control
	              * is re-calculated.
	             * @return {?}
	             */
	            get: function () { return this._statusChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the synchronous validators that are active on this control.  Calling
	          * this will overwrite any existing sync validators.
	         * @param {?} newValidator
	         * @return {?}
	         */
	        AbstractControl.prototype.setValidators = function (newValidator) {
	            this.validator = coerceToValidator(newValidator);
	        };
	        /**
	         *  Sets the async validators that are active on this control. Calling this
	          * will overwrite any existing async validators.
	         * @param {?} newValidator
	         * @return {?}
	         */
	        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	            this.asyncValidator = coerceToAsyncValidator(newValidator);
	        };
	        /**
	         *  Empties out the sync validator list.
	         * @return {?}
	         */
	        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	        /**
	         *  Empties out the async validator list.
	         * @return {?}
	         */
	        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	        /**
	         *  Marks the control as `touched`.
	          * *
	          * This will also mark all direct ancestors as `touched` to maintain
	          * the model.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = true;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `untouched`.
	          * *
	          * If the control has any children, it will also mark all children as `untouched`
	          * to maintain the model, and re-calculate the `touched` status of all parent
	          * controls.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsUntouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = false;
	            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `dirty`.
	          * *
	          * This will also mark all direct ancestors as `dirty` to maintain
	          * the model.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsDirty = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = false;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsDirty({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `pristine`.
	          * *
	          * If the control has any children, it will also mark all children as `pristine`
	          * to maintain the model, and re-calculate the `pristine` status of all parent
	          * controls.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsPristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = true;
	            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `pending`.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsPending = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._status = PENDING;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsPending({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Disables the control. This means the control will be exempt from validation checks and
	          * excluded from the aggregate value of any parent. Its status is `DISABLED`.
	          * *
	          * If the control has children, all children will be disabled to maintain the model.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.disable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = DISABLED;
	            this._errors = null;
	            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	            this._updateValue();
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
	        };
	        /**
	         *  Enables the control. This means the control will be included in validation checks and
	          * the aggregate value of its parent. Its status is re-calculated based on its value and
	          * its validators.
	          * *
	          * If the control has children, all children will be enabled.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.enable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = VALID;
	            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
	        };
	        /**
	         * @param {?} onlySelf
	         * @return {?}
	         */
	        AbstractControl.prototype._updateAncestors = function (onlySelf) {
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity();
	                this._parent._updatePristine();
	                this._parent._updateTouched();
	            }
	        };
	        /**
	         * @param {?} parent
	         * @return {?}
	         */
	        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	        /**
	         *  Sets the value of the control. Abstract method (implemented in sub-classes).
	         * @abstract
	         * @param {?} value
	         * @param {?=} options
	         * @return {?}
	         */
	        AbstractControl.prototype.setValue = function (value, options) { };
	        /**
	         *  Patches the value of the control. Abstract method (implemented in sub-classes).
	         * @abstract
	         * @param {?} value
	         * @param {?=} options
	         * @return {?}
	         */
	        AbstractControl.prototype.patchValue = function (value, options) { };
	        /**
	         *  Resets the control. Abstract method (implemented in sub-classes).
	         * @abstract
	         * @param {?=} value
	         * @param {?=} options
	         * @return {?}
	         */
	        AbstractControl.prototype.reset = function (value, options) { };
	        /**
	         *  Re-calculates the value and validation status of the control.
	          * *
	          * By default, it will also update the value and validity of its ancestors.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.updateValueAndValidity = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._setInitialStatus();
	            this._updateValue();
	            if (this.enabled) {
	                this._errors = this._runValidator();
	                this._status = this._calculateStatus();
	                if (this._status === VALID || this._status === PENDING) {
	                    this._runAsyncValidator(emitEvent);
	                }
	            }
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            }
	        };
	        /**
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype._updateTreeValidity = function (_a) {
	            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
	            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._runValidator = function () {
	            return this.validator ? this.validator(this) : null;
	        };
	        /**
	         * @param {?} emitEvent
	         * @return {?}
	         */
	        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	            var _this = this;
	            if (this.asyncValidator) {
	                this._status = PENDING;
	                this._cancelExistingSubscription();
	                var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
	                this._asyncValidationSubscription =
	                    obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	            }
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._cancelExistingSubscription = function () {
	            if (this._asyncValidationSubscription) {
	                this._asyncValidationSubscription.unsubscribe();
	            }
	        };
	        /**
	         *  Sets errors on a form control.
	          * *
	          * This is used when validations are run manually by the user, rather than automatically.
	          * *
	          * Calling `setErrors` will also update the validity of the parent control.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const login = new FormControl("someLogin");
	          * login.setErrors({
	          * "notUnique": true
	          * });
	          * *
	          * expect(login.valid).toEqual(false);
	          * expect(login.errors).toEqual({"notUnique": true});
	          * *
	          * login.setValue("someOtherLogin");
	          * *
	          * expect(login.valid).toEqual(true);
	          * ```
	         * @param {?} errors
	         * @param {?=} __1
	         * @return {?}
	         */
	        AbstractControl.prototype.setErrors = function (errors, _a) {
	            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	            this._errors = errors;
	            this._updateControlsErrors(emitEvent !== false);
	        };
	        /**
	         *  Retrieves a child control given the control's name or path.
	          * *
	          * Paths can be passed in as an array or a string delimited by a dot.
	          * *
	          * To get a control nested within a `person` sub-group:
	          * *
	          * * `this.form.get('person.name');`
	          * *
	          * -OR-
	          * *
	          * * `this.form.get(['person', 'name']);`
	         * @param {?} path
	         * @return {?}
	         */
	        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	        /**
	         *  Returns true if the control with the given path has the error specified. Otherwise
	          * returns null or undefined.
	          * *
	          * If no path is given, it checks for the error on the present control.
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControl.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            var /** @type {?} */ control = path ? this.get(path) : this;
	            return control && control._errors ? control._errors[errorCode] : null;
	        };
	        /**
	         *  Returns true if the control with the given path has the error specified. Otherwise
	          * returns false.
	          * *
	          * If no path is given, it checks for the error on the present control.
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControl.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return !!this.getError(errorCode, path);
	        };
	        Object.defineProperty(AbstractControl.prototype, "root", {
	            /**
	             *  Retrieves the top-level ancestor of this control.
	             * @return {?}
	             */
	            get: function () {
	                var /** @type {?} */ x = this;
	                while (x._parent) {
	                    x = x._parent;
	                }
	                return x;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} emitEvent
	         * @return {?}
	         */
	        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	            this._status = this._calculateStatus();
	            if (emitEvent) {
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent) {
	                this._parent._updateControlsErrors(emitEvent);
	            }
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._initObservables = function () {
	            this._valueChanges = new EventEmitter();
	            this._statusChanges = new EventEmitter();
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._calculateStatus = function () {
	            if (this._allControlsDisabled())
	                return DISABLED;
	            if (this._errors)
	                return INVALID;
	            if (this._anyControlsHaveStatus(PENDING))
	                return PENDING;
	            if (this._anyControlsHaveStatus(INVALID))
	                return INVALID;
	            return VALID;
	        };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        AbstractControl.prototype._updateValue = function () { };
	        /**
	         * @abstract
	         * @param {?} cb
	         * @return {?}
	         */
	        AbstractControl.prototype._forEachChild = function (cb) { };
	        /**
	         * @abstract
	         * @param {?} condition
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControls = function (condition) { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        AbstractControl.prototype._allControlsDisabled = function () { };
	        /**
	         * @param {?} status
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	            return this._anyControls(function (control) { return control.status === status; });
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControlsDirty = function () {
	            return this._anyControls(function (control) { return control.dirty; });
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControlsTouched = function () {
	            return this._anyControls(function (control) { return control.touched; });
	        };
	        /**
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype._updatePristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = !this._anyControlsDirty();
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype._updateTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = this._anyControlsTouched();
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * @param {?} formState
	         * @return {?}
	         */
	        AbstractControl.prototype._isBoxedValue = function (formState) {
	            return typeof formState === 'object' && formState !== null &&
	                Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
	        return AbstractControl;
	    }());
	    /**
	     *  *
	      * It is one of the three fundamental building blocks of Angular forms, along with
	      * {@link FormGroup} and {@link FormArray}.
	      * *
	      * *
	      * When instantiating a {@link FormControl}, you can pass in an initial value as the
	      * first argument. Example:
	      * *
	      * ```ts
	      * const ctrl = new FormControl('some value');
	      * console.log(ctrl.value);     // 'some value'
	      * *```
	      * *
	      * You can also initialize the control with a form state object on instantiation,
	      * which includes both the value and whether or not the control is disabled.
	      * You can't use the value key without the disabled key; both are required
	      * to use this way of initialization.
	      * *
	      * ```ts
	      * const ctrl = new FormControl({value: 'n/a', disabled: true});
	      * console.log(ctrl.value);     // 'n/a'
	      * console.log(ctrl.status);   // 'DISABLED'
	      * ```
	      * *
	      * To include a sync validator (or an array of sync validators) with the control,
	      * pass it in as the second argument. Async validators are also supported, but
	      * have to be passed in separately as the third arg.
	      * *
	      * ```ts
	      * const ctrl = new FormControl('', Validators.required);
	      * console.log(ctrl.value);     // ''
	      * console.log(ctrl.status);   // 'INVALID'
	      * ```
	      * *
	      * See its superclass, {@link AbstractControl}, for more properties and methods.
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var FormControl = (function (_super) {
	        __extends$6(FormControl, _super);
	        /**
	         * @param {?=} formState
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         */
	        function FormControl(formState, validator, asyncValidator) {
	            if (formState === void 0) { formState = null; }
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	            /** @internal */
	            this._onChange = [];
	            this._applyFormState(formState);
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	            this._initObservables();
	        }
	        /**
	         *  Set the value of the form control to `value`.
	          * *
	          * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	          * and not its parent component. This defaults to false.
	          * *
	          * If `emitEvent` is `true`, this
	          * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
	          * to true (as it falls through to `updateValueAndValidity`).
	          * *
	          * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	          * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	          * specified.
	          * *
	          * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	          * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormControl.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	            this._value = value;
	            if (this._onChange.length && emitModelToViewChange !== false) {
	                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange !== false); });
	            }
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of a control.
	          * *
	          * This function is functionally the same as {@link FormControl.setValue} at this level.
	          * It exists for symmetry with {@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
	          * where it does behave differently.
	         * @param {?} value
	         * @param {?=} options
	         * @return {?}
	         */
	        FormControl.prototype.patchValue = function (value, options) {
	            if (options === void 0) { options = {}; }
	            this.setValue(value, options);
	        };
	        /**
	         *  Resets the form control. This means by default:
	          * *
	          * * it is marked as `pristine`
	          * * it is marked as `untouched`
	          * * value is set to null
	          * *
	          * You can also reset to a specific form state by passing through a standalone
	          * value or a form state object that contains both a value and a disabled state
	          * (these are the only two properties that cannot be calculated).
	          * *
	          * Ex:
	          * *
	          * ```ts
	          * this.control.reset('Nancy');
	          * *
	          * console.log(this.control.value);  // 'Nancy'
	          * ```
	          * *
	          * OR
	          * *
	          * ```
	          * this.control.reset({value: 'Nancy', disabled: true});
	          * *
	          * console.log(this.control.value);  // 'Nancy'
	          * console.log(this.control.status);  // 'DISABLED'
	          * ```
	         * @param {?=} formState
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormControl.prototype.reset = function (formState, _a) {
	            if (formState === void 0) { formState = null; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._applyFormState(formState);
	            this.markAsPristine({ onlySelf: onlySelf });
	            this.markAsUntouched({ onlySelf: onlySelf });
	            this.setValue(this._value, { onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * @return {?}
	         */
	        FormControl.prototype._updateValue = function () { };
	        /**
	         * @param {?} condition
	         * @return {?}
	         */
	        FormControl.prototype._anyControls = function (condition) { return false; };
	        /**
	         * @return {?}
	         */
	        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
	        /**
	         *  Register a listener for change events.
	         * @param {?} fn
	         * @return {?}
	         */
	        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	        /**
	         * @return {?}
	         */
	        FormControl.prototype._clearChangeFns = function () {
	            this._onChange = [];
	            this._onDisabledChange = [];
	            this._onCollectionChange = function () { };
	        };
	        /**
	         *  Register a listener for disabled events.
	         * @param {?} fn
	         * @return {?}
	         */
	        FormControl.prototype.registerOnDisabledChange = function (fn) {
	            this._onDisabledChange.push(fn);
	        };
	        /**
	         * @param {?} cb
	         * @return {?}
	         */
	        FormControl.prototype._forEachChild = function (cb) { };
	        /**
	         * @param {?} formState
	         * @return {?}
	         */
	        FormControl.prototype._applyFormState = function (formState) {
	            if (this._isBoxedValue(formState)) {
	                this._value = formState.value;
	                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
	                    this.enable({ onlySelf: true, emitEvent: false });
	            }
	            else {
	                this._value = formState;
	            }
	        };
	        return FormControl;
	    }(AbstractControl));
	    /**
	     *  instances.
	      * *
	      * A `FormGroup` aggregates the values of each child {@link FormControl} into one object,
	      * with each control name as the key.  It calculates its status by reducing the statuses
	      * of its children. For example, if one of the controls in a group is invalid, the entire
	      * group becomes invalid.
	      * *
	      * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	      * along with {@link FormControl} and {@link FormArray}.
	      * *
	      * *
	      * When instantiating a {@link FormGroup}, pass in a collection of child controls as the first
	      * argument. The key for each child will be the name under which it is registered.
	      * *
	      * ### Example
	      * *
	      * ```
	      * const form = new FormGroup({
	      * first: new FormControl('Nancy', Validators.minLength(2)),
	      * last: new FormControl('Drew'),
	      * });
	      * *
	      * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
	      * console.log(form.status);  // 'VALID'
	      * ```
	      * *
	      * You can also include group-level validators as the second arg, or group-level async
	      * validators as the third arg. These come in handy when you want to perform validation
	      * that considers the value of more than one child control.
	      * *
	      * ### Example
	      * *
	      * ```
	      * const form = new FormGroup({
	      * password: new FormControl('', Validators.minLength(2)),
	      * passwordConfirm: new FormControl('', Validators.minLength(2)),
	      * }, passwordMatchValidator);
	      * *
	      * *
	      * function passwordMatchValidator(g: FormGroup) {
	      * return g.get('password').value === g.get('passwordConfirm').value
	      * ? null : {'mismatch': true};
	      * }
	      * ```
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var FormGroup = (function (_super) {
	        __extends$6(FormGroup, _super);
	        /**
	         * @param {?} controls
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         */
	        function FormGroup(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         *  Registers a control with the group's list of controls.
	          * *
	          * This method does not update value or validity of the control, so for
	          * most cases you'll want to use {@link FormGroup.addControl} instead.
	         * @param {?} name
	         * @param {?} control
	         * @return {?}
	         */
	        FormGroup.prototype.registerControl = function (name, control) {
	            if (this.controls[name])
	                return this.controls[name];
	            this.controls[name] = control;
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	            return control;
	        };
	        /**
	         *  Add a control to this group.
	         * @param {?} name
	         * @param {?} control
	         * @return {?}
	         */
	        FormGroup.prototype.addControl = function (name, control) {
	            this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Remove a control from this group.
	         * @param {?} name
	         * @return {?}
	         */
	        FormGroup.prototype.removeControl = function (name) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Replace an existing control.
	         * @param {?} name
	         * @param {?} control
	         * @return {?}
	         */
	        FormGroup.prototype.setControl = function (name, control) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            if (control)
	                this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Check whether there is an enabled control with the given name in the group.
	          * *
	          * It will return false for disabled controls. If you'd like to check for
	          * existence in the group only, use {@link AbstractControl.get} instead.
	         * @param {?} controlName
	         * @return {?}
	         */
	        FormGroup.prototype.contains = function (controlName) {
	            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
	        };
	        /**
	         *  Sets the value of the {@link FormGroup}. It accepts an object that matches
	          * the structure of the group, with control names as keys.
	          * *
	          * This method performs strict checks, so it will throw an error if you try
	          * to set the value of a control that doesn't exist or if you exclude the
	          * value of a control.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const form = new FormGroup({
	          * first: new FormControl(),
	          * last: new FormControl()
	          * });
	          * console.log(form.value);   // {first: null, last: null}
	          * *
	          * form.setValue({first: 'Nancy', last: 'Drew'});
	          * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
	          * *
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormGroup.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._checkAllValuesPresent(value);
	            Object.keys(value).forEach(function (name) {
	                _this._throwIfControlMissing(name);
	                _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of the {@link FormGroup}. It accepts an object with control
	          * names as keys, and will do its best to match the values to the correct controls
	          * in the group.
	          * *
	          * It accepts both super-sets and sub-sets of the group without throwing an error.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const form = new FormGroup({
	          * first: new FormControl(),
	          * last: new FormControl()
	          * });
	          * console.log(form.value);   // {first: null, last: null}
	          * *
	          * form.patchValue({first: 'Nancy'});
	          * console.log(form.value);   // {first: 'Nancy', last: null}
	          * *
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormGroup.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            Object.keys(value).forEach(function (name) {
	                if (_this.controls[name]) {
	                    _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Resets the {@link FormGroup}. This means by default:
	          * *
	          * * The group and all descendants are marked `pristine`
	          * * The group and all descendants are marked `untouched`
	          * * The value of all descendants will be null or null maps
	          * *
	          * You can also reset to a specific form state by passing in a map of states
	          * that matches the structure of your form, with control names as keys. The state
	          * can be a standalone value or a form state object with both a value and a disabled
	          * status.
	          * *
	          * ### Example
	          * *
	          * ```ts
	          * this.form.reset({first: 'name', last: 'last name'});
	          * *
	          * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	          * ```
	          * *
	          * - OR -
	          * *
	          * ```
	          * this.form.reset({
	          * first: {value: 'name', disabled: true},
	          * last: 'last'
	          * });
	          * *
	          * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	          * console.log(this.form.get('first').status);  // 'DISABLED'
	          * ```
	         * @param {?=} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormGroup.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = {}; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._forEachChild(function (control, name) {
	                control.reset(value[name], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         *  The aggregate value of the {@link FormGroup}, including any disabled controls.
	          * *
	          * If you'd like to include all values regardless of disabled status, use this method.
	          * Otherwise, the `value` property is the best way to get the value of the group.
	         * @return {?}
	         */
	        FormGroup.prototype.getRawValue = function () {
	            return this._reduceChildren({}, function (acc, control, name) {
	                acc[name] = control.value;
	                return acc;
	            });
	        };
	        /**
	         * @param {?} name
	         * @return {?}
	         */
	        FormGroup.prototype._throwIfControlMissing = function (name) {
	            if (!Object.keys(this.controls).length) {
	                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.controls[name]) {
	                throw new Error("Cannot find form control with name: " + name + ".");
	            }
	        };
	        /**
	         * @param {?} cb
	         * @return {?}
	         */
	        FormGroup.prototype._forEachChild = function (cb) {
	            var _this = this;
	            Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) {
	                control.setParent(_this);
	                control._registerOnCollectionChange(_this._onCollectionChange);
	            });
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	        /**
	         * @param {?} condition
	         * @return {?}
	         */
	        FormGroup.prototype._anyControls = function (condition) {
	            var _this = this;
	            var /** @type {?} */ res = false;
	            this._forEachChild(function (control, name) {
	                res = res || (_this.contains(name) && condition(control));
	            });
	            return res;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._reduceValue = function () {
	            var _this = this;
	            return this._reduceChildren({}, function (acc, control, name) {
	                if (control.enabled || _this.disabled) {
	                    acc[name] = control.value;
	                }
	                return acc;
	            });
	        };
	        /**
	         * @param {?} initValue
	         * @param {?} fn
	         * @return {?}
	         */
	        FormGroup.prototype._reduceChildren = function (initValue, fn) {
	            var /** @type {?} */ res = initValue;
	            this._forEachChild(function (control, name) { res = fn(res, control, name); });
	            return res;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
	                var controlName = _a[_i];
	                if (this.controls[controlName].enabled) {
	                    return false;
	                }
	            }
	            return Object.keys(this.controls).length > 0 || this.disabled;
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        FormGroup.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, name) {
	                if (value[name] === undefined) {
	                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
	                }
	            });
	        };
	        return FormGroup;
	    }(AbstractControl));
	    /**
	     *  instances.
	      * *
	      * A `FormArray` aggregates the values of each child {@link FormControl} into an array.
	      * It calculates its status by reducing the statuses of its children. For example, if one of
	      * the controls in a `FormArray` is invalid, the entire array becomes invalid.
	      * *
	      * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	      * along with {@link FormControl} and {@link FormGroup}.
	      * *
	      * *
	      * When instantiating a {@link FormArray}, pass in an array of child controls as the first
	      * argument.
	      * *
	      * ### Example
	      * *
	      * ```
	      * const arr = new FormArray([
	      * new FormControl('Nancy', Validators.minLength(2)),
	      * new FormControl('Drew'),
	      * ]);
	      * *
	      * console.log(arr.value);   // ['Nancy', 'Drew']
	      * console.log(arr.status);  // 'VALID'
	      * ```
	      * *
	      * You can also include array-level validators as the second arg, or array-level async
	      * validators as the third arg. These come in handy when you want to perform validation
	      * that considers the value of more than one child control.
	      * *
	      * ### Adding or removing controls
	      * *
	      * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	      * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	      * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	      * the `FormArray` directly, as that will result in strange and unexpected behavior such
	      * as broken change detection.
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var FormArray = (function (_super) {
	        __extends$6(FormArray, _super);
	        /**
	         * @param {?} controls
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         */
	        function FormArray(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         *  Get the {@link AbstractControl} at the given `index` in the array.
	         * @param {?} index
	         * @return {?}
	         */
	        FormArray.prototype.at = function (index) { return this.controls[index]; };
	        /**
	         *  Insert a new {@link AbstractControl} at the end of the array.
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype.push = function (control) {
	            this.controls.push(control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Insert a new {@link AbstractControl} at the given `index` in the array.
	         * @param {?} index
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype.insert = function (index, control) {
	            this.controls.splice(index, 0, control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Remove the control at the given `index` in the array.
	         * @param {?} index
	         * @return {?}
	         */
	        FormArray.prototype.removeAt = function (index) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Replace an existing control.
	         * @param {?} index
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype.setControl = function (index, control) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            if (control) {
	                this.controls.splice(index, 0, control);
	                this._registerControl(control);
	            }
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        Object.defineProperty(FormArray.prototype, "length", {
	            /**
	             *  Length of the control array.
	             * @return {?}
	             */
	            get: function () { return this.controls.length; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the value of the {@link FormArray}. It accepts an array that matches
	          * the structure of the control.
	          * *
	          * This method performs strict checks, so it will throw an error if you try
	          * to set the value of a control that doesn't exist or if you exclude the
	          * value of a control.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const arr = new FormArray([
	          * new FormControl(),
	          * new FormControl()
	          * ]);
	          * console.log(arr.value);   // [null, null]
	          * *
	          * arr.setValue(['Nancy', 'Drew']);
	          * console.log(arr.value);   // ['Nancy', 'Drew']
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormArray.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._checkAllValuesPresent(value);
	            value.forEach(function (newValue, index) {
	                _this._throwIfControlMissing(index);
	                _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of the {@link FormArray}. It accepts an array that matches the
	          * structure of the control, and will do its best to match the values to the correct
	          * controls in the group.
	          * *
	          * It accepts both super-sets and sub-sets of the array without throwing an error.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const arr = new FormArray([
	          * new FormControl(),
	          * new FormControl()
	          * ]);
	          * console.log(arr.value);   // [null, null]
	          * *
	          * arr.patchValue(['Nancy']);
	          * console.log(arr.value);   // ['Nancy', null]
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormArray.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            value.forEach(function (newValue, index) {
	                if (_this.at(index)) {
	                    _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Resets the {@link FormArray}. This means by default:
	          * *
	          * * The array and all descendants are marked `pristine`
	          * * The array and all descendants are marked `untouched`
	          * * The value of all descendants will be null or null maps
	          * *
	          * You can also reset to a specific form state by passing in an array of states
	          * that matches the structure of the control. The state can be a standalone value
	          * or a form state object with both a value and a disabled status.
	          * *
	          * ### Example
	          * *
	          * ```ts
	          * this.arr.reset(['name', 'last name']);
	          * *
	          * console.log(this.arr.value);  // ['name', 'last name']
	          * ```
	          * *
	          * - OR -
	          * *
	          * ```
	          * this.arr.reset([
	          * {value: 'name', disabled: true},
	          * 'last'
	          * ]);
	          * *
	          * console.log(this.arr.value);  // ['name', 'last name']
	          * console.log(this.arr.get(0).status);  // 'DISABLED'
	          * ```
	         * @param {?=} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormArray.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = []; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._forEachChild(function (control, index) {
	                control.reset(value[index], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         *  The aggregate value of the array, including any disabled controls.
	          * *
	          * If you'd like to include all values regardless of disabled status, use this method.
	          * Otherwise, the `value` property is the best way to get the value of the array.
	         * @return {?}
	         */
	        FormArray.prototype.getRawValue = function () { return this.controls.map(function (control) { return control.value; }); };
	        /**
	         * @param {?} index
	         * @return {?}
	         */
	        FormArray.prototype._throwIfControlMissing = function (index) {
	            if (!this.controls.length) {
	                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.at(index)) {
	                throw new Error("Cannot find form control at index " + index);
	            }
	        };
	        /**
	         * @param {?} cb
	         * @return {?}
	         */
	        FormArray.prototype._forEachChild = function (cb) {
	            this.controls.forEach(function (control, index) { cb(control, index); });
	        };
	        /**
	         * @return {?}
	         */
	        FormArray.prototype._updateValue = function () {
	            var _this = this;
	            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
	                .map(function (control) { return control.value; });
	        };
	        /**
	         * @param {?} condition
	         * @return {?}
	         */
	        FormArray.prototype._anyControls = function (condition) {
	            return this.controls.some(function (control) { return control.enabled && condition(control); });
	        };
	        /**
	         * @return {?}
	         */
	        FormArray.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) { return _this._registerControl(control); });
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        FormArray.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, i) {
	                if (value[i] === undefined) {
	                    throw new Error("Must supply a value for form control at index: " + i + ".");
	                }
	            });
	        };
	        /**
	         * @return {?}
	         */
	        FormArray.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
	                var control = _a[_i];
	                if (control.enabled)
	                    return false;
	            }
	            return this.controls.length > 0 || this.disabled;
	        };
	        /**
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype._registerControl = function (control) {
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	        };
	        return FormArray;
	    }(AbstractControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formDirectiveProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgForm; })
	    };
	    var /** @type {?} */ resolvedPromise = Promise.resolve(null);
	    /**
	     *  to track aggregate form value and validation status.
	      * *
	      * *
	      * As soon as you import the `FormsModule`, this directive becomes active by default on
	      * all `<form>` tags.  You don't need to add a special selector.
	      * *
	      * You can export the directive into a local template variable using `ngForm` as the key
	      * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
	      * {@link FormGroup} instance are duplicated on the directive itself, so a reference to it
	      * will give you access to the aggregate value and validity status of the form, as well as
	      * user interaction properties like `dirty` and `touched`.
	      * *
	      * To register child controls with the form, you'll want to use {@link NgModel} with a
	      * `name` attribute.  You can also use {@link NgModelGroup} if you'd like to create
	      * sub-groups within the form.
	      * *
	      * You can listen to the directive's `ngSubmit` event to be notified when the user has
	      * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	      * submission event.
	      * *
	      * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `FormsModule`
	      * *
	      * @stable
	     */
	    var NgForm = (function (_super) {
	        __extends$4(NgForm, _super);
	        /**
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function NgForm(validators, asyncValidators) {
	            _super.call(this);
	            this._submitted = false;
	            this.ngSubmit = new EventEmitter();
	            this.form =
	                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	        }
	        Object.defineProperty(NgForm.prototype, "submitted", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "controls", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form.controls; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.addControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                dir._control = (container.registerControl(dir.name, dir.control));
	                setUpControl(dir.control, dir);
	                dir.control.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.removeControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                if (container) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.addFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                var /** @type {?} */ group = new FormGroup({});
	                setUpFormContainer(group, dir);
	                container.registerControl(dir.name, group);
	                group.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.removeFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                if (container) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @param {?} value
	         * @return {?}
	         */
	        NgForm.prototype.updateModel = function (dir, value) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ ctrl = (_this.form.get(dir.path));
	                ctrl.setValue(value);
	            });
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	        /**
	         * @param {?} $event
	         * @return {?}
	         */
	        NgForm.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        /**
	         * @return {?}
	         */
	        NgForm.prototype.onReset = function () { this.resetForm(); };
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        NgForm.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /**
	         * @param {?} path
	         * @return {?}
	         */
	        NgForm.prototype._findContainer = function (path) {
	            path.pop();
	            return path.length ? (this.form.get(path)) : this.form;
	        };
	        NgForm.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                        providers: [formDirectiveProvider],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        outputs: ['ngSubmit'],
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgForm.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        return NgForm;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var /** @type {?} */ Examples = {
	        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	    };
	
	    var TemplateDrivenErrors = (function () {
	        function TemplateDrivenErrors() {
	        }
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.modelParentException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + Examples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Examples.ngModelWithFormGroup);
	        };
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.formGroupNameException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.missingNameException = function () {
	            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	        };
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.modelGroupParentException = function () {
	            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        return TemplateDrivenErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ modelGroupProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
	    };
	    /**
	     *  *
	      * *
	      * This directive can only be used as a child of {@link NgForm} (or in other words,
	      * within `<form>` tags).
	      * *
	      * Use this directive if you'd like to create a sub-group within a form. This can
	      * come in handy if you want to validate a sub-group of your form separately from
	      * the rest of your form, or if some values in your domain model make more sense to
	      * consume together in a nested object.
	      * *
	      * Pass in the name you'd like this sub-group to have and it will become the key
	      * for the sub-group in the form's full value. You can also export the directive into
	      * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
	      * *
	      * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `FormsModule`
	      * *
	     */
	    var NgModelGroup = (function (_super) {
	        __extends$8(NgModelGroup, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function NgModelGroup(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /**
	         * @return {?}
	         */
	        NgModelGroup.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelGroupParentException();
	            }
	        };
	        NgModelGroup.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
	        ];
	        /** @nocollapse */
	        NgModelGroup.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        NgModelGroup.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
	        };
	        return NgModelGroup;
	    }(AbstractFormGroupDirective));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formControlBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return NgModel; })
	    };
	    /**
	     * `ngModel` forces an additional change detection run when its inputs change:
	     * E.g.:
	     * ```
	     * <div>{{myModel.valid}}</div>
	     * <input [(ngModel)]="myValue" #myModel="ngModel">
	     * ```
	     * I.e. `ngModel` can export itself on the element and then be used in the template.
	     * Normally, this would result in expressions before the `input` that use the exported directive
	     * to have and old value as they have been
	     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
	     * detection run.
	     *
	     * Notes:
	     * - this is just one extra run no matter how many `ngModel` have been changed.
	     * - this is a general problem when using `exportAs` for directives!
	     */
	    var /** @type {?} */ resolvedPromise$1 = Promise.resolve(null);
	    /**
	     *  to a form control element.
	      * *
	      * The {@link FormControl} instance will track the value, user interaction, and
	      * validation status of the control and keep the view synced with the model. If used
	      * within a parent form, the directive will also register itself with the form as a child
	      * control.
	      * *
	      * *
	      * This directive can be used by itself or as part of a larger form. All you need is the
	      * `ngModel` selector to activate it.
	      * *
	      * It accepts a domain model as an optional {@link @Input}. If you have a one-way binding
	      * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
	      * class will set the value in the view. If you have a two-way binding with `[()]` syntax
	      * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
	      * the domain model in your class as well.
	      * *
	      * If you wish to inspect the properties of the associated {@link FormControl} (like
	      * validity state), you can also export the directive into a local template variable using
	      * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
	      * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
	      * will fall through to the control anyway, so you can access them directly. You can see a
	      * full list of properties directly available in {@link AbstractControlDirective}.
	      * *
	      * The following is an example of a simple standalone control using `ngModel`:
	      * *
	      * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
	      * *
	      * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
	      * so that the control can be registered with the parent form under that name.
	      * *
	      * It's worth noting that in the context of a parent form, you often can skip one-way or
	      * two-way binding because the parent form will sync the value for you. You can access
	      * its properties by exporting it into a local template variable using `ngForm` (ex:
	      * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
	      * *
	      * If you do need to populate initial values into your form, using a one-way binding for
	      * `ngModel` tends to be sufficient as long as you use the exported form's value rather
	      * than the domain model's value on submit.
	      * *
	      * Take a look at an example of using `ngModel` within a form:
	      * *
	      * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	      * *
	      * To see `ngModel` examples with different form control types, see:
	      * *
	      * * Radio buttons: {@link RadioControlValueAccessor}
	      * * Selects: {@link SelectControlValueAccessor}
	      * *
	      * **npm package**: `@angular/forms`
	      * *
	      * **NgModule**: `FormsModule`
	      * *
	      * @stable
	     */
	    var NgModel = (function (_super) {
	        __extends$7(NgModel, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         * @param {?} valueAccessors
	         */
	        function NgModel(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            /** @internal */
	            this._control = new FormControl();
	            /** @internal */
	            this._registered = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        NgModel.prototype.ngOnChanges = function (changes) {
	            this._checkForErrors();
	            if (!this._registered)
	                this._setUpControl();
	            if ('isDisabled' in changes) {
	                this._updateDisabled(changes);
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this._updateValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	        Object.defineProperty(NgModel.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return this._parent ? controlPath(this.name, this._parent) : [this.name];
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} newValue
	         * @return {?}
	         */
	        NgModel.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._setUpControl = function () {
	            this._isStandalone() ? this._setUpStandalone() :
	                this.formDirective.addControl(this);
	            this._registered = true;
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._isStandalone = function () {
	            return !this._parent || (this.options && this.options.standalone);
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._setUpStandalone = function () {
	            setUpControl(this._control, this);
	            this._control.updateValueAndValidity({ emitEvent: false });
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._checkForErrors = function () {
	            if (!this._isStandalone()) {
	                this._checkParentType();
	            }
	            this._checkName();
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                TemplateDrivenErrors.formGroupNameException();
	            }
	            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelParentException();
	            }
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._checkName = function () {
	            if (this.options && this.options.name)
	                this.name = this.options.name;
	            if (!this._isStandalone() && !this.name) {
	                TemplateDrivenErrors.missingNameException();
	            }
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgModel.prototype._updateValue = function (value) {
	            var _this = this;
	            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	        };
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        NgModel.prototype._updateDisabled = function (changes) {
	            var _this = this;
	            var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
	            var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
	            resolvedPromise$1.then(function () {
	                if (isDisabled && !_this.control.disabled) {
	                    _this.control.disable();
	                }
	                else if (!isDisabled && _this.control.disabled) {
	                    _this.control.enable();
	                }
	            });
	        };
	        NgModel.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[ngModel]:not([formControlName]):not([formControl])',
	                        providers: [formControlBinding],
	                        exportAs: 'ngModel'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgModel.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ]; };
	        NgModel.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	        };
	        return NgModel;
	    }(NgControl));
	
	    var ReactiveErrors = (function () {
	        function ReactiveErrors() {
	        }
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.controlParentException = function () {
	            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.ngModelGroupException = function () {
	            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.missingFormException = function () {
	            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.groupParentException = function () {
	            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.arrayParentException = function () {
	            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.disabledAttrWarning = function () {
	            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
	        };
	        return ReactiveErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formControlBinding$1 = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
	    };
	    /**
	     *  *
	      * In other words, this directive ensures that any values written to the {@link FormControl}
	      * instance programmatically will be written to the DOM element (model -> view). Conversely,
	      * any values written to the DOM element through user input will be reflected in the
	      * {@link FormControl} instance (view -> model).
	      * *
	      * *
	      * Use this directive if you'd like to create and manage a {@link FormControl} instance directly.
	      * Simply create a {@link FormControl}, save it to your component class, and pass it into the
	      * {@link FormControlDirective}.
	      * *
	      * This directive is designed to be used as a standalone control.  Unlike {@link FormControlName},
	      * it does not require that your {@link FormControl} instance be part of any parent
	      * {@link FormGroup}, and it won't be registered to any {@link FormGroupDirective} that
	      * exists above it.
	      * *
	      * **Get the value**: the `value` property is always synced and available on the
	      * {@link FormControl} instance. See a full list of available properties in
	      * {@link AbstractControl}.
	      * *
	      * **Set the value**: You can pass in an initial value when instantiating the {@link FormControl},
	      * or you can set it programmatically later using {@link AbstractControl.setValue} or
	      * {@link AbstractControl.patchValue}.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the control, you can
	      * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	      * {@link AbstractControl.statusChanges} to be notified when the validation status is
	      * re-calculated.
	      * *
	      * ### Example
	      * *
	      * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `ReactiveFormsModule`
	      * *
	      * @stable
	     */
	    var FormControlDirective = (function (_super) {
	        __extends$9(FormControlDirective, _super);
	        /**
	         * @param {?} validators
	         * @param {?} asyncValidators
	         * @param {?} valueAccessors
	         */
	        function FormControlDirective(validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this.update = new EventEmitter();
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
	            /**
	             * @param {?} isDisabled
	             * @return {?}
	             */
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormControlDirective.prototype.ngOnChanges = function (changes) {
	            if (this._isControlChanged(changes)) {
	                setUpControl(this.form, this);
	                if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                    this.valueAccessor.setDisabledState(true);
	                }
	                this.form.updateValueAndValidity({ emitEvent: false });
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.form.setValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        Object.defineProperty(FormControlDirective.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} newValue
	         * @return {?}
	         */
	        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormControlDirective.prototype._isControlChanged = function (changes) {
	            return changes.hasOwnProperty('form');
	        };
	        FormControlDirective.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
	        ];
	        /** @nocollapse */
	        FormControlDirective.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ]; };
	        FormControlDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlDirective;
	    }(NgControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$11 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formDirectiveProvider$1 = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
	    };
	    /**
	     *  *
	      * *
	      * This directive accepts an existing {@link FormGroup} instance. It will then use this
	      * {@link FormGroup} instance to match any child {@link FormControl}, {@link FormGroup},
	      * and {@link FormArray} instances to child {@link FormControlName}, {@link FormGroupName},
	      * and {@link FormArrayName} directives.
	      * *
	      * **Set value**: You can set the form's initial value when instantiating the
	      * {@link FormGroup}, or you can set it programmatically later using the {@link FormGroup}'s
	      * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue} methods.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
	      * to the {@link FormGroup}'s {@link AbstractControl.valueChanges} event.  You can also listen to
	      * its {@link AbstractControl.statusChanges} event to be notified when the validation status is
	      * re-calculated.
	      * *
	      * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
	      * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	      * submission event.
	      * *
	      * ### Example
	      * *
	      * In this example, we create form controls for first name and last name.
	      * *
	      * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	      * *
	      * **npm package**: `@angular/forms`
	      * *
	      * **NgModule**: {@link ReactiveFormsModule}
	      * *
	      * @stable
	     */
	    var FormGroupDirective = (function (_super) {
	        __extends$11(FormGroupDirective, _super);
	        /**
	         * @param {?} _validators
	         * @param {?} _asyncValidators
	         */
	        function FormGroupDirective(_validators, _asyncValidators) {
	            _super.call(this);
	            this._validators = _validators;
	            this._asyncValidators = _asyncValidators;
	            this._submitted = false;
	            this.directives = [];
	            this.form = null;
	            this.ngSubmit = new EventEmitter();
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormGroupDirective.prototype.ngOnChanges = function (changes) {
	            this._checkFormPresent();
	            if (changes.hasOwnProperty('form')) {
	                this._updateValidators();
	                this._updateDomValue();
	                this._updateRegistrations();
	            }
	        };
	        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.addControl = function (dir) {
	            var /** @type {?} */ ctrl = this.form.get(dir.path);
	            setUpControl(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	            this.directives.push(dir);
	            return ctrl;
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.addFormGroup = function (dir) {
	            var /** @type {?} */ ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.addFormArray = function (dir) {
	            var /** @type {?} */ ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.removeFormArray = function (dir) { };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.getFormArray = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @param {?} value
	         * @return {?}
	         */
	        FormGroupDirective.prototype.updateModel = function (dir, value) {
	            var /** @type {?} */ ctrl = (this.form.get(dir.path));
	            ctrl.setValue(value);
	        };
	        /**
	         * @param {?} $event
	         * @return {?}
	         */
	        FormGroupDirective.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        FormGroupDirective.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._updateDomValue = function () {
	            var _this = this;
	            this.directives.forEach(function (dir) {
	                var /** @type {?} */ newCtrl = _this.form.get(dir.path);
	                if (dir._control !== newCtrl) {
	                    cleanUpControl(dir._control, dir);
	                    if (newCtrl)
	                        setUpControl(newCtrl, dir);
	                    dir._control = newCtrl;
	                }
	            });
	            this.form._updateTreeValidity({ emitEvent: false });
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._updateRegistrations = function () {
	            var _this = this;
	            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
	            if (this._oldForm)
	                this._oldForm._registerOnCollectionChange(function () { });
	            this._oldForm = this.form;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._updateValidators = function () {
	            var /** @type {?} */ sync = composeValidators(this._validators);
	            this.form.validator = Validators.compose([this.form.validator, sync]);
	            var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._checkFormPresent = function () {
	            if (!this.form) {
	                ReactiveErrors.missingFormException();
	            }
	        };
	        FormGroupDirective.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroup]',
	                        providers: [formDirectiveProvider$1],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        FormGroupDirective.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        FormGroupDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
	            'ngSubmit': [{ type: _angular_core.Output },],
	        };
	        return FormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$12 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formGroupNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
	    };
	    /**
	     *  *
	      * *
	      * This directive can only be used with a parent {@link FormGroupDirective} (selector:
	      * `[formGroup]`).
	      * *
	      * It accepts the string name of the nested {@link FormGroup} you want to link, and
	      * will look for a {@link FormGroup} registered with that name in the parent
	      * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	      * *
	      * Nested form groups can come in handy when you want to validate a sub-group of a
	      * form separately from the rest or when you'd like to group the values of certain
	      * controls into their own nested object.
	      * *
	      * **Access the group**: You can access the associated {@link FormGroup} using the
	      * {@link AbstractControl.get} method. Ex: `this.form.get('name')`.
	      * *
	      * You can also access individual controls within the group using dot syntax.
	      * Ex: `this.form.get('name.first')`
	      * *
	      * **Get the value**: the `value` property is always synced and available on the
	      * {@link FormGroup}. See a full list of available properties in {@link AbstractControl}.
	      * *
	      * **Set the value**: You can set an initial value for each child control when instantiating
	      * the {@link FormGroup}, or you can set it programmatically later using
	      * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the group, you can
	      * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	      * {@link AbstractControl.statusChanges} to be notified when the validation status is
	      * re-calculated.
	      * *
	      * ### Example
	      * *
	      * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `ReactiveFormsModule`
	      * *
	     */
	    var FormGroupName = (function (_super) {
	        __extends$12(FormGroupName, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function FormGroupName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /**
	         * @return {?}
	         */
	        FormGroupName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.groupParentException();
	            }
	        };
	        FormGroupName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormGroupName.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        FormGroupName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
	        };
	        return FormGroupName;
	    }(AbstractFormGroupDirective));
	    var /** @type {?} */ formArrayNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
	    };
	    /**
	     *  *
	      * *
	      * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	      * `[formGroup]`).
	      * *
	      * It accepts the string name of the nested {@link FormArray} you want to link, and
	      * will look for a {@link FormArray} registered with that name in the parent
	      * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	      * *
	      * Nested form arrays can come in handy when you have a group of form controls but
	      * you're not sure how many there will be. Form arrays allow you to create new
	      * form controls dynamically.
	      * *
	      * **Access the array**: You can access the associated {@link FormArray} using the
	      * {@link AbstractControl.get} method on the parent {@link FormGroup}.
	      * Ex: `this.form.get('cities')`.
	      * *
	      * **Get the value**: the `value` property is always synced and available on the
	      * {@link FormArray}. See a full list of available properties in {@link AbstractControl}.
	      * *
	      * **Set the value**: You can set an initial value for each child control when instantiating
	      * the {@link FormArray}, or you can set the value programmatically later using the
	      * {@link FormArray}'s {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}
	      * methods.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the array, you can
	      * subscribe to the {@link FormArray}'s {@link AbstractControl.valueChanges} event.  You can also
	      * listen to its {@link AbstractControl.statusChanges} event to be notified when the validation
	      * status is re-calculated.
	      * *
	      * **Add new controls**: You can add new controls to the {@link FormArray} dynamically by
	      * calling its {@link FormArray.push} method.
	      * Ex: `this.form.get('cities').push(new FormControl());`
	      * *
	      * ### Example
	      * *
	      * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `ReactiveFormsModule`
	      * *
	     */
	    var FormArrayName = (function (_super) {
	        __extends$12(FormArrayName, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function FormArrayName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /**
	         * @return {?}
	         */
	        FormArrayName.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormArray(this);
	        };
	        /**
	         * @return {?}
	         */
	        FormArrayName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormArray(this);
	            }
	        };
	        Object.defineProperty(FormArrayName.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.formDirective.getFormArray(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return this._parent ? (this._parent.formDirective) : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @return {?}
	         */
	        FormArrayName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.arrayParentException();
	            }
	        };
	        FormArrayName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormArrayName.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        FormArrayName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
	        };
	        return FormArrayName;
	    }(ControlContainer));
	    /**
	     * @param {?} parent
	     * @return {?}
	     */
	    function _hasInvalidParent(parent) {
	        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
	            !(parent instanceof FormArrayName);
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$10 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ controlNameBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
	    };
	    /**
	     *  element by name.
	      * *
	      * In other words, this directive ensures that any values written to the {@link FormControl}
	      * instance programmatically will be written to the DOM element (model -> view). Conversely,
	      * any values written to the DOM element through user input will be reflected in the
	      * {@link FormControl} instance (view -> model).
	      * *
	      * *
	      * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	      * `[formGroup]`).
	      * *
	      * It accepts the string name of the {@link FormControl} instance you want to
	      * link, and will look for a {@link FormControl} registered with that name in the
	      * closest {@link FormGroup} or {@link FormArray} above it.
	      * *
	      * **Access the control**: You can access the {@link FormControl} associated with
	      * this directive by using the {@link AbstractControl.get} method.
	      * Ex: `this.form.get('first');`
	      * *
	      * **Get value**: the `value` property is always synced and available on the {@link FormControl}.
	      * See a full list of available properties in {@link AbstractControl}.
	      * *
	      * **Set value**: You can set an initial value for the control when instantiating the
	      * {@link FormControl}, or you can set it programmatically later using
	      * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the control, you can
	      * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	      * {@link AbstractControl.statusChanges} to be notified when the validation status is
	      * re-calculated.
	      * *
	      * ### Example
	      * *
	      * In this example, we create form controls for first name and last name.
	      * *
	      * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	      * *
	      * To see `formControlName` examples with different form control types, see:
	      * *
	      * * Radio buttons: {@link RadioControlValueAccessor}
	      * * Selects: {@link SelectControlValueAccessor}
	      * *
	      * **npm package**: `@angular/forms`
	      * *
	      * **NgModule**: {@link ReactiveFormsModule}
	      * *
	      * @stable
	     */
	    var FormControlName = (function (_super) {
	        __extends$10(FormControlName, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         * @param {?} valueAccessors
	         */
	        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this._added = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlName.prototype, "isDisabled", {
	            /**
	             * @param {?} isDisabled
	             * @return {?}
	             */
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormControlName.prototype.ngOnChanges = function (changes) {
	            if (!this._added)
	                this._setUpControl();
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.viewModel = this.model;
	                this.formDirective.updateModel(this, this.model);
	            }
	        };
	        /**
	         * @return {?}
	         */
	        FormControlName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeControl(this);
	            }
	        };
	        /**
	         * @param {?} newValue
	         * @return {?}
	         */
	        FormControlName.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        Object.defineProperty(FormControlName.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @return {?}
	         */
	        FormControlName.prototype._checkParentType = function () {
	            if (!(this._parent instanceof FormGroupName) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                ReactiveErrors.ngModelGroupException();
	            }
	            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
	                !(this._parent instanceof FormArrayName)) {
	                ReactiveErrors.controlParentException();
	            }
	        };
	        /**
	         * @return {?}
	         */
	        FormControlName.prototype._setUpControl = function () {
	            this._checkParentType();
	            this._control = this.formDirective.addControl(this);
	            if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                this.valueAccessor.setDisabledState(true);
	            }
	            this._added = true;
	        };
	        FormControlName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
	        ];
	        /** @nocollapse */
	        FormControlName.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ]; };
	        FormControlName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlName;
	    }(NgControl));
	
	    var __extends$13 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
	        multi: true
	    };
	    var /** @type {?} */ CHECKBOX_REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxRequiredValidator; }),
	        multi: true
	    };
	    /**
	     *  A Directive that adds the `required` validator to any controls marked with the
	      * `required` attribute, via the {@link NG_VALIDATORS} binding.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <input name="fullName" ngModel required>
	      * ```
	      * *
	     */
	    var RequiredValidator = (function () {
	        function RequiredValidator() {
	        }
	        Object.defineProperty(RequiredValidator.prototype, "required", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._required; },
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                this._required = value != null && value !== false && "" + value !== 'false';
	                if (this._onChange)
	                    this._onChange();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        RequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.required(c) : null;
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        RequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
	                        providers: [REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required ? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        RequiredValidator.ctorParameters = function () { return []; };
	        RequiredValidator.propDecorators = {
	            'required': [{ type: _angular_core.Input },],
	        };
	        return RequiredValidator;
	    }());
	    /**
	     *  A Directive that adds the `required` validator to checkbox controls marked with the
	      * `required` attribute, via the {@link NG_VALIDATORS} binding.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <input type="checkbox" name="active" ngModel required>
	      * ```
	      * *
	     */
	    var CheckboxRequiredValidator = (function (_super) {
	        __extends$13(CheckboxRequiredValidator, _super);
	        function CheckboxRequiredValidator() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        CheckboxRequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.requiredTrue(c) : null;
	        };
	        CheckboxRequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
	                        providers: [CHECKBOX_REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required ? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxRequiredValidator.ctorParameters = function () { return []; };
	        return CheckboxRequiredValidator;
	    }(RequiredValidator));
	    /**
	     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='min'}
	     */
	    var /** @type {?} */ MIN_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
	        multi: true
	    };
	    /**
	     *  A directive which installs the {@link MinLengthValidator} for any `formControlName`,
	      * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
	      * *
	     */
	    var MinLengthValidator = (function () {
	        function MinLengthValidator() {
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        MinLengthValidator.prototype.ngOnChanges = function (changes) {
	            if ('minlength' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        MinLengthValidator.prototype.validate = function (c) {
	            return this.minlength == null ? null : this._validator(c);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        /**
	         * @return {?}
	         */
	        MinLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.minLength(parseInt(this.minlength, 10));
	        };
	        MinLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                        providers: [MIN_LENGTH_VALIDATOR],
	                        host: { '[attr.minlength]': 'minlength ? minlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MinLengthValidator.ctorParameters = function () { return []; };
	        MinLengthValidator.propDecorators = {
	            'minlength': [{ type: _angular_core.Input },],
	        };
	        return MinLengthValidator;
	    }());
	    /**
	     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='max'}
	     */
	    var /** @type {?} */ MAX_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
	        multi: true
	    };
	    /**
	     *  A directive which installs the {@link MaxLengthValidator} for any `formControlName,
	      * `formControl`,
	      * or control with `ngModel` that also has a `maxlength` attribute.
	      * *
	     */
	    var MaxLengthValidator = (function () {
	        function MaxLengthValidator() {
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
	            if ('maxlength' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        MaxLengthValidator.prototype.validate = function (c) {
	            return this.maxlength != null ? this._validator(c) : null;
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        /**
	         * @return {?}
	         */
	        MaxLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
	        };
	        MaxLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                        providers: [MAX_LENGTH_VALIDATOR],
	                        host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MaxLengthValidator.ctorParameters = function () { return []; };
	        MaxLengthValidator.propDecorators = {
	            'maxlength': [{ type: _angular_core.Input },],
	        };
	        return MaxLengthValidator;
	    }());
	    var /** @type {?} */ PATTERN_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
	        multi: true
	    };
	    /**
	     *  A Directive that adds the `pattern` validator to any controls marked with the
	      * `pattern` attribute, via the {@link NG_VALIDATORS} binding. Uses attribute value
	      * as the regex to validate Control value against.  Follows pattern attribute
	      * semantics; i.e. regex must match entire Control value.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
	      * ```
	     */
	    var PatternValidator = (function () {
	        function PatternValidator() {
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        PatternValidator.prototype.ngOnChanges = function (changes) {
	            if ('pattern' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        /**
	         * @return {?}
	         */
	        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
	        PatternValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                        providers: [PATTERN_VALIDATOR],
	                        host: { '[attr.pattern]': 'pattern ? pattern : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        PatternValidator.ctorParameters = function () { return []; };
	        PatternValidator.propDecorators = {
	            'pattern': [{ type: _angular_core.Input },],
	        };
	        return PatternValidator;
	    }());
	
	    /**
	     *  *
	      * It is essentially syntactic sugar that shortens the `new FormGroup()`,
	      * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
	      * forms.
	      * *
	      * *
	      * To use, inject `FormBuilder` into your component class. You can then call its methods
	      * directly.
	      * *
	      * {@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: {@link ReactiveFormsModule}
	      * *
	     */
	    var FormBuilder = (function () {
	        function FormBuilder() {
	        }
	        /**
	         *  Construct a new {@link FormGroup} with the given map of configuration.
	          * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
	          * *
	          * See the {@link FormGroup} constructor for more details.
	         * @param {?} controlsConfig
	         * @param {?=} extra
	         * @return {?}
	         */
	        FormBuilder.prototype.group = function (controlsConfig, extra) {
	            if (extra === void 0) { extra = null; }
	            var /** @type {?} */ controls = this._reduceControls(controlsConfig);
	            var /** @type {?} */ validator = isPresent(extra) ? extra['validator'] : null;
	            var /** @type {?} */ asyncValidator = isPresent(extra) ? extra['asyncValidator'] : null;
	            return new FormGroup(controls, validator, asyncValidator);
	        };
	        /**
	         *  Construct a new {@link FormControl} with the given `formState`,`validator`, and
	          * `asyncValidator`.
	          * *
	          * `formState` can either be a standalone value for the form control or an object
	          * that contains both a value and a disabled status.
	          * *
	         * @param {?} formState
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         * @return {?}
	         */
	        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            return new FormControl(formState, validator, asyncValidator);
	        };
	        /**
	         *  Construct a {@link FormArray} from the given `controlsConfig` array of
	          * configuration, with the given optional `validator` and `asyncValidator`.
	         * @param {?} controlsConfig
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         * @return {?}
	         */
	        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	            var _this = this;
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            var /** @type {?} */ controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	            return new FormArray(controls, validator, asyncValidator);
	        };
	        /**
	         * @param {?} controlsConfig
	         * @return {?}
	         */
	        FormBuilder.prototype._reduceControls = function (controlsConfig) {
	            var _this = this;
	            var /** @type {?} */ controls = {};
	            Object.keys(controlsConfig).forEach(function (controlName) {
	                controls[controlName] = _this._createControl(controlsConfig[controlName]);
	            });
	            return controls;
	        };
	        /**
	         * @param {?} controlConfig
	         * @return {?}
	         */
	        FormBuilder.prototype._createControl = function (controlConfig) {
	            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	                controlConfig instanceof FormArray) {
	                return controlConfig;
	            }
	            else if (Array.isArray(controlConfig)) {
	                var /** @type {?} */ value = controlConfig[0];
	                var /** @type {?} */ validator = controlConfig.length > 1 ? controlConfig[1] : null;
	                var /** @type {?} */ asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	                return this.control(value, validator, asyncValidator);
	            }
	            else {
	                return this.control(controlConfig);
	            }
	        };
	        FormBuilder.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        FormBuilder.ctorParameters = function () { return []; };
	        return FormBuilder;
	    }());
	
	    /**
	     * @stable
	     */
	    var /** @type {?} */ VERSION = new _angular_core.Version('2.3.1');
	
	    var /** @type {?} */ SHARED_FORM_DIRECTIVES = [
	        NgSelectOption,
	        NgSelectMultipleOption,
	        DefaultValueAccessor,
	        NumberValueAccessor,
	        RangeValueAccessor,
	        CheckboxControlValueAccessor,
	        SelectControlValueAccessor,
	        SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor,
	        NgControlStatus,
	        NgControlStatusGroup,
	        RequiredValidator,
	        MinLengthValidator,
	        MaxLengthValidator,
	        PatternValidator,
	        CheckboxRequiredValidator,
	    ];
	    var /** @type {?} */ TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
	    var /** @type {?} */ REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
	    /**
	     *  Internal module used for sharing directives between FormsModule and ReactiveFormsModule
	     */
	    var InternalFormsSharedModule = (function () {
	        function InternalFormsSharedModule() {
	        }
	        InternalFormsSharedModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: SHARED_FORM_DIRECTIVES,
	                        exports: SHARED_FORM_DIRECTIVES,
	                    },] },
	        ];
	        /** @nocollapse */
	        InternalFormsSharedModule.ctorParameters = function () { return []; };
	        return InternalFormsSharedModule;
	    }());
	
	    /**
	     *  The ng module for forms.
	     */
	    var FormsModule = (function () {
	        function FormsModule() {
	        }
	        FormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
	                        providers: [RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        FormsModule.ctorParameters = function () { return []; };
	        return FormsModule;
	    }());
	    /**
	     *  The ng module for reactive forms.
	     */
	    var ReactiveFormsModule = (function () {
	        function ReactiveFormsModule() {
	        }
	        ReactiveFormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
	                        providers: [FormBuilder, RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        ReactiveFormsModule.ctorParameters = function () { return []; };
	        return ReactiveFormsModule;
	    }());
	
	    exports.AbstractControlDirective = AbstractControlDirective;
	    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	    exports.ControlContainer = ControlContainer;
	    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
	    exports.DefaultValueAccessor = DefaultValueAccessor;
	    exports.NgControl = NgControl;
	    exports.NgControlStatus = NgControlStatus;
	    exports.NgControlStatusGroup = NgControlStatusGroup;
	    exports.NgForm = NgForm;
	    exports.NgModel = NgModel;
	    exports.NgModelGroup = NgModelGroup;
	    exports.RadioControlValueAccessor = RadioControlValueAccessor;
	    exports.FormControlDirective = FormControlDirective;
	    exports.FormControlName = FormControlName;
	    exports.FormGroupDirective = FormGroupDirective;
	    exports.FormArrayName = FormArrayName;
	    exports.FormGroupName = FormGroupName;
	    exports.NgSelectOption = NgSelectOption;
	    exports.SelectControlValueAccessor = SelectControlValueAccessor;
	    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	    exports.CheckboxRequiredValidator = CheckboxRequiredValidator;
	    exports.MaxLengthValidator = MaxLengthValidator;
	    exports.MinLengthValidator = MinLengthValidator;
	    exports.PatternValidator = PatternValidator;
	    exports.RequiredValidator = RequiredValidator;
	    exports.FormBuilder = FormBuilder;
	    exports.AbstractControl = AbstractControl;
	    exports.FormArray = FormArray;
	    exports.FormControl = FormControl;
	    exports.FormGroup = FormGroup;
	    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
	    exports.NG_VALIDATORS = NG_VALIDATORS;
	    exports.Validators = Validators;
	    exports.VERSION = VERSION;
	    exports.FormsModule = FormsModule;
	    exports.ReactiveFormsModule = ReactiveFormsModule;
	
	}));

/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var menu_1 = __webpack_require__(30);
	var message_1 = __webpack_require__(31);
	var tooltip_1 = __webpack_require__(32);
	var popup_1 = __webpack_require__(33);
	var modal_1 = __webpack_require__(34);
	var segment_1 = __webpack_require__(35);
	var list_1 = __webpack_require__(36);
	var button_1 = __webpack_require__(37);
	var item_1 = __webpack_require__(38);
	var visibility_1 = __webpack_require__(39);
	var dropdown_1 = __webpack_require__(40);
	var select_1 = __webpack_require__(41);
	var search_1 = __webpack_require__(42);
	var loader_1 = __webpack_require__(52);
	var card_1 = __webpack_require__(53);
	var input_1 = __webpack_require__(54);
	var sidebar_1 = __webpack_require__(55);
	var tab_1 = __webpack_require__(56);
	var flag_1 = __webpack_require__(57);
	var contextmenu_1 = __webpack_require__(58);
	var progress_1 = __webpack_require__(59);
	var dimmer_1 = __webpack_require__(60);
	var transition_1 = __webpack_require__(61);
	var shape_1 = __webpack_require__(62);
	var accordion_1 = __webpack_require__(63);
	var rating_1 = __webpack_require__(64);
	__export(__webpack_require__(30));
	__export(__webpack_require__(58));
	__export(__webpack_require__(31));
	__export(__webpack_require__(32));
	__export(__webpack_require__(33));
	__export(__webpack_require__(39));
	__export(__webpack_require__(34));
	__export(__webpack_require__(35));
	__export(__webpack_require__(64));
	__export(__webpack_require__(36));
	__export(__webpack_require__(37));
	__export(__webpack_require__(42));
	__export(__webpack_require__(38));
	__export(__webpack_require__(40));
	__export(__webpack_require__(41));
	__export(__webpack_require__(52));
	__export(__webpack_require__(53));
	__export(__webpack_require__(54));
	__export(__webpack_require__(55));
	__export(__webpack_require__(56));
	__export(__webpack_require__(57));
	__export(__webpack_require__(59));
	__export(__webpack_require__(60));
	__export(__webpack_require__(61));
	__export(__webpack_require__(62));
	__export(__webpack_require__(63));
	exports.SEMANTIC_COMPONENTS = [
	    card_1.SemanticCardComponent,
	    card_1.SemanticCardsComponent,
	    contextmenu_1.SemanticContextMenuComponent,
	    input_1.SemanticInputComponent,
	    input_1.SemanticTextareaComponent,
	    input_1.SemanticCheckboxComponent,
	    menu_1.SemanticMenuComponent,
	    message_1.SemanticMessageComponent,
	    segment_1.SemanticSegmentComponent,
	    dimmer_1.SemanticDimmerComponent,
	    transition_1.SemanticTransitionComponent,
	    shape_1.SemanticShapeComponent,
	    popup_1.SemanticPopupComponent,
	    dropdown_1.SemanticDropdownComponent,
	    list_1.SemanticListComponent,
	    select_1.SemanticSelectComponent,
	    flag_1.SemanticFlagComponent,
	    search_1.SemanticSearchComponent,
	    item_1.SemanticItemComponent,
	    sidebar_1.SemanticSidebarComponent,
	    progress_1.SemanticProgressComponent,
	    modal_1.SemanticModalComponent,
	    tab_1.SemanticTabsComponent,
	    tab_1.SemanticTabComponent,
	    button_1.SemanticButtonComponent,
	    loader_1.SemanticLoaderComponent,
	    accordion_1.SemanticAccordionComponent,
	    accordion_1.SemanticAccordionItemComponent,
	    rating_1.SemanticRatingComponent
	];
	exports.SEMANTIC_DIRECTIVES = [
	    tooltip_1.SMTooltipDirective,
	    visibility_1.SMVisibilityDirective,
	    visibility_1.SMDeviceVisibilityDirective,
	    modal_1.SMModalTagsDirective,
	];
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var forms_1 = __webpack_require__(24);
	var NgSemanticModule = (function () {
	    function NgSemanticModule() {
	    }
	    return NgSemanticModule;
	}());
	NgSemanticModule = __decorate([
	    core_1.NgModule({
	        declarations: [exports.SEMANTIC_DIRECTIVES, exports.SEMANTIC_COMPONENTS],
	        exports: [exports.SEMANTIC_COMPONENTS, exports.SEMANTIC_DIRECTIVES],
	        imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule]
	    }),
	    __metadata("design:paramtypes", [])
	], NgSemanticModule);
	exports.NgSemanticModule = NgSemanticModule;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticMenuComponent = (function () {
	    function SemanticMenuComponent() {
	        this.logoClass = "logo";
	    }
	    SemanticMenuComponent.prototype.ngAfterViewInit = function () {
	        Array.from(this.innerElement.nativeElement.childNodes)
	            .filter(function (element) { return element.nodeName === "SM-MENU"; })
	            .map(function (element) { return element.firstElementChild.classList.remove("ui"); });
	    };
	    return SemanticMenuComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticMenuComponent.prototype, "logo", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticMenuComponent.prototype, "class", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticMenuComponent.prototype, "logoClass", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticMenuComponent.prototype, "title", void 0);
	__decorate([
	    core_1.ViewChild("innerElement"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticMenuComponent.prototype, "innerElement", void 0);
	SemanticMenuComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-menu",
	        template: "<div class=\"ui menu {{class}}\" #innerElement>\n<a href=\"#/\" *ngIf=\"logo\" class=\"header item\">\n    <img class=\"{{logoClass}}\" alt=\"{{title}}\" src=\"{{logo}}\">\n</a>\n\n<a href=\"#/\" *ngIf=\"title && !logo\" class=\"header item\">\n    {{title}}\n</a>\n\n<ng-content></ng-content>\n</div>\n"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticMenuComponent);
	exports.SemanticMenuComponent = SemanticMenuComponent;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticMessageComponent = (function () {
	    function SemanticMessageComponent(renderer) {
	        this.renderer = renderer;
	    }
	    SemanticMessageComponent.prototype.close = function () {
	        this.renderer.detachView([this.message.nativeElement]);
	    };
	    return SemanticMessageComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticMessageComponent.prototype, "icon", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticMessageComponent.prototype, "class", void 0);
	__decorate([
	    core_1.ViewChild("message"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticMessageComponent.prototype, "message", void 0);
	SemanticMessageComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        encapsulation: core_1.ViewEncapsulation.None,
	        selector: "sm-message",
	        styles: ["sm-message { display: block; margin: 1em 0; } message-header {display: block}"],
	        template: "<div class=\"ui message {{class}}\" [ngClass]=\"{'icon': icon}\" #message>\n<i class=\"close icon\" (click)=\"close()\"></i>\n<i *ngIf=\"icon\" class=\"icon {{icon}}\"></i>\n  <div class=\"content\">\n    <div class=\"header\">\n      <ng-content select=\"message-header\"></ng-content>\n    </div>\n    <ng-content select=\"message-content\"></ng-content>\n  </div>\n</div>"
	    }),
	    __metadata("design:paramtypes", [core_1.Renderer])
	], SemanticMessageComponent);
	exports.SemanticMessageComponent = SemanticMessageComponent;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SMTooltipDirective = (function () {
	    function SMTooltipDirective(element) {
	        this.element = element;
	    }
	    SMTooltipDirective.prototype.ngOnInit = function () {
	        this.element.element.nativeElement.setAttribute("data-position", this.smDirPosition || "top center");
	        this.element.element.nativeElement.setAttribute("data-tooltip", this.smDirTooltip);
	    };
	    return SMTooltipDirective;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SMTooltipDirective.prototype, "smDirTooltip", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SMTooltipDirective.prototype, "smDirPosition", void 0);
	SMTooltipDirective = __decorate([
	    core_1.Directive({
	        selector: "[smDirTooltip]"
	    }),
	    __metadata("design:paramtypes", [core_1.ViewContainerRef])
	], SMTooltipDirective);
	exports.SMTooltipDirective = SMTooltipDirective;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticPopupComponent = (function () {
	    function SemanticPopupComponent() {
	        this.visible = false;
	    }
	    SemanticPopupComponent.prototype.show = function (element, data) {
	        var _this = this;
	        if (data === void 0) { data = {}; }
	        if (!this.visible) {
	            this.visible = true;
	            this.element = element.target;
	            var options = Object.assign({
	                closable: true,
	                exclusive: true,
	                lastResort: true,
	                on: "click",
	                onHide: function () { return _this.hide(); },
	                popup: this.popup.nativeElement,
	                position: "bottom center",
	                preserve: true,
	            }, data);
	            jQuery(this.element)
	                .popup(options)
	                .popup("show");
	        }
	    };
	    SemanticPopupComponent.prototype.hide = function () {
	        if (this.visible && this.element) {
	            this.visible = false;
	            jQuery(this.element)
	                .popup("hide");
	        }
	    };
	    return SemanticPopupComponent;
	}());
	__decorate([
	    core_1.ViewChild("popup"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticPopupComponent.prototype, "popup", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticPopupComponent.prototype, "class", void 0);
	SemanticPopupComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-popup",
	        template: "<div class=\"ui popup very wide {{class}}\" #popup>\n    <div class=\"content\">\n        <ng-content></ng-content>\n    </div>\n</div>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticPopupComponent);
	exports.SemanticPopupComponent = SemanticPopupComponent;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticModalComponent = (function () {
	    function SemanticModalComponent() {
	        this.onModalShow = new core_1.EventEmitter();
	        this.onModalHide = new core_1.EventEmitter();
	    }
	    SemanticModalComponent.prototype.show = function (data) {
	        jQuery(this.modal.nativeElement)
	            .modal(data || {})
	            .modal("toggle");
	        this.onModalShow.next(true);
	    };
	    SemanticModalComponent.prototype.hide = function () {
	        jQuery(this.modal.nativeElement)
	            .modal("hide");
	        this.onModalHide.emit(true);
	    };
	    SemanticModalComponent.prototype.ngOnDestroy = function () {
	        var parent = this.modal.nativeElement.parentElement;
	        parent.removeChild(this.modal.nativeElement);
	    };
	    return SemanticModalComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticModalComponent.prototype, "class", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticModalComponent.prototype, "title", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticModalComponent.prototype, "icon", void 0);
	__decorate([
	    core_1.ViewChild("modal"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticModalComponent.prototype, "modal", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SemanticModalComponent.prototype, "onModalShow", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SemanticModalComponent.prototype, "onModalHide", void 0);
	SemanticModalComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-modal",
	        template: "<div class=\"ui modal {{class}}\" #modal>\n    <i class=\"close icon\"></i>\n    <div [ngClass]=\"{'icon': icon}\" class=\"ui header\">\n        <i *ngIf=\"icon\" class=\"icon {{icon}}\"></i>\n        {{title}}\n    </div>\n    <div class=\"content\">\n        <ng-content select=\"modal-content\"></ng-content>\n    </div>\n    <div class=\"actions\">\n        <ng-content select=\"modal-actions\"></ng-content>\n    </div>\n</div>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticModalComponent);
	exports.SemanticModalComponent = SemanticModalComponent;
	var SMModalTagsDirective = (function () {
	    function SMModalTagsDirective() {
	    }
	    return SMModalTagsDirective;
	}());
	SMModalTagsDirective = __decorate([
	    core_1.Directive({ selector: 'modal-content, modal-actions' }),
	    __metadata("design:paramtypes", [])
	], SMModalTagsDirective);
	exports.SMModalTagsDirective = SMModalTagsDirective;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticSegmentComponent = (function () {
	    function SemanticSegmentComponent() {
	    }
	    return SemanticSegmentComponent;
	}());
	__decorate([
	    core_1.Input("class"),
	    __metadata("design:type", String)
	], SemanticSegmentComponent.prototype, "class", void 0);
	SemanticSegmentComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-segment",
	        template: "<div class=\"ui segment {{class}}\">\n  <p><ng-content></ng-content></p>\n</div>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticSegmentComponent);
	exports.SemanticSegmentComponent = SemanticSegmentComponent;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticListComponent = (function () {
	    function SemanticListComponent() {
	    }
	    SemanticListComponent.prototype.ngAfterViewInit = function () {
	        Array.from(this.innerElement.nativeElement.childNodes)
	            .filter(function (element) { return element.nodeName === "SM-LIST"; })
	            .map(function (element) { return element.firstElementChild.classList.remove("ui"); });
	    };
	    return SemanticListComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticListComponent.prototype, "class", void 0);
	__decorate([
	    core_1.ViewChild("innerElement"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticListComponent.prototype, "innerElement", void 0);
	SemanticListComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-list",
	        template: "\n<div class=\"ui list {{class}}\" #innerElement>\n<ng-content></ng-content>\n</div>\n"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticListComponent);
	exports.SemanticListComponent = SemanticListComponent;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticButtonComponent = (function () {
	    function SemanticButtonComponent() {
	        this.disabled = false;
	    }
	    return SemanticButtonComponent;
	}());
	__decorate([
	    core_1.Input("class"),
	    __metadata("design:type", String)
	], SemanticButtonComponent.prototype, "class", void 0);
	__decorate([
	    core_1.Input("icon"),
	    __metadata("design:type", String)
	], SemanticButtonComponent.prototype, "icon", void 0);
	__decorate([
	    core_1.Input("disabled"),
	    __metadata("design:type", Boolean)
	], SemanticButtonComponent.prototype, "disabled", void 0);
	SemanticButtonComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-button",
	        template: "<button [ngClass]=\"{icon: icon}\" [attr.disabled]=\"disabled ? true : null\" class=\"ui {{class}} button\">\n  <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n    <ng-content></ng-content>\n</button>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticButtonComponent);
	exports.SemanticButtonComponent = SemanticButtonComponent;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticItemComponent = (function () {
	    function SemanticItemComponent() {
	    }
	    SemanticItemComponent.prototype.ngAfterViewInit = function () {
	        this.innerItemElement.nativeElement.parentElement.classList.add("item");
	    };
	    return SemanticItemComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticItemComponent.prototype, "icon", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticItemComponent.prototype, "header", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticItemComponent.prototype, "image", void 0);
	__decorate([
	    core_1.ViewChild("innerItemElement"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticItemComponent.prototype, "innerItemElement", void 0);
	SemanticItemComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "a[sm-item], sm-item",
	        template: "<i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n<img *ngIf=\"image\" class=\"ui avatar image\" src=\"{{image}}\">\n<div class=\"content\" #innerItemElement>\n  <div *ngIf=\"header\" class=\"header\">\n    {{header}}\n  </div>\n  <ng-content></ng-content>\n</div>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticItemComponent);
	exports.SemanticItemComponent = SemanticItemComponent;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SMVisibilityDirective = (function () {
	    function SMVisibilityDirective(element) {
	        this.element = element;
	        this.onTopVisible = new core_1.EventEmitter();
	        this.onTopPassed = new core_1.EventEmitter();
	        this.onUpdate = new core_1.EventEmitter();
	    }
	    SMVisibilityDirective.prototype.ngOnInit = function () {
	        var _this = this;
	        if (this.element.element.nativeElement) {
	            jQuery(this.element.element.nativeElement)
	                .visibility({
	                onTopPassed: function (calculations) { return _this.onTopPassed.emit(calculations); },
	                onTopVisible: function (calculations) { return _this.onTopVisible.emit(calculations); },
	                onUpdate: function (calculations) { return _this.onUpdate.emit(calculations); },
	            });
	        }
	    };
	    return SMVisibilityDirective;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], SMVisibilityDirective.prototype, "smDirVisibility", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SMVisibilityDirective.prototype, "onTopVisible", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SMVisibilityDirective.prototype, "onTopPassed", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SMVisibilityDirective.prototype, "onUpdate", void 0);
	SMVisibilityDirective = __decorate([
	    core_1.Directive({
	        selector: "[smDirVisibility]"
	    }),
	    __metadata("design:paramtypes", [core_1.ViewContainerRef])
	], SMVisibilityDirective);
	exports.SMVisibilityDirective = SMVisibilityDirective;
	var SMDeviceVisibilityDirective = (function () {
	    function SMDeviceVisibilityDirective(element) {
	        this.element = element;
	    }
	    SMDeviceVisibilityDirective.prototype.ngOnInit = function () {
	        (_a = this.element.element.nativeElement.classList).add.apply(_a, this.smDeviceVisibility.split(" "));
	        var _a;
	    };
	    return SMDeviceVisibilityDirective;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SMDeviceVisibilityDirective.prototype, "smDeviceVisibility", void 0);
	SMDeviceVisibilityDirective = __decorate([
	    core_1.Directive({
	        selector: "[smDeviceVisibility]"
	    }),
	    __metadata("design:paramtypes", [core_1.ViewContainerRef])
	], SMDeviceVisibilityDirective);
	exports.SMDeviceVisibilityDirective = SMDeviceVisibilityDirective;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticDropdownComponent = (function () {
	    function SemanticDropdownComponent() {
	        this.options = {};
	        this.onChange = new core_1.EventEmitter();
	    }
	    SemanticDropdownComponent.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        var options = Object.assign({
	            onChange: function (value, a, b) {
	                if (b != null && b.length) {
	                    _this.onChange.emit(b[0].innerText);
	                }
	            }
	        }, this.options);
	        jQuery(this.dropdown.nativeElement)
	            .dropdown(options);
	    };
	    return SemanticDropdownComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticDropdownComponent.prototype, "class", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticDropdownComponent.prototype, "title", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticDropdownComponent.prototype, "icon", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array)
	], SemanticDropdownComponent.prototype, "items", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], SemanticDropdownComponent.prototype, "options", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SemanticDropdownComponent.prototype, "onChange", void 0);
	__decorate([
	    core_1.ViewChild("dropdown"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticDropdownComponent.prototype, "dropdown", void 0);
	SemanticDropdownComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-dropdown",
	        template: "\n    <div class=\"ui {{class}} dropdown item\" #dropdown>\n        <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n        <div *ngIf=\"title\" class=\"text\">{{title}}</div>\n        <i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticDropdownComponent);
	exports.SemanticDropdownComponent = SemanticDropdownComponent;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(24);
	var SemanticSelectComponent = (function () {
	    function SemanticSelectComponent() {
	        this.control = new forms_1.FormControl();
	        this.options = {};
	        this.modelChange = new core_1.EventEmitter();
	        this.onChange = new core_1.EventEmitter();
	        this.multiple = false;
	    }
	    Object.defineProperty(SemanticSelectComponent.prototype, "disabled", {
	        set: function (data) {
	            var _this = this;
	            setTimeout(function () {
	                if (data) {
	                    jQuery(_this.select.nativeElement.parentNode).addClass("disabled");
	                }
	                else {
	                    jQuery(_this.select.nativeElement.parentNode).removeClass("disabled");
	                }
	            }, 1);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(SemanticSelectComponent.prototype, "model", {
	        set: function (data) {
	            var _this = this;
	            if (data) {
	                setTimeout(function () {
	                    jQuery(_this.select.nativeElement).dropdown("set selected", data);
	                }, 1);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SemanticSelectComponent.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        if (typeof this.class === "string" && this.class.search("multiple") >= 0) {
	            this.select.nativeElement.setAttribute("multiple", true);
	        }
	        var options = Object.assign({
	            onChange: function (value) {
	                _this.modelChange.emit(value);
	                _this.onChange.emit(value);
	            },
	            onHide: function () { return _this.control.markAsTouched(); }
	        }, this.options);
	        jQuery(this.select.nativeElement)
	            .dropdown(options);
	    };
	    return SemanticSelectComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", forms_1.FormControl)
	], SemanticSelectComponent.prototype, "control", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticSelectComponent.prototype, "class", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticSelectComponent.prototype, "label", void 0);
	__decorate([
	    core_1.Input("disabled"),
	    __metadata("design:type", Boolean),
	    __metadata("design:paramtypes", [Boolean])
	], SemanticSelectComponent.prototype, "disabled", null);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], SemanticSelectComponent.prototype, "options", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticSelectComponent.prototype, "placeholder", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SemanticSelectComponent.prototype, "modelChange", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SemanticSelectComponent.prototype, "onChange", void 0);
	__decorate([
	    core_1.ViewChild("select"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticSelectComponent.prototype, "select", void 0);
	__decorate([
	    core_1.Input("model"),
	    __metadata("design:type", Object),
	    __metadata("design:paramtypes", [Object])
	], SemanticSelectComponent.prototype, "model", null);
	SemanticSelectComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-select",
	        template: "<div class=\"field\" [ngClass]=\"{error: (!control?.valid && control?.touched) }\">\n  <label *ngIf=\"label\">{{label}}</label>\n<select [formControl]=\"control\" class=\"ui {{class}} dropdown\"  #select>\n    <option value=\"\">{{placeholder}}</option>\n    <ng-content></ng-content>\n</select>\n</div>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticSelectComponent);
	exports.SemanticSelectComponent = SemanticSelectComponent;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(24);
	__webpack_require__(43);
	__webpack_require__(50);
	var SemanticSearchComponent = (function () {
	    function SemanticSearchComponent() {
	        this.debounce = 0;
	        this.onSearch = new core_1.EventEmitter();
	        this.searchControl = new forms_1.FormControl();
	    }
	    SemanticSearchComponent.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        this.searchControl
	            .valueChanges
	            .distinctUntilChanged()
	            .debounceTime(this.debounce)
	            .subscribe(function (data) { return _this.onSearch.emit(data); });
	    };
	    return SemanticSearchComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticSearchComponent.prototype, "class", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], SemanticSearchComponent.prototype, "icon", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], SemanticSearchComponent.prototype, "loading", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number)
	], SemanticSearchComponent.prototype, "debounce", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticSearchComponent.prototype, "placeholder", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SemanticSearchComponent.prototype, "onSearch", void 0);
	SemanticSearchComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-search",
	        template: "<div class=\"ui search\" [ngClass]=\"{'loading': loading}\">\n <div class=\"ui icon input {{class}} \">\n  <input class=\"prompt\" [formControl]=\"searchControl\" type=\"text\" [attr.placeholder]=\"placeholder\">\n  <i *ngIf=\"icon\" class=\"search icon\"></i>\n  </div>\n  <div class=\"results\"></div>\n</div>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticSearchComponent);
	exports.SemanticSearchComponent = SemanticSearchComponent;


/***/ },
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticLoaderComponent = (function () {
	    function SemanticLoaderComponent() {
	        this.complete = false;
	    }
	    return SemanticLoaderComponent;
	}());
	__decorate([
	    core_1.Input("class"),
	    __metadata("design:type", String)
	], SemanticLoaderComponent.prototype, "class", void 0);
	__decorate([
	    core_1.Input("text"),
	    __metadata("design:type", String)
	], SemanticLoaderComponent.prototype, "text", void 0);
	__decorate([
	    core_1.Input("complete"),
	    __metadata("design:type", Boolean)
	], SemanticLoaderComponent.prototype, "complete", void 0);
	SemanticLoaderComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-loader",
	        template: "<div *ngIf=\"!complete\" class=\"ui active dimmer {{class}}\">\n    <div [ngClass]=\"{text: text}\" class=\"ui loader\">{{text}}</div>\n  </div>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticLoaderComponent);
	exports.SemanticLoaderComponent = SemanticLoaderComponent;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticCardComponent = (function () {
	    function SemanticCardComponent() {
	    }
	    return SemanticCardComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticCardComponent.prototype, "class", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticCardComponent.prototype, "image", void 0);
	SemanticCardComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-card",
	        template: "<div class=\"ui {{class}}\">\n<div class=\"image\" *ngIf=\"image\">\n    <img src=\"{{image}}\">\n  </div>\n  <div class=\"content\">\n    <ng-content select=\"card-title\"></ng-content>\n    <div class=\"meta\">\n      <ng-content select=\"card-subtitle\"></ng-content>\n    </div>\n    <div class=\"description\">\n      <ng-content select=\"card-content\"></ng-content>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <ng-content select=\"card-extra\"></ng-content>\n  </div>\n  <ng-content></ng-content>\n</div>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticCardComponent);
	exports.SemanticCardComponent = SemanticCardComponent;
	var SemanticCardsComponent = (function () {
	    function SemanticCardsComponent() {
	    }
	    return SemanticCardsComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticCardsComponent.prototype, "class", void 0);
	SemanticCardsComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-cards",
	        template: "<div class=\"ui cards {{class}}\"><ng-content></ng-content></div>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticCardsComponent);
	exports.SemanticCardsComponent = SemanticCardsComponent;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(24);
	var SemanticInputComponent = (function () {
	    function SemanticInputComponent(viewRef) {
	        this.viewRef = viewRef;
	        this.type = "text";
	        this.control = new forms_1.FormControl();
	        this.modelChange = new core_1.EventEmitter();
	        this.isInsideForm = false;
	    }
	    SemanticInputComponent.prototype.ngOnInit = function () {
	        if (this.inForm(this.viewRef.element.nativeElement, "form")) {
	            this.isInsideForm = true;
	        }
	    };
	    SemanticInputComponent.prototype.inForm = function (el, classname) {
	        if (el.parentNode) {
	            if (el.parentNode.nodeName.toLowerCase() === classname.toLowerCase()) {
	                return !!el.parentNode;
	            }
	            else {
	                return this.inForm(el.parentNode, classname);
	            }
	        }
	        else {
	            return false;
	        }
	    };
	    return SemanticInputComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticInputComponent.prototype, "label", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticInputComponent.prototype, "class", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticInputComponent.prototype, "icon", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticInputComponent.prototype, "type", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticInputComponent.prototype, "placeholder", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], SemanticInputComponent.prototype, "model", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", forms_1.FormControl)
	], SemanticInputComponent.prototype, "control", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SemanticInputComponent.prototype, "modelChange", void 0);
	SemanticInputComponent = __decorate([
	    core_1.Component({
	        selector: "sm-input",
	        template: "<div class=\"field\" [ngClass]=\"{error: (!control.valid && control.dirty && isInsideForm) }\">\n  <label *ngIf=\"label && isInsideForm\">{{label}}</label>\n  <div class=\"ui input {{class}}\" [ngClass]=\"{'icon': icon, 'error': (!control.valid && control.dirty &&!isInsideForm)}\">\n  <label *ngIf=\"label && !isInsideForm\" class=\"ui label\">{{label}}</label>\n  <input [type]=\"type\" [formControl]=\"control\" (keyup)=\"modelChange.emit(input.value)\" #input placeholder=\"{{placeholder}}\">\n  <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n</div>\n</div>"
	    }),
	    __metadata("design:paramtypes", [core_1.ViewContainerRef])
	], SemanticInputComponent);
	exports.SemanticInputComponent = SemanticInputComponent;
	var SemanticCheckboxComponent = (function () {
	    function SemanticCheckboxComponent() {
	        this.control = new forms_1.FormControl();
	        this.inputType = "checkbox";
	        this.classType = "checkbox";
	    }
	    Object.defineProperty(SemanticCheckboxComponent.prototype, "type", {
	        set: function (data) {
	            if (data && data !== "checkbox") {
	                this.classType = data;
	                if (data === "radio") {
	                    this.inputType = data;
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SemanticCheckboxComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", forms_1.FormControl)
	], SemanticCheckboxComponent.prototype, "control", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticCheckboxComponent.prototype, "label", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], SemanticCheckboxComponent.prototype, "disabled", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], SemanticCheckboxComponent.prototype, "value", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticCheckboxComponent.prototype, "name", void 0);
	__decorate([
	    core_1.Input("type"),
	    __metadata("design:type", String),
	    __metadata("design:paramtypes", [String])
	], SemanticCheckboxComponent.prototype, "type", null);
	SemanticCheckboxComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-checkbox",
	        template: "<div class=\"field\" [ngClass]=\"{error: (!control.value && control?.validator) }\">\n    <div class=\"ui {{classType}} checkbox\">\n      <input type=\"checkbox\" \n      [attr.value]=\"value\"\n      [attr.type]=\"inputType\" tabindex=\"0\" [attr.name]=\"name\" [formControl]=\"control\" [attr.disabled]=\"disabled\">\n      <label *ngIf=\"label\">{{label}}</label>\n    </div>\n  </div>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticCheckboxComponent);
	exports.SemanticCheckboxComponent = SemanticCheckboxComponent;
	var SemanticTextareaComponent = (function () {
	    function SemanticTextareaComponent() {
	        this.control = new forms_1.FormControl();
	    }
	    return SemanticTextareaComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", forms_1.FormControl)
	], SemanticTextareaComponent.prototype, "control", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticTextareaComponent.prototype, "label", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticTextareaComponent.prototype, "rows", void 0);
	SemanticTextareaComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-textarea",
	        template: "<div class=\"field\" [ngClass]=\"{error: (!control.valid && control.dirty) }\">\n    <label *ngIf=\"label\">{{label}}</label>\n    <textarea rows=\"{{rows}}\" [formControl]=\"control\"></textarea>\n  </div>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticTextareaComponent);
	exports.SemanticTextareaComponent = SemanticTextareaComponent;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	jQuery.fn.fixSidebar = function () {
	    var allModules = jQuery(this);
	    allModules
	        .each(function () {
	        var selector = { pusher: ".pusher" }, module = jQuery(this), context = jQuery("body");
	        if (module.nextAll(selector.pusher).length === 0) {
	            module.detach().prependTo(context);
	        }
	    });
	    return this;
	};
	var SemanticSidebarComponent = (function () {
	    function SemanticSidebarComponent(renderer) {
	        this.renderer = renderer;
	    }
	    SemanticSidebarComponent.prototype.show = function (options) {
	        jQuery(this.sidebar.nativeElement)
	            .sidebar(options || {})
	            .sidebar("toggle");
	    };
	    SemanticSidebarComponent.prototype.hide = function () {
	        jQuery(this.sidebar.nativeElement)
	            .sidebar("hide");
	    };
	    SemanticSidebarComponent.prototype.ngOnInit = function () {
	        jQuery(this.sidebar.nativeElement)
	            .fixSidebar();
	    };
	    SemanticSidebarComponent.prototype.ngOnDestroy = function () {
	        this.renderer.detachView([this.sidebar.nativeElement]);
	    };
	    return SemanticSidebarComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticSidebarComponent.prototype, "class", void 0);
	__decorate([
	    core_1.ViewChild("sidebar"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticSidebarComponent.prototype, "sidebar", void 0);
	SemanticSidebarComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-sidebar",
	        template: "<div class=\"ui sidebar {{class}}\" #sidebar>\n<ng-content></ng-content>\n</div>"
	    }),
	    __metadata("design:paramtypes", [core_1.Renderer])
	], SemanticSidebarComponent);
	exports.SemanticSidebarComponent = SemanticSidebarComponent;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticTabComponent = (function () {
	    function SemanticTabComponent() {
	    }
	    SemanticTabComponent.prototype.ngAfterViewInit = function () {
	        this.tabEl.nativeElement.parentElement.classList.add("ui", "tab", "bottom", "attached", "segment");
	        if (this.active) {
	            this.tabEl.nativeElement.parentElement.classList.add("active");
	        }
	    };
	    return SemanticTabComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number)
	], SemanticTabComponent.prototype, "tab", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticTabComponent.prototype, "title", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], SemanticTabComponent.prototype, "active", void 0);
	__decorate([
	    core_1.ViewChild("tab"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticTabComponent.prototype, "tabEl", void 0);
	SemanticTabComponent = __decorate([
	    core_1.Component({
	        selector: "sm-tab",
	        template: "\n<div #tab>\n    <ng-content></ng-content>\n</div>  "
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticTabComponent);
	exports.SemanticTabComponent = SemanticTabComponent;
	var SemanticTabsComponent = (function () {
	    function SemanticTabsComponent(elementRef) {
	        this.elementRef = elementRef;
	        this.options = {};
	    }
	    SemanticTabsComponent.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        this.initItemsIndices();
	        this.initTabs();
	        this.updateTabContentIndices();
	        this.tabs
	            .changes
	            .debounceTime(100)
	            .subscribe(function () {
	            _this.initItemsIndices();
	            _this.updateTabContentIndices();
	        });
	    };
	    SemanticTabsComponent.prototype.initItemsIndices = function () {
	        Array
	            .from(this.menu.nativeElement.getElementsByClassName("item"))
	            .map(function (element, index) {
	            element.setAttribute("data-tab", "tab-" + index);
	            jQuery(element).data("tab", "tab-" + index);
	        });
	    };
	    SemanticTabsComponent.prototype.updateTabContentIndices = function () {
	        this.tabs
	            .map(function (cmp, index) {
	            cmp.tabEl.nativeElement.parentElement.setAttribute("data-tab", "tab-" + index.toString());
	        });
	        this.initTabs();
	    };
	    SemanticTabsComponent.prototype.initTabs = function () {
	        this.options = Object.assign({
	            childrenOnly: true,
	            context: this.elementRef.nativeElement
	        }, this.options);
	        var tab = jQuery(this.menu.nativeElement.getElementsByClassName("item"))
	            .tab(this.options);
	        if (!this.menu.nativeElement.getElementsByClassName("item active").length) {
	            tab.tab("change tab", "tab-0");
	        }
	    };
	    return SemanticTabsComponent;
	}());
	__decorate([
	    core_1.ContentChildren(SemanticTabComponent),
	    __metadata("design:type", core_1.QueryList)
	], SemanticTabsComponent.prototype, "tabs", void 0);
	__decorate([
	    core_1.ViewChild("menu"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticTabsComponent.prototype, "menu", void 0);
	__decorate([
	    core_1.Input("options"),
	    __metadata("design:type", Object)
	], SemanticTabsComponent.prototype, "options", void 0);
	SemanticTabsComponent = __decorate([
	    core_1.Component({
	        selector: "sm-tabs",
	        template: "<div class=\"ui top attached tabular menu\" #menu>\n  <a class=\"item\" [ngClass]=\"{'active': tab.active}\" *ngFor=\"let tab of tabs\">{{tab.title}}</a>\n</div>\n<ng-content></ng-content>\n"
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], SemanticTabsComponent);
	exports.SemanticTabsComponent = SemanticTabsComponent;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticFlagComponent = (function () {
	    function SemanticFlagComponent() {
	    }
	    return SemanticFlagComponent;
	}());
	__decorate([
	    core_1.Input("flag"),
	    __metadata("design:type", String)
	], SemanticFlagComponent.prototype, "flag", void 0);
	SemanticFlagComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-flag",
	        template: "<i class=\"{{flag}} flag\"></i>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticFlagComponent);
	exports.SemanticFlagComponent = SemanticFlagComponent;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticContextMenuComponent = (function () {
	    function SemanticContextMenuComponent() {
	        this._position = { x: 0, y: 0 };
	        this.show = false;
	    }
	    Object.defineProperty(SemanticContextMenuComponent.prototype, "position", {
	        set: function (data) {
	            if (data) {
	                this._position = data;
	                this.show = true;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SemanticContextMenuComponent.prototype.clickedOutside = function () {
	        this.show = false;
	    };
	    return SemanticContextMenuComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array)
	], SemanticContextMenuComponent.prototype, "items", void 0);
	__decorate([
	    core_1.Input("position"),
	    __metadata("design:type", Object),
	    __metadata("design:paramtypes", [Object])
	], SemanticContextMenuComponent.prototype, "position", null);
	__decorate([
	    core_1.HostListener("document:click"),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], SemanticContextMenuComponent.prototype, "clickedOutside", null);
	SemanticContextMenuComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-contextmenu",
	        styles: [".sm-contextmenu { position: fixed; z-index: 1000; }"],
	        template: "<div \n[style.left.px]=\"_position?.x\" [style.top.px]=\"_position?.y\"\n[ngClass]=\"{'active visible': show}\" class=\"ui dropdown sm-contextmenu\">\n <div \n [ngClass]=\"{'visible animating slide down in': show, 'hidden': !show}\"  class=\"ui menu transition\">\n <a (click)=\"menu.action()\" *ngFor=\"let menu of items\" class=\"item\">\n <i class=\"{{menu.icon}} icon\"></i>\n {{menu.title}}\n </a>\n </div>\n </div>\n"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticContextMenuComponent);
	exports.SemanticContextMenuComponent = SemanticContextMenuComponent;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticProgressComponent = (function () {
	    function SemanticProgressComponent() {
	        this._progress = 0;
	    }
	    Object.defineProperty(SemanticProgressComponent.prototype, "progress", {
	        set: function (value) {
	            this._progress = (value >= 100) ? 100 : value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SemanticProgressComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticProgressComponent.prototype, "label", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticProgressComponent.prototype, "class", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number),
	    __metadata("design:paramtypes", [Number])
	], SemanticProgressComponent.prototype, "progress", null);
	SemanticProgressComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-progress",
	        template: "<div [ngClass]=\"{'success': _progress === 100}\" class=\"ui {{class}} progress\" [attr.data-percent]=\"_progress\">\n  <div class=\"bar\" [ngStyle]=\"{'width': _progress + '%'}\">\n    <div class=\"progress\">{{_progress}}%</div>\n  </div>\n  <div class=\"label\" *ngIf=\"label\">{{label}}</div>\n</div>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticProgressComponent);
	exports.SemanticProgressComponent = SemanticProgressComponent;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticDimmerComponent = (function () {
	    function SemanticDimmerComponent() {
	    }
	    SemanticDimmerComponent.prototype.show = function (options) {
	        jQuery(this.dimmer.nativeElement)
	            .dimmer(options || {})
	            .dimmer("toggle");
	    };
	    return SemanticDimmerComponent;
	}());
	__decorate([
	    core_1.ViewChild("dimmer"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticDimmerComponent.prototype, "dimmer", void 0);
	SemanticDimmerComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-dimmer",
	        template: "<div class=\"ui page dimmer\" #dimmer>\n  <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n</div>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticDimmerComponent);
	exports.SemanticDimmerComponent = SemanticDimmerComponent;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticTransitionComponent = (function () {
	    function SemanticTransitionComponent() {
	    }
	    SemanticTransitionComponent.prototype.show = function (animation) {
	        jQuery(this.transition.nativeElement)
	            .transition(animation || "fade out");
	    };
	    return SemanticTransitionComponent;
	}());
	__decorate([
	    core_1.ViewChild("transition"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticTransitionComponent.prototype, "transition", void 0);
	SemanticTransitionComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-transition",
	        template: "\n    <div #transition>\n        <ng-content></ng-content>\n    </div>\n    "
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticTransitionComponent);
	exports.SemanticTransitionComponent = SemanticTransitionComponent;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticShapeComponent = (function () {
	    function SemanticShapeComponent() {
	        this.options = {};
	        this.beforeChange = new core_1.EventEmitter();
	        this.onChange = new core_1.EventEmitter();
	    }
	    SemanticShapeComponent.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        this.options = Object.assign({
	            beforeChange: function () { return _this.beforeChange.emit(true); },
	            onChange: function () { return _this.onChange.emit(true); }
	        }, this.options);
	    };
	    SemanticShapeComponent.prototype.show = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        jQuery(this.shape.nativeElement)
	            .shape(this.options)
	            .shape(args.join(","));
	    };
	    return SemanticShapeComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticShapeComponent.prototype, "class", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], SemanticShapeComponent.prototype, "options", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SemanticShapeComponent.prototype, "beforeChange", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SemanticShapeComponent.prototype, "onChange", void 0);
	__decorate([
	    core_1.ViewChild("shape"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticShapeComponent.prototype, "shape", void 0);
	SemanticShapeComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-shape",
	        template: "\n    <div #shape class=\"ui shape {{class}}\">\n        <ng-content></ng-content>\n    </div>\n    "
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticShapeComponent);
	exports.SemanticShapeComponent = SemanticShapeComponent;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticAccordionComponent = (function () {
	    function SemanticAccordionComponent() {
	    }
	    SemanticAccordionComponent.prototype.ngAfterViewInit = function () {
	        var inAccordion = this.inAccordion(this.accordion.nativeElement, "accordion");
	        if (inAccordion) {
	            this.accordion.nativeElement.classList.remove("ui");
	            jQuery(inAccordion).accordion(this.options || {});
	        }
	        else {
	            jQuery(this.accordion.nativeElement).accordion(this.options || {});
	        }
	    };
	    SemanticAccordionComponent.prototype.inAccordion = function (el, className) {
	        if (el.parentNode) {
	            if (el.parentNode.classList && el.parentNode.classList.contains(className)) {
	                return el.parentNode;
	            }
	            else {
	                return this.inAccordion(el.parentNode, className);
	            }
	        }
	        else {
	            return false;
	        }
	    };
	    return SemanticAccordionComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticAccordionComponent.prototype, "class", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticAccordionComponent.prototype, "options", void 0);
	__decorate([
	    core_1.ViewChild("accordion"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticAccordionComponent.prototype, "accordion", void 0);
	SemanticAccordionComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-accordion",
	        styles: ["sm-accordion sm-accordion-item:first-child .title { border-top: none !important; }"],
	        template: "\n<div class=\"ui accordion {{class}}\" #accordion>\n    <ng-content></ng-content>\n</div>\n"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticAccordionComponent);
	exports.SemanticAccordionComponent = SemanticAccordionComponent;
	var SemanticAccordionItemComponent = (function () {
	    function SemanticAccordionItemComponent() {
	    }
	    return SemanticAccordionItemComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticAccordionItemComponent.prototype, "class", void 0);
	SemanticAccordionItemComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-accordion-item",
	        template: "\n<div class=\"{{class}} title\">\n    <i class=\"dropdown icon\"></i>\n    <ng-content select=\"accordion-title\"></ng-content>\n</div>\n<div class=\"{{class}} content\">\n    <ng-content select=\"accordion-content\"></ng-content>\n</div>\n"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticAccordionItemComponent);
	exports.SemanticAccordionItemComponent = SemanticAccordionItemComponent;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var SemanticRatingComponent = (function () {
	    function SemanticRatingComponent() {
	        this.onRate = new core_1.EventEmitter();
	    }
	    SemanticRatingComponent.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        jQuery(this.rating.nativeElement)
	            .rating({
	            initialRating: this.initialRating || 0,
	            maxRating: this.maxRating || 5,
	            onRate: function (value) {
	                _this.onRate.emit(value);
	            }
	        });
	    };
	    return SemanticRatingComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SemanticRatingComponent.prototype, "class", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number)
	], SemanticRatingComponent.prototype, "initialRating", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number)
	], SemanticRatingComponent.prototype, "maxRating", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SemanticRatingComponent.prototype, "onRate", void 0);
	__decorate([
	    core_1.ViewChild("rating"),
	    __metadata("design:type", core_1.ElementRef)
	], SemanticRatingComponent.prototype, "rating", void 0);
	SemanticRatingComponent = __decorate([
	    core_1.Component({
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        selector: "sm-rating",
	        template: "<div class=\"ui {{class}} rating\" #rating></div>"
	    }),
	    __metadata("design:paramtypes", [])
	], SemanticRatingComponent);
	exports.SemanticRatingComponent = SemanticRatingComponent;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	/**
	 * [Component description]
	 * @param  {'my-app'} {selector [description]
	 * @param  {`                                          <nav>                    <a routerLink="index" routerLinkActive="active">index</a>                    <a routerLink="login" routerLinkActive="active">login</a>                    <a routerLink="/" routerLinkActive="active">info</a>                </nav>                <router-outlet></router-outlet>        `} template [description]
	 * @param  {[type]}   }         [description]
	 * @return {[type]}             [description]
	 */
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'my-app',
	        template: "<router-outlet></router-outlet>",
	    }),
	    __metadata("design:paramtypes", [])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(67);
	var LoginComponent = (function () {
	    function LoginComponent(router) {
	        this.router = router;
	        this.username = "";
	        this.password = "";
	    }
	    LoginComponent.prototype.loginHandle = function () {
	        if (this.username == 'admin' && this.password == "123456") {
	            alert(true);
	            this.router.navigate(['/']);
	        }
	        else {
	            alert(false);
	        }
	    };
	    return LoginComponent;
	}());
	LoginComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(97),
	        styles: [__webpack_require__(99)]
	    }),
	    __metadata("design:paramtypes", [router_1.Router])
	], LoginComponent);
	exports.LoginComponent = LoginComponent;


/***/ },
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"ui grid fluid-height gradient\">\n    <div class=\"six wide centered column\">\n        <form class=\"ui fluid form segment mt8rem login-transparent\">\n            <div class=\"field\">\n                <img class=\"ui small centered circular image\" src=\"" + __webpack_require__(98) + "\">\n            </div>\n            <div class=\"field\">\n                <label>账号</label>\n                <div class=\"ui left icon input\">\n                  <input type=\"text\" placeholder=\"账号\" [(ngModel)]=\"username\" name=\"name\">\n                  <i class=\"user icon\"></i>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label>密码</label>\n                <div class=\"ui left icon input\">\n                  <input type=\"password\" placeholder=\"密码\" [(ngModel)]=\"password\" name=\"psd\">\n                  <i class=\"lock icon\"></i>\n                </div>\n            </div>\n            <!-- <div class=\"field\">\n                <div class=\"ui checkbox\">\n                    <input type=\"checkbox\" tabindex=\"0\" class=\"hidden\">\n                    <label>I agree to the Terms and Conditions</label>\n                </div>\n            </div> -->\n            <a class=\"ui fluid linkedin button\" (click)=\"loginHandle()\">Submit</a>\n        </form>\n    </div>\n\n</div>\n";

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/angular.png";

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "// removed by extract-text-webpack-plugin"

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(28);
	/// <reference path="../../../typings/globals/jquery/index.d.ts" />
	var InfoComponent = (function () {
	    function InfoComponent(http) {
	        var _this = this;
	        this.http = http;
	        this.infoDatas = [];
	        this.http
	            .get('../app/mockData/tableDatas.json')
	            .toPromise()
	            .then(function (response) {
	            var that = _this;
	            setTimeout(function () {
	                that.infoDatas = response.json();
	            }, 1000);
	        });
	    }
	    InfoComponent.prototype.modifyHandle = function () {
	        this.infoModal.show({ inverted: true });
	    };
	    InfoComponent.prototype.handleGetData = function () {
	        var _this = this;
	        this.http
	            .get('../app/mockData/tableDatas.json')
	            .toPromise()
	            .then(function (response) {
	            var that = _this;
	            setTimeout(function () {
	                that.infoDatas = response.json();
	            }, 5000);
	        });
	    };
	    InfoComponent.prototype.ngAfterViewChecked = function () {
	        $('tr.transition.hidden').transition('fly left');
	    };
	    InfoComponent.prototype.handleSave = function () {
	        this.infoDatas.push({ "name": "John Jesse1", "date": "September 14, 2013", "email": "jhlilk22@yahoo.com", "male": "Yes" });
	    };
	    InfoComponent.prototype.handleLibrarySave = function () {
	    };
	    return InfoComponent;
	}());
	__decorate([
	    core_1.ViewChild('infoModal'),
	    __metadata("design:type", Object)
	], InfoComponent.prototype, "infoModal", void 0);
	InfoComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(101),
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], InfoComponent);
	exports.InfoComponent = InfoComponent;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"ui ng-container row gradient\">\n    <my-header></my-header>\n    <img class=\"ui small centered circular image\" src=\"" + __webpack_require__(98) + "\">\n    <!-- <div class=\"ui left top attached menu\">\n        <div class=\"left menu\">\n            <div class=\"ui item\">\n              <div class=\"ui transparent icon input\">\n                <i class=\"search link icon\"></i>\n                <input class=\"prompt\" type=\"text\" placeholder=\"Search animals...\">\n              </div>\n            </div>\n        </div>\n\n\n      <div class=\"right menu\">\n          <a class=\"item\">\n              <i class=\"search link icon\"></i>\n          </a>\n      </div>\n    </div> -->\n    <div class=\"ui top attached menu\">\n        <a class=\"item\" (click)=\"infoModal.show({inverted: true})\">\n            <i class=\"content icon\"></i>\n            新增设备\n        </a>\n        <a class=\"item\" (click)=\"modifyHandle()\">\n            <i class=\"plus icon\"></i>\n            修改设备\n        </a>\n        <a class=\"item\" (click)=\"libraryModal.show({inverted: true})\">\n            <i class=\"grid layout icon\"></i>\n            新增出库\n        </a>\n    </div>\n    <div class=\"ui attached segment\">\n        <table class=\"ui striped table\">\n            <thead>\n                <tr>\n                    <th>设备编码</th>\n                    <th>设备名称</th>\n                    <th>设备数量</th>\n                    <th>库存号</th>\n                    <th>使用状态</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let infoData of infoDatas\" class=\"transition hidden\">\n                    <td><a routerLink=\"/detailed/{{infoData.code}}\">{{infoData.code}}</a></td>\n                    <td>{{infoData.name}}</td>\n                    <td>{{infoData.num}}</td>\n                    <td>{{infoData.library}}</td>\n                    <td>{{infoData.status}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"ui bottom attached menu\">\n        <div class=\"right menu\">\n            <!-- <div class=\"ui pagination menu\"> -->\n            <a class=\"item\">\n                <i class=\"angle left icon\"></i>\n            </a>\n            <a class=\"item\">\n            1\n            </a>\n            <div class=\"disabled item\">\n            ...\n            </div>\n            <a class=\"item\">\n            10\n            </a>\n            <a class=\"item\">\n            11\n            </a>\n            <a class=\"item\">\n            12\n            </a>\n            <a class=\"item\">\n                <i class=\"angle right icon\"></i>\n            </a>\n            <!-- </div> -->\n        </div>\n\n    </div>\n</div>\n<my-footer></my-footer>\n\n<sm-modal title=\"Hello from Modal\" class=\"\" icon=\"home\" #infoModal>\n    <modal-content>\n        <form class=\"ui form\">\n            <div class=\"four fields\">\n                <div class=\"field\">\n                  <label>First Name</label>\n                  <input type=\"text\" name=\"first-name\" placeholder=\"First Name\">\n                </div>\n                <div class=\"field\">\n                  <label>Last Name</label>\n                  <input type=\"text\" name=\"last-name\" placeholder=\"Last Name\">\n                </div>\n                <div class=\"field\">\n                  <label>First Name</label>\n                  <input type=\"text\" name=\"first-name\" placeholder=\"First Name\">\n                </div>\n                <div class=\"field\">\n                  <label>Last Name</label>\n                  <input type=\"text\" name=\"last-name\" placeholder=\"Last Name\">\n                </div>\n            </div>\n            <div class=\"two fields\">\n                <div class=\"field\">\n                  <label>First Name</label>\n                  <input type=\"text\" name=\"first-name\" placeholder=\"First Name\">\n                </div>\n                <div class=\"field\">\n                  <label>Last Name</label>\n                  <input type=\"text\" name=\"last-name\" placeholder=\"Last Name\">\n                </div>\n            </div>\n\n\n        </form>\n    </modal-content>\n    <modal-actions>\n        <div class=\"ui buttons\">\n            <div class=\"ui button green\" (click)=\"handleSave()\">&nbsp;&nbsp;&nbsp;保存&nbsp;&nbsp;&nbsp;</div>\n            <div class=\"ui button red\" (click)=\"infoModal.hide()\">&nbsp;&nbsp;&nbsp;关闭&nbsp;&nbsp;&nbsp;</div>\n        </div>\n    </modal-actions>\n</sm-modal>\n\n<sm-modal title=\"Hello from Modal\" class=\"\" icon=\"home\" #libraryModal>\n    <modal-content>\n        <form class=\"ui form\">\n            <div class=\"four fields\">\n                <div class=\"field\">\n                  <label>First Name</label>\n                  <input type=\"text\" name=\"first-name\" placeholder=\"First Name\">\n                </div>\n                <div class=\"field\">\n                  <label>Last Name</label>\n                  <input type=\"text\" name=\"last-name\" placeholder=\"Last Name\">\n                </div>\n                <div class=\"field\">\n                  <label>First Name</label>\n                  <input type=\"text\" name=\"first-name\" placeholder=\"First Name\">\n                </div>\n                <div class=\"field\">\n                  <label>Last Name</label>\n                  <input type=\"text\" name=\"last-name\" placeholder=\"Last Name\">\n                </div>\n            </div>\n            <div class=\"two fields\">\n                <div class=\"field\">\n                  <label>First Name</label>\n                  <input type=\"text\" name=\"first-name\" placeholder=\"First Name\">\n                </div>\n                <div class=\"field\">\n                  <label>Last Name</label>\n                  <input type=\"text\" name=\"last-name\" placeholder=\"Last Name\">\n                </div>\n            </div>\n\n\n        </form>\n    </modal-content>\n    <modal-actions>\n        <div class=\"ui buttons\">\n            <div class=\"ui button green\" (click)=\"handleLibrarySave()\">&nbsp;&nbsp;&nbsp;保存&nbsp;&nbsp;&nbsp;</div>\n            <div class=\"ui button red\" (click)=\"libraryModal.hide()\">&nbsp;&nbsp;&nbsp;关闭&nbsp;&nbsp;&nbsp;</div>\n        </div>\n    </modal-actions>\n</sm-modal>\n";

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(28);
	var DetailedComponent = (function () {
	    function DetailedComponent(http) {
	        var _this = this;
	        this.http = http;
	        this.infoDatas = [];
	        this.http
	            .get('../app/mockData/tableDatas2.json')
	            .toPromise()
	            .then(function (response) {
	            _this.infoDatas = response.json();
	        });
	    }
	    DetailedComponent.prototype.handleChange = function () {
	        this.infoDatas = [
	            { "name": "John Jesse", "date": "September 14, 2013", "email": "jhlilk22@yahoo.com", "male": "Yes" },
	            { "name": "John Jesse", "date": "September 14, 2013", "email": "jhlilk22@yahoo.com", "male": "Yes" },
	            { "name": "John Jesse", "date": "September 14, 2013", "email": "jhlilk22@yahoo.com", "male": "Yes" },
	            { "name": "John Jesse", "date": "September 14, 2013", "email": "jhlilk22@yahoo.com", "male": "Yes" }
	        ];
	    };
	    DetailedComponent.prototype.handleGetData = function () {
	        var _this = this;
	        this.http
	            .get('../app/mockData/tableDatas.json')
	            .toPromise()
	            .then(function (response) {
	            _this.infoDatas = response.json();
	        });
	    };
	    DetailedComponent.prototype.ngAfterViewChecked = function () {
	        $('tr.transition.hidden').transition('fly left');
	    };
	    return DetailedComponent;
	}());
	DetailedComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(103),
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], DetailedComponent);
	exports.DetailedComponent = DetailedComponent;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"ui ng-container row gradient\">\n    <my-header></my-header>\n    <img class=\"ui small centered circular image\" src=\"" + __webpack_require__(98) + "\">\n    <div class=\"ui top attached menu\">\n        <a class=\"item\" routerLink=\"/\">\n            <i class=\"reply icon\"></i>\n            返回首页\n        </a>\n    </div>\n    <div class=\"ui attached segment\">\n        <table class=\"ui striped table\">\n            <thead>\n                <tr>\n                    <th>设备编号</th>\n                    <th>设备名称</th>\n                    <th>单价</th>\n                    <th>保管人</th>\n                    <th>联系电话</th>\n                    <th>借出时间</th>\n                    <th>供货商</th>\n                    <th>联系电话</th>\n                    <th>报废</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let infoData of infoDatas\" class=\"transition hidden\">\n                    <td><a routerLink=\"/detailed/{{infoData.code}}\">{{infoData.code}}</a></td>\n                    <td>{{infoData.name}}</td>\n                    <td>{{infoData.price}}</td>\n                    <td>{{infoData.keeper}}</td>\n                    <td>{{infoData.phone}}</td>\n                    <td>{{infoData.date}}</td>\n                    <td>{{infoData.supplier}}</td>\n                    <td>{{infoData.supplierTel}}</td>\n                    <td></td>\n                </tr>\n\n            </tbody>\n        </table>\n    </div>\n    <div class=\"ui bottom attached menu\">\n        <div class=\"right menu\">\n            <!-- <div class=\"ui pagination menu\"> -->\n            <a class=\"item\">\n                <i class=\"angle left icon\"></i>\n            </a>\n            <a class=\"item\">\n            1\n            </a>\n            <div class=\"disabled item\">\n            ...\n            </div>\n            <a class=\"item\">\n            10\n            </a>\n            <a class=\"item\">\n            11\n            </a>\n            <a class=\"item\">\n            12\n            </a>\n            <a class=\"item\">\n                <i class=\"angle right icon\"></i>\n            </a>\n            <!-- </div> -->\n        </div>\n\n    </div>\n</div>\n<my-footer></my-footer>\n";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var FooterComponent = (function () {
	    function FooterComponent() {
	    }
	    return FooterComponent;
	}());
	FooterComponent = __decorate([
	    core_1.Component({
	        selector: 'my-footer',
	        template: __webpack_require__(105),
	    }),
	    __metadata("design:paramtypes", [])
	], FooterComponent);
	exports.FooterComponent = FooterComponent;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"ui black inverted vertical footer segment my-footer\">\n     <div class=\"ui center aligned container\">\n        <img src=\"" + __webpack_require__(98) + "\" class=\"ui centered mini image\">\n        <div class=\"ui horizontal inverted small divided link list\">\n          <a class=\"item\" href=\"http://semantic-ui.mit-license.org/\" target=\"_blank\">Free &amp; Open Source (MIT)</a>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var HeaderComponent = (function () {
	    function HeaderComponent() {
	    }
	    return HeaderComponent;
	}());
	HeaderComponent = __decorate([
	    core_1.Component({
	        selector: 'my-header',
	        template: __webpack_require__(107),
	    }),
	    __metadata("design:paramtypes", [])
	], HeaderComponent);
	exports.HeaderComponent = HeaderComponent;


/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "<sm-menu title=\"Angular2\" class=\"inverted\" logo=\"http://semantic-ui.com/images/avatar/small/stevie.jpg\">\n    <a sm-item *ngFor=\"let item of items\" [icon]=\"item.icon\">{{item?.title}}</a>\n\n    <sm-menu class=\"menu right secondary\">\n        <a sm-item href=\"#/elements/menu\" image=\"http://semantic-ui.com/images/avatar/small/stevie.jpg\">Elliot Fu</a>\n    </sm-menu>\n</sm-menu>\n";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(67);
	var login_component_1 = __webpack_require__(66);
	var info_component_1 = __webpack_require__(100);
	var detailed_component_1 = __webpack_require__(102);
	/// <reference path="../../../typings/globals/jquery/index.d.ts" />
	var appRoutes = [
	    { path: 'login', component: login_component_1.LoginComponent },
	    { path: '', component: info_component_1.InfoComponent },
	    { path: 'detailed/:id', component: detailed_component_1.DetailedComponent }
	];
	var AppRoutingModule = (function () {
	    function AppRoutingModule() {
	        $('.loading-dimmer').removeClass('visible active').addClass('hidden').removeAttr("style");
	    }
	    return AppRoutingModule;
	}());
	AppRoutingModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            router_1.RouterModule.forRoot(appRoutes, { useHash: true })
	        ],
	        exports: [
	            router_1.RouterModule
	        ],
	    }),
	    __metadata("design:paramtypes", [])
	], AppRoutingModule);
	exports.AppRoutingModule = AppRoutingModule;


/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vfi9AYW5ndWxhci9mb3Jtcy9idW5kbGVzL2Zvcm1zLnVtZC5qcyIsIndlYnBhY2s6Ly8vLi9+L25nLXNlbWFudGljL25nLXNlbWFudGljLmpzIiwid2VicGFjazovLy8uL34vbmctc2VtYW50aWMvc3JjL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9+L25nLXNlbWFudGljL3NyYy9tZXNzYWdlL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9uZy1zZW1hbnRpYy9zcmMvcG9wdXAvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9+L25nLXNlbWFudGljL3NyYy9wb3B1cC9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9+L25nLXNlbWFudGljL3NyYy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L25nLXNlbWFudGljL3NyYy9zZWdtZW50L3NlZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9uZy1zZW1hbnRpYy9zcmMvbGlzdC9saXN0LmpzIiwid2VicGFjazovLy8uL34vbmctc2VtYW50aWMvc3JjL2J1dHRvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9uZy1zZW1hbnRpYy9zcmMvaXRlbS9pdGVtLmpzIiwid2VicGFjazovLy8uL34vbmctc2VtYW50aWMvc3JjL3Zpc2liaWxpdHkvdmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L25nLXNlbWFudGljL3NyYy9kcm9wZG93bi9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9+L25nLXNlbWFudGljL3NyYy9zZWxlY3Qvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL34vbmctc2VtYW50aWMvc3JjL3NlYXJjaC9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9uZy1zZW1hbnRpYy9zcmMvbG9hZGVyL2xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L25nLXNlbWFudGljL3NyYy9jYXJkL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9uZy1zZW1hbnRpYy9zcmMvaW5wdXQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9uZy1zZW1hbnRpYy9zcmMvc2lkZWJhci9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL34vbmctc2VtYW50aWMvc3JjL3RhYi90YWIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9uZy1zZW1hbnRpYy9zcmMvZmxhZy9mbGFnLmpzIiwid2VicGFjazovLy8uL34vbmctc2VtYW50aWMvc3JjL2NvbnRleHRtZW51L2NvbnRleHRtZW51LmpzIiwid2VicGFjazovLy8uL34vbmctc2VtYW50aWMvc3JjL3Byb2dyZXNzL3Byb2dyZXNzLmpzIiwid2VicGFjazovLy8uL34vbmctc2VtYW50aWMvc3JjL2RpbW1lci9kaW1tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9uZy1zZW1hbnRpYy9zcmMvdHJhbnNpdGlvbi90cmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL34vbmctc2VtYW50aWMvc3JjL3NoYXBlL3NoYXBlLmpzIiwid2VicGFjazovLy8uL34vbmctc2VtYW50aWMvc3JjL2FjY29yZGlvbi9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9uZy1zZW1hbnRpYy9zcmMvcmF0aW5nL3JhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9sb2dpbi9sb2dpbi5odG1sIiwid2VicGFjazovLy8uL2FwcC9idWlsZC9hc3NldHMvYW5ndWxhci5wbmciLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9sb2dpbi9sb2dpbi5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9pbmZvL2luZm8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zcmMvaW5mby9pbmZvLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9kZXRhaWxlZC9kZXRhaWxlZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9kZXRhaWxlZC9kZXRhaWxlZC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zcmMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9mb290ZXIvZm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2hlYWRlci9oZWFkZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2FwcFJvdXRlci9hcHBSb3V0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseURBQTJFO0FBQzNFLDRDQUFzQztBQUl0QyxrREFBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xwRCxxQ0FBeUM7QUFDekMsa0RBQTJEO0FBQzNELHVDQUE2QztBQUM3QyxzQ0FBOEM7QUFDOUMsNkNBQStDO0FBRS9DLCtDQUE4QztBQUM5QyxpREFBdUQ7QUFDdkQsaURBQW9EO0FBQ3BELHFEQUFnRTtBQUNoRSxtREFBMEQ7QUFDMUQsbURBQTBEO0FBSTFELG1EQUE4RDtBQXVCOUQsS0FBYSxTQUFTO0tBQ2xCO1NBQ0ksNkZBQTZGO0tBQ2pHLENBQUM7S0FDTCxnQkFBQztBQUFELEVBQUM7QUFKWSxVQUFTO0tBcEJyQixlQUFRLENBQUM7U0FDTixPQUFPLEVBQUU7YUFDTCw4QkFBZ0I7YUFDaEIsbUJBQVc7YUFDWCxnQ0FBYTthQUNiLGlCQUFVO2FBQ1YsbUNBQWdCO1VBRW5CO1NBQ0QsWUFBWSxFQUFFO2FBQ1YsNEJBQVk7YUFDWixnQ0FBYzthQUNkLDhCQUFhO2FBQ2Isc0NBQWlCO2FBQ2pCLGtDQUFlO2FBQ2Ysa0NBQWU7VUFFbEI7U0FD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RUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtLQUM1QyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7S0FDdEMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtFQUM3RCxDQUFDO0FBWUYsS0FBYSxnQkFBZ0I7S0FDekI7U0FDSSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlGLENBQUM7S0FDTCx1QkFBQztBQUFELEVBQUM7QUFKWSxpQkFBZ0I7S0FWNUIsZUFBUSxDQUFDO1NBQ1IsT0FBTyxFQUFFO2FBQ1AscUJBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1VBQ2xEO1NBRUQsT0FBTyxFQUFFO2FBQ1AscUJBQVk7VUFDYjtNQUVGLENBQUM7O0lBQ1csZ0JBQWdCLENBSTVCO0FBSlksNkNBQWdCIiwiZmlsZSI6ImJ1aWxkL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHtBcHBNb2R1bGV9IGZyb20gJy4vYXBwLm1vZHVsZSdcblxuXG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYXBwL3NyYy9hcHAudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9ICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgTmdTZW1hbnRpY01vZHVsZSB9IGZyb20gJ25nLXNlbWFudGljJztcblxuaW1wb3J0IHtBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHtJbmZvQ29tcG9uZW50fSBmcm9tICcuL2luZm8vaW5mby5jb21wb25lbnQnO1xuaW1wb3J0IHtEZXRhaWxlZENvbXBvbmVudH0gZnJvbSAnLi9kZXRhaWxlZC9kZXRhaWxlZC5jb21wb25lbnQnO1xuaW1wb3J0IHtGb290ZXJDb21wb25lbnR9IGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gJy4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuXG5cbmltcG9ydCB7Um91dGluZ30gZnJvbSAnLi9hcHBSb3V0ZXIvYXBwUm91dGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0FwcFJvdXRpbmdNb2R1bGV9IGZyb20gJy4vYXBwUm91dGVyL2FwcFJvdXRlci5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOZ1NlbWFudGljTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcblxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIEluZm9Db21wb25lbnQsXG4gICAgICAgIERldGFpbGVkQ29tcG9uZW50LFxuICAgICAgICBGb290ZXJDb21wb25lbnQsXG4gICAgICAgIEhlYWRlckNvbXBvbmVudCxcblxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyAkKCcubG9hZGluZy1kaW1tZXInKS5yZW1vdmVDbGFzcygndmlzaWJsZSBhY3RpdmUnKS5hZGRDbGFzcygnaGlkZGVuJykucmVtb3ZlQXR0cihcInN0eWxlXCIpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYXBwL3NyYy9hcHAubW9kdWxlLnRzIiwiLyoqXG4gKiBAbGljZW5zZSBBbmd1bGFyIHYyLjMuMVxuICogKGMpIDIwMTAtMjAxNiBHb29nbGUsIEluYy4gaHR0cHM6Ly9hbmd1bGFyLmlvL1xuICogTGljZW5zZTogTUlUXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyksIHJlcXVpcmUoJ3J4anMvb3BlcmF0b3IvdG9Qcm9taXNlJyksIHJlcXVpcmUoJ3J4anMvU3ViamVjdCcpLCByZXF1aXJlKCdyeGpzL09ic2VydmFibGUnKSwgcmVxdWlyZSgncnhqcy9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlJykpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ0Bhbmd1bGFyL2NvcmUnLCAncnhqcy9vcGVyYXRvci90b1Byb21pc2UnLCAncnhqcy9TdWJqZWN0JywgJ3J4anMvT2JzZXJ2YWJsZScsICdyeGpzL29ic2VydmFibGUvZnJvbVByb21pc2UnXSwgZmFjdG9yeSkgOlxuICAgIChmYWN0b3J5KChnbG9iYWwubmcgPSBnbG9iYWwubmcgfHwge30sIGdsb2JhbC5uZy5mb3JtcyA9IGdsb2JhbC5uZy5mb3JtcyB8fCB7fSksZ2xvYmFsLm5nLmNvcmUsZ2xvYmFsLlJ4Lk9ic2VydmFibGUucHJvdG90eXBlLGdsb2JhbC5SeCxnbG9iYWwuUngsZ2xvYmFsLlJ4Lk9ic2VydmFibGUpKTtcbn0odGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsX2FuZ3VsYXJfY29yZSxyeGpzX29wZXJhdG9yX3RvUHJvbWlzZSxyeGpzX1N1YmplY3Qscnhqc19PYnNlcnZhYmxlLHJ4anNfb2JzZXJ2YWJsZV9mcm9tUHJvbWlzZSkgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogIEJhc2UgY2xhc3MgZm9yIGNvbnRyb2wgZGlyZWN0aXZlcy5cbiAgICAgICogKlxuICAgICAgKiBPbmx5IHVzZWQgaW50ZXJuYWxseSBpbiB0aGUgZm9ybXMgbW9kdWxlLlxuICAgICAgKiAqXG4gICAgICogQGFic3RyYWN0XG4gICAgICovXG4gICAgdmFyIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSgpIHtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBFcnJvcigndW5pbXBsZW1lbnRlZCcpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC52YWx1ZSA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ2YWxpZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnZhbGlkIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImludmFsaWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5pbnZhbGlkIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInBlbmRpbmdcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5wZW5kaW5nIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImVycm9yc1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmVycm9ycyA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJwcmlzdGluZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnByaXN0aW5lIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImRpcnR5XCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuZGlydHkgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidG91Y2hlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnRvdWNoZWQgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidW50b3VjaGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wudW50b3VjaGVkIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImRpc2FibGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuZGlzYWJsZWQgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiZW5hYmxlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmVuYWJsZWQgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwic3RhdHVzQ2hhbmdlc1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnN0YXR1c0NoYW5nZXMgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidmFsdWVDaGFuZ2VzXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/PX0gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7IHZhbHVlID0gdW5kZWZpbmVkOyB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sKVxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC5yZXNldCh2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGVycm9yQ29kZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBwYXRoXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLmhhc0Vycm9yID0gZnVuY3Rpb24gKGVycm9yQ29kZSwgcGF0aCkge1xuICAgICAgICAgICAgaWYgKHBhdGggPT09IHZvaWQgMCkgeyBwYXRoID0gbnVsbDsgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5oYXNFcnJvcihlcnJvckNvZGUsIHBhdGgpIDogZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGVycm9yQ29kZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBwYXRoXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLmdldEVycm9yID0gZnVuY3Rpb24gKGVycm9yQ29kZSwgcGF0aCkge1xuICAgICAgICAgICAgaWYgKHBhdGggPT09IHZvaWQgMCkgeyBwYXRoID0gbnVsbDsgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5nZXRFcnJvcihlcnJvckNvZGUsIHBhdGgpIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZTtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkMSA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICBBIGRpcmVjdGl2ZSB0aGF0IGNvbnRhaW5zIG11bHRpcGxlIHtAbGluayBOZ0NvbnRyb2x9cy5cbiAgICAgICogKlxuICAgICAgKiBPbmx5IHVzZWQgYnkgdGhlIGZvcm1zIG1vZHVsZS5cbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBDb250cm9sQ29udGFpbmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDEoQ29udHJvbENvbnRhaW5lciwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gQ29udHJvbENvbnRhaW5lcigpIHtcbiAgICAgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250cm9sQ29udGFpbmVyLnByb3RvdHlwZSwgXCJmb3JtRGlyZWN0aXZlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIEdldCB0aGUgZm9ybSB0byB3aGljaCB0aGlzIGNvbnRhaW5lciBiZWxvbmdzLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRyb2xDb250YWluZXIucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgR2V0IHRoZSBwYXRoIHRvIHRoaXMgY29udGFpbmVyLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIENvbnRyb2xDb250YWluZXI7XG4gICAgfShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUpKTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gb2JqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc1ByZXNlbnQob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogIT0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBvYmpcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzQmxhbmsob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogPT0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBhXG4gICAgICogQHBhcmFtIHs/fSBiXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsb29zZUlkZW50aWNhbChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhID09PSBiIHx8IHR5cGVvZiBhID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYiA9PT0gJ251bWJlcicgJiYgaXNOYU4oYSkgJiYgaXNOYU4oYik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gb1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNKc09iamVjdChvKSB7XG4gICAgICAgIHJldHVybiBvICE9PSBudWxsICYmICh0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgbyA9PT0gJ29iamVjdCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IG9ialxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNQcmltaXRpdmUob2JqKSB7XG4gICAgICAgIHJldHVybiAhaXNKc09iamVjdChvYmopO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBXcmFwcyBKYXZhc2NyaXB0IE9iamVjdHNcbiAgICAgKi9cbiAgICB2YXIgU3RyaW5nTWFwV3JhcHBlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFN0cmluZ01hcFdyYXBwZXIoKSB7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbTFcbiAgICAgICAgICogQHBhcmFtIHs/fSBtMlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU3RyaW5nTWFwV3JhcHBlci5tZXJnZSA9IGZ1bmN0aW9uIChtMSwgbTIpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG0gPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhtMSk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgbVtrXSA9IG0xW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IE9iamVjdC5rZXlzKG0yKTsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IF9jW19iXTtcbiAgICAgICAgICAgICAgICBtW2tdID0gbTJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbTFcbiAgICAgICAgICogQHBhcmFtIHs/fSBtMlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU3RyaW5nTWFwV3JhcHBlci5lcXVhbHMgPSBmdW5jdGlvbiAobTEsIG0yKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBrMSA9IE9iamVjdC5rZXlzKG0xKTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGsyID0gT2JqZWN0LmtleXMobTIpO1xuICAgICAgICAgICAgaWYgKGsxLmxlbmd0aCAhPSBrMi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIGkgPSAwOyBpIDwgazEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBrZXkgPSBrMVtpXTtcbiAgICAgICAgICAgICAgICBpZiAobTFba2V5XSAhPT0gbTJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBTdHJpbmdNYXBXcmFwcGVyO1xuICAgIH0oKSk7XG4gICAgdmFyIExpc3RXcmFwcGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gTGlzdFdyYXBwZXIoKSB7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gYXJyXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29uZGl0aW9uXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBMaXN0V3JhcHBlci5maW5kTGFzdCA9IGZ1bmN0aW9uIChhcnIsIGNvbmRpdGlvbikge1xuICAgICAgICAgICAgZm9yICh2YXIgLyoqIEB0eXBlIHs/fSAqLyBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbihhcnJbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGxpc3RcbiAgICAgICAgICogQHBhcmFtIHs/fSBpdGVtc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTGlzdFdyYXBwZXIucmVtb3ZlQWxsID0gZnVuY3Rpb24gKGxpc3QsIGl0ZW1zKSB7XG4gICAgICAgICAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpbmRleCA9IGxpc3QuaW5kZXhPZihpdGVtc1tpXSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbGlzdFxuICAgICAgICAgKiBAcGFyYW0gez99IGVsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBMaXN0V3JhcHBlci5yZW1vdmUgPSBmdW5jdGlvbiAobGlzdCwgZWwpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGluZGV4ID0gbGlzdC5pbmRleE9mKGVsKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBhXG4gICAgICAgICAqIEBwYXJhbSB7P30gYlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTGlzdFdyYXBwZXIuZXF1YWxzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChhLmxlbmd0aCAhPSBiLmxlbmd0aClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2ldICE9PSBiW2ldKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbGlzdFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTGlzdFdyYXBwZXIuZmxhdHRlbiA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5yZWR1Y2UoZnVuY3Rpb24gKGZsYXQsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBmbGF0SXRlbSA9IEFycmF5LmlzQXJyYXkoaXRlbSkgPyBMaXN0V3JhcHBlci5mbGF0dGVuKGl0ZW0pIDogaXRlbTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKChmbGF0KSkuY29uY2F0KGZsYXRJdGVtKTtcbiAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIExpc3RXcmFwcGVyO1xuICAgIH0oKSk7XG5cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpc1Byb21pc2UgPSBfYW5ndWxhcl9jb3JlLl9fY29yZV9wcml2YXRlX18uaXNQcm9taXNlO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNFbXB0eUlucHV0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVycyBmb3IgdmFsaWRhdG9ycyB0byBiZSB1c2VkIGZvciB7QGxpbmsgRm9ybUNvbnRyb2x9cyBpbiBhIGZvcm0uXG4gICAgICpcbiAgICAgKiBQcm92aWRlIHRoaXMgdXNpbmcgYG11bHRpOiB0cnVlYCB0byBhZGQgdmFsaWRhdG9ycy5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlXG4gICAgICpcbiAgICAgKiB7QGV4YW1wbGUgY29yZS9mb3Jtcy90cy9uZ192YWxpZGF0b3JzL25nX3ZhbGlkYXRvcnMudHMgcmVnaW9uPSduZ192YWxpZGF0b3JzJ31cbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gTkdfVkFMSURBVE9SUyA9IG5ldyBfYW5ndWxhcl9jb3JlLk9wYXF1ZVRva2VuKCdOZ1ZhbGlkYXRvcnMnKTtcbiAgICAvKipcbiAgICAgKiBQcm92aWRlcnMgZm9yIGFzeW5jaHJvbm91cyB2YWxpZGF0b3JzIHRvIGJlIHVzZWQgZm9yIHtAbGluayBGb3JtQ29udHJvbH1zXG4gICAgICogaW4gYSBmb3JtLlxuICAgICAqXG4gICAgICogUHJvdmlkZSB0aGlzIHVzaW5nIGBtdWx0aTogdHJ1ZWAgdG8gYWRkIHZhbGlkYXRvcnMuXG4gICAgICpcbiAgICAgKiBTZWUge0BsaW5rIE5HX1ZBTElEQVRPUlN9IGZvciBtb3JlIGRldGFpbHMuXG4gICAgICpcbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gTkdfQVNZTkNfVkFMSURBVE9SUyA9IG5ldyBfYW5ndWxhcl9jb3JlLk9wYXF1ZVRva2VuKCdOZ0FzeW5jVmFsaWRhdG9ycycpO1xuICAgIC8qKlxuICAgICAqICBQcm92aWRlcyBhIHNldCBvZiB2YWxpZGF0b3JzIHVzZWQgYnkgZm9ybSBjb250cm9scy5cbiAgICAgICogKlxuICAgICAgKiBBIHZhbGlkYXRvciBpcyBhIGZ1bmN0aW9uIHRoYXQgcHJvY2Vzc2VzIGEge0BsaW5rIEZvcm1Db250cm9sfSBvciBjb2xsZWN0aW9uIG9mXG4gICAgICAqIGNvbnRyb2xzIGFuZCByZXR1cm5zIGEgbWFwIG9mIGVycm9ycy4gQSBudWxsIG1hcCBtZWFucyB0aGF0IHZhbGlkYXRpb24gaGFzIHBhc3NlZC5cbiAgICAgICogKlxuICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgKiAqXG4gICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgICogdmFyIGxvZ2luQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuICAgICAgKiBgYGBcbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBWYWxpZGF0b3JzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gVmFsaWRhdG9ycygpIHtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSBub24tZW1wdHkgdmFsdWUuXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCA9IGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNFbXB0eUlucHV0VmFsdWUoY29udHJvbC52YWx1ZSkgPyB7ICdyZXF1aXJlZCc6IHRydWUgfSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbCB2YWx1ZSB0byBiZSB0cnVlLlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlID0gZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sLnZhbHVlID09PSB0cnVlID8gbnVsbCA6IHsgJ3JlcXVpcmVkJzogdHJ1ZSB9O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSB2YWx1ZSBvZiBhIG1pbmltdW0gbGVuZ3RoLlxuICAgICAgICAgKiBAcGFyYW0gez99IG1pbkxlbmd0aFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGggPSBmdW5jdGlvbiAobWluTGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eUlucHV0VmFsdWUoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIGRvbid0IHZhbGlkYXRlIGVtcHR5IHZhbHVlcyB0byBhbGxvdyBvcHRpb25hbCBjb250cm9sc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBsZW5ndGggPSBjb250cm9sLnZhbHVlID8gY29udHJvbC52YWx1ZS5sZW5ndGggOiAwO1xuICAgICAgICAgICAgICAgIHJldHVybiBsZW5ndGggPCBtaW5MZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICB7ICdtaW5sZW5ndGgnOiB7ICdyZXF1aXJlZExlbmd0aCc6IG1pbkxlbmd0aCwgJ2FjdHVhbExlbmd0aCc6IGxlbmd0aCB9IH0gOlxuICAgICAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgb2YgYSBtYXhpbXVtIGxlbmd0aC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBtYXhMZW5ndGhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoID0gZnVuY3Rpb24gKG1heExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbGVuZ3RoID0gY29udHJvbC52YWx1ZSA/IGNvbnRyb2wudmFsdWUubGVuZ3RoIDogMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVuZ3RoID4gbWF4TGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgeyAnbWF4bGVuZ3RoJzogeyAncmVxdWlyZWRMZW5ndGgnOiBtYXhMZW5ndGgsICdhY3R1YWxMZW5ndGgnOiBsZW5ndGggfSB9IDpcbiAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgYSBjb250cm9sIHRvIG1hdGNoIGEgcmVnZXggdG8gaXRzIHZhbHVlLlxuICAgICAgICAgKiBAcGFyYW0gez99IHBhdHRlcm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFZhbGlkYXRvcnMucGF0dGVybiA9IGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcjtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlZ2V4O1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcmVnZXhTdHI7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmVnZXhTdHIgPSBcIl5cIiArIHBhdHRlcm4gKyBcIiRcIjtcbiAgICAgICAgICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAocmVnZXhTdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVnZXhTdHIgPSBwYXR0ZXJuLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgcmVnZXggPSBwYXR0ZXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRW1wdHlJbnB1dFZhbHVlKGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBkb24ndCB2YWxpZGF0ZSBlbXB0eSB2YWx1ZXMgdG8gYWxsb3cgb3B0aW9uYWwgY29udHJvbHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdmFsdWUgPSBjb250cm9sLnZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiByZWdleC50ZXN0KHZhbHVlKSA/IG51bGwgOlxuICAgICAgICAgICAgICAgICAgICB7ICdwYXR0ZXJuJzogeyAncmVxdWlyZWRQYXR0ZXJuJzogcmVnZXhTdHIsICdhY3R1YWxWYWx1ZSc6IHZhbHVlIH0gfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgTm8tb3AgdmFsaWRhdG9yLlxuICAgICAgICAgKiBAcGFyYW0gez99IGNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvciA9IGZ1bmN0aW9uIChjKSB7IHJldHVybiBudWxsOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIENvbXBvc2UgbXVsdGlwbGUgdmFsaWRhdG9ycyBpbnRvIGEgc2luZ2xlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdW5pb25cbiAgICAgICAgICAqIG9mIHRoZSBpbmRpdmlkdWFsIGVycm9yIG1hcHMuXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVmFsaWRhdG9ycy5jb21wb3NlID0gZnVuY3Rpb24gKHZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdG9ycylcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHByZXNlbnRWYWxpZGF0b3JzID0gdmFsaWRhdG9ycy5maWx0ZXIoaXNQcmVzZW50KTtcbiAgICAgICAgICAgIGlmIChwcmVzZW50VmFsaWRhdG9ycy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfbWVyZ2VFcnJvcnMoX2V4ZWN1dGVWYWxpZGF0b3JzKGNvbnRyb2wsIHByZXNlbnRWYWxpZGF0b3JzKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyA9IGZ1bmN0aW9uICh2YWxpZGF0b3JzKSB7XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRvcnMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBwcmVzZW50VmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMuZmlsdGVyKGlzUHJlc2VudCk7XG4gICAgICAgICAgICBpZiAocHJlc2VudFZhbGlkYXRvcnMubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBwcm9taXNlcyA9IF9leGVjdXRlQXN5bmNWYWxpZGF0b3JzKGNvbnRyb2wsIHByZXNlbnRWYWxpZGF0b3JzKS5tYXAoX2NvbnZlcnRUb1Byb21pc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihfbWVyZ2VFcnJvcnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnM7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IG9ialxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2NvbnZlcnRUb1Byb21pc2Uob2JqKSB7XG4gICAgICAgIHJldHVybiBpc1Byb21pc2Uob2JqKSA/IG9iaiA6IHJ4anNfb3BlcmF0b3JfdG9Qcm9taXNlLnRvUHJvbWlzZS5jYWxsKG9iaik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2V4ZWN1dGVWYWxpZGF0b3JzKGNvbnRyb2wsIHZhbGlkYXRvcnMpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvcnMubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2KGNvbnRyb2wpOyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZXhlY3V0ZUFzeW5jVmFsaWRhdG9ycyhjb250cm9sLCB2YWxpZGF0b3JzKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3JzLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gdihjb250cm9sKTsgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gYXJyYXlPZkVycm9yc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gX21lcmdlRXJyb3JzKGFycmF5T2ZFcnJvcnMpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcmVzID0gYXJyYXlPZkVycm9ycy5yZWR1Y2UoZnVuY3Rpb24gKHJlcywgZXJyb3JzKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNQcmVzZW50KGVycm9ycykgPyBTdHJpbmdNYXBXcmFwcGVyLm1lcmdlKHJlcywgZXJyb3JzKSA6IHJlcztcbiAgICAgICAgfSwge30pO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzKS5sZW5ndGggPT09IDAgPyBudWxsIDogcmVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gcHJvdmlkZSBhIHtAbGluayBDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZm9yIGZvcm0gY29udHJvbHMuXG4gICAgICpcbiAgICAgKiBTZWUge0BsaW5rIERlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmb3IgaG93IHRvIGltcGxlbWVudCBvbmUuXG4gICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIE5HX1ZBTFVFX0FDQ0VTU09SID0gbmV3IF9hbmd1bGFyX2NvcmUuT3BhcXVlVG9rZW4oJ05nVmFsdWVBY2Nlc3NvcicpO1xuXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICBUaGUgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSB2YWx1ZSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgb24gYSBjaGVja2JveCBpbnB1dCBlbGVtZW50LlxuICAgICAgKiAqXG4gICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAqIGBgYFxuICAgICAgKiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlbWVtYmVyTG9naW5cIiBuZ01vZGVsPlxuICAgICAgKiBgYGBcbiAgICAgICogKlxuICAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAgICAgICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcihfcmVuZGVyZXIsIF9lbGVtZW50UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgPSBfZWxlbWVudFJlZjtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoXykgeyB9O1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLndyaXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjaGVja2VkJywgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uVG91Y2hlZCA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5zZXREaXNhYmxlZFN0YXRlID0gZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICAgICAgICB9O1xuICAgICAgICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFt0eXBlPWNoZWNrYm94XVtmb3JtQ29udHJvbE5hbWVdLGlucHV0W3R5cGU9Y2hlY2tib3hdW2Zvcm1Db250cm9sXSxpbnB1dFt0eXBlPWNoZWNrYm94XVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LmNoZWNrZWQpJywgJyhibHVyKSc6ICdvblRvdWNoZWQoKScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW0NIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRWxlbWVudFJlZiwgfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgcmV0dXJuIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3I7XG4gICAgfSgpKTtcblxuICAgIHZhciAvKiogQHR5cGUgez99ICovIERFRkFVTFRfVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIERlZmF1bHRWYWx1ZUFjY2Vzc29yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICBUaGUgZGVmYXVsdCBhY2Nlc3NvciBmb3Igd3JpdGluZyBhIHZhbHVlIGFuZCBsaXN0ZW5pbmcgdG8gY2hhbmdlcyB0aGF0IGlzIHVzZWQgYnkgdGhlXG4gICAgICAqIHtAbGluayBOZ01vZGVsfSwge0BsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfSwgYW5kIHtAbGluayBGb3JtQ29udHJvbE5hbWV9IGRpcmVjdGl2ZXMuXG4gICAgICAqICpcbiAgICAgICogIyMjIEV4YW1wbGVcbiAgICAgICogYGBgXG4gICAgICAqIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hRdWVyeVwiIG5nTW9kZWw+XG4gICAgICAqIGBgYFxuICAgICAgKiAqXG4gICAgICAqIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgRGVmYXVsdFZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAgICAgICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gRGVmYXVsdFZhbHVlQWNjZXNzb3IoX3JlbmRlcmVyLCBfZWxlbWVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKF8pIHsgfTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBEZWZhdWx0VmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUud3JpdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbm9ybWFsaXplZFZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBub3JtYWxpemVkVmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25Ub3VjaGVkID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIERlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5zZXREaXNhYmxlZFN0YXRlID0gZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICAgICAgICB9O1xuICAgICAgICBEZWZhdWx0VmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSlbZm9ybUNvbnRyb2xOYW1lXSx0ZXh0YXJlYVtmb3JtQ29udHJvbE5hbWVdLGlucHV0Om5vdChbdHlwZT1jaGVja2JveF0pW2Zvcm1Db250cm9sXSx0ZXh0YXJlYVtmb3JtQ29udHJvbF0saW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSlbbmdNb2RlbF0sdGV4dGFyZWFbbmdNb2RlbF0sW25nRGVmYXVsdENvbnRyb2xdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHZzYXZraW4gcmVwbGFjZSB0aGUgYWJvdmUgc2VsZWN0b3Igd2l0aCB0aGUgb25lIGJlbG93IGl0IG9uY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzMwMTEgaXMgaW1wbGVtZW50ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdG9yOiAnW25nQ29udHJvbF0sW25nTW9kZWxdLFtuZ0Zvcm1Db250cm9sXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICcoaW5wdXQpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJywgJyhibHVyKSc6ICdvblRvdWNoZWQoKScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW0RFRkFVTFRfVkFMVUVfQUNDRVNTT1JdXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRWxlbWVudFJlZiwgfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRWYWx1ZUFjY2Vzc29yO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbGlkYXRvcih2YWxpZGF0b3IpIHtcbiAgICAgICAgaWYgKCgodmFsaWRhdG9yKSkudmFsaWRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYykgeyByZXR1cm4gKCh2YWxpZGF0b3IpKS52YWxpZGF0ZShjKTsgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAodmFsaWRhdG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplQXN5bmNWYWxpZGF0b3IodmFsaWRhdG9yKSB7XG4gICAgICAgIGlmICgoKHZhbGlkYXRvcikpLnZhbGlkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHsgcmV0dXJuICgodmFsaWRhdG9yKSkudmFsaWRhdGUoYyk7IH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKHZhbGlkYXRvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBOVU1CRVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE51bWJlclZhbHVlQWNjZXNzb3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogIFRoZSBhY2Nlc3NvciBmb3Igd3JpdGluZyBhIG51bWJlciB2YWx1ZSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgdGhhdCBpcyB1c2VkIGJ5IHRoZVxuICAgICAgKiB7QGxpbmsgTmdNb2RlbH0sIHtAbGluayBGb3JtQ29udHJvbERpcmVjdGl2ZX0sIGFuZCB7QGxpbmsgRm9ybUNvbnRyb2xOYW1lfSBkaXJlY3RpdmVzLlxuICAgICAgKiAqXG4gICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAqIGBgYFxuICAgICAgKiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwiYWdlXCI+XG4gICAgICAqIGBgYFxuICAgICAqL1xuICAgIHZhciBOdW1iZXJWYWx1ZUFjY2Vzc29yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE51bWJlclZhbHVlQWNjZXNzb3IoX3JlbmRlcmVyLCBfZWxlbWVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKF8pIHsgfTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOdW1iZXJWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBUaGUgdmFsdWUgbmVlZHMgdG8gYmUgbm9ybWFsaXplZCBmb3IgSUU5LCBvdGhlcndpc2UgaXQgaXMgc2V0IHRvICdudWxsJyB3aGVuIG51bGxcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgbm9ybWFsaXplZFZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE51bWJlclZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHsgZm4odmFsdWUgPT0gJycgPyBudWxsIDogcGFyc2VGbG9hdCh2YWx1ZSkpOyB9O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTnVtYmVyVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPblRvdWNoZWQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTnVtYmVyVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuc2V0RGlzYWJsZWRTdGF0ZSA9IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtYmVyVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1udW1iZXJdW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbdHlwZT1udW1iZXJdW2Zvcm1Db250cm9sXSxpbnB1dFt0eXBlPW51bWJlcl1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyhpbnB1dCknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcoYmx1ciknOiAnb25Ub3VjaGVkKCknXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbTlVNQkVSX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE51bWJlclZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRWxlbWVudFJlZiwgfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgcmV0dXJuIE51bWJlclZhbHVlQWNjZXNzb3I7XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDIgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVuaW1wbGVtZW50ZWQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5pbXBsZW1lbnRlZCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiAgQSBiYXNlIGNsYXNzIHRoYXQgYWxsIGNvbnRyb2wgZGlyZWN0aXZlIGV4dGVuZC5cbiAgICAgICogSXQgYmluZHMgYSB7QGxpbmsgRm9ybUNvbnRyb2x9IG9iamVjdCB0byBhIERPTSBlbGVtZW50LlxuICAgICAgKiAqXG4gICAgICAqIFVzZWQgaW50ZXJuYWxseSBieSBBbmd1bGFyIGZvcm1zLlxuICAgICAgKiAqXG4gICAgICogQGFic3RyYWN0XG4gICAgICovXG4gICAgdmFyIE5nQ29udHJvbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQyKE5nQ29udHJvbCwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gTmdDb250cm9sKCkge1xuICAgICAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudmFsdWVBY2Nlc3NvciA9IG51bGw7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9yYXdWYWxpZGF0b3JzID0gW107XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdDb250cm9sLnByb3RvdHlwZSwgXCJ2YWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh1bmltcGxlbWVudGVkKCkpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nQ29udHJvbC5wcm90b3R5cGUsIFwiYXN5bmNWYWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh1bmltcGxlbWVudGVkKCkpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcGFyYW0gez99IG5ld1ZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ0NvbnRyb2wucHJvdG90eXBlLnZpZXdUb01vZGVsVXBkYXRlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IH07XG4gICAgICAgIHJldHVybiBOZ0NvbnRyb2w7XG4gICAgfShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUpKTtcblxuICAgIHZhciAvKiogQHR5cGUgez99ICovIFJBRElPX1ZBTFVFX0FDQ0VTU09SID0ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICBJbnRlcm5hbCBjbGFzcyB1c2VkIGJ5IEFuZ3VsYXIgdG8gdW5jaGVjayByYWRpbyBidXR0b25zIHdpdGggdGhlIG1hdGNoaW5nIG5hbWUuXG4gICAgICovXG4gICAgdmFyIFJhZGlvQ29udHJvbFJlZ2lzdHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gUmFkaW9Db250cm9sUmVnaXN0cnkoKSB7XG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICAgICAqIEBwYXJhbSB7P30gYWNjZXNzb3JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhZGlvQ29udHJvbFJlZ2lzdHJ5LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoY29udHJvbCwgYWNjZXNzb3IpIHtcbiAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycy5wdXNoKFtjb250cm9sLCBhY2Nlc3Nvcl0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBhY2Nlc3NvclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sUmVnaXN0cnkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChhY2Nlc3Nvcikge1xuICAgICAgICAgICAgZm9yICh2YXIgLyoqIEB0eXBlIHs/fSAqLyBpID0gdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FjY2Vzc29yc1tpXVsxXSA9PT0gYWNjZXNzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gYWNjZXNzb3JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhZGlvQ29udHJvbFJlZ2lzdHJ5LnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoYWNjZXNzb3IpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5faXNTYW1lR3JvdXAoYywgYWNjZXNzb3IpICYmIGNbMV0gIT09IGFjY2Vzc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNbMV0uZmlyZVVuY2hlY2soYWNjZXNzb3IudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sUGFpclxuICAgICAgICAgKiBAcGFyYW0gez99IGFjY2Vzc29yXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xSZWdpc3RyeS5wcm90b3R5cGUuX2lzU2FtZUdyb3VwID0gZnVuY3Rpb24gKGNvbnRyb2xQYWlyLCBhY2Nlc3Nvcikge1xuICAgICAgICAgICAgaWYgKCFjb250cm9sUGFpclswXS5jb250cm9sKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sUGFpclswXS5fcGFyZW50ID09PSBhY2Nlc3Nvci5fY29udHJvbC5fcGFyZW50ICYmXG4gICAgICAgICAgICAgICAgY29udHJvbFBhaXJbMV0ubmFtZSA9PT0gYWNjZXNzb3IubmFtZTtcbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9Db250cm9sUmVnaXN0cnkuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3RhYmxlIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xSZWdpc3RyeS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgICAgICByZXR1cm4gUmFkaW9Db250cm9sUmVnaXN0cnk7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiAgKlxuICAgICAgKiBVc2VkIGJ5IHtAbGluayBOZ01vZGVsfSwge0BsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfSwgYW5kIHtAbGluayBGb3JtQ29udHJvbE5hbWV9XG4gICAgICAqIHRvIGtlZXAgdGhlIHZpZXcgc3luY2VkIHdpdGggdGhlIHtAbGluayBGb3JtQ29udHJvbH0gbW9kZWwuXG4gICAgICAqICpcbiAgICAgICogKlxuICAgICAgKiBJZiB5b3UgaGF2ZSBpbXBvcnRlZCB0aGUge0BsaW5rIEZvcm1zTW9kdWxlfSBvciB0aGUge0BsaW5rIFJlYWN0aXZlRm9ybXNNb2R1bGV9LCB0aGlzXG4gICAgICAqIHZhbHVlIGFjY2Vzc29yIHdpbGwgYmUgYWN0aXZlIG9uIGFueSByYWRpbyBjb250cm9sIHRoYXQgaGFzIGEgZm9ybSBkaXJlY3RpdmUuIFlvdSBkb1xuICAgICAgKiAqKm5vdCoqIG5lZWQgdG8gYWRkIGEgc3BlY2lhbCBzZWxlY3RvciB0byBhY3RpdmF0ZSBpdC5cbiAgICAgICogKlxuICAgICAgKiAjIyMgSG93IHRvIHVzZSByYWRpbyBidXR0b25zIHdpdGggZm9ybSBkaXJlY3RpdmVzXG4gICAgICAqICpcbiAgICAgICogVG8gdXNlIHJhZGlvIGJ1dHRvbnMgaW4gYSB0ZW1wbGF0ZS1kcml2ZW4gZm9ybSwgeW91J2xsIHdhbnQgdG8gZW5zdXJlIHRoYXQgcmFkaW8gYnV0dG9uc1xuICAgICAgKiBpbiB0aGUgc2FtZSBncm91cCBoYXZlIHRoZSBzYW1lIGBuYW1lYCBhdHRyaWJ1dGUuICBSYWRpbyBidXR0b25zIHdpdGggZGlmZmVyZW50IGBuYW1lYFxuICAgICAgKiBhdHRyaWJ1dGVzIGRvIG5vdCBhZmZlY3QgZWFjaCBvdGhlci5cbiAgICAgICogKlxuICAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvcmFkaW9CdXR0b25zL3JhZGlvX2J1dHRvbl9leGFtcGxlLnRzIHJlZ2lvbj0nVGVtcGxhdGVEcml2ZW4nfVxuICAgICAgKiAqXG4gICAgICAqIFdoZW4gdXNpbmcgcmFkaW8gYnV0dG9ucyBpbiBhIHJlYWN0aXZlIGZvcm0sIHJhZGlvIGJ1dHRvbnMgaW4gdGhlIHNhbWUgZ3JvdXAgc2hvdWxkIGhhdmUgdGhlXG4gICAgICAqIHNhbWUgYGZvcm1Db250cm9sTmFtZWAuIFlvdSBjYW4gYWxzbyBhZGQgYSBgbmFtZWAgYXR0cmlidXRlLCBidXQgaXQncyBvcHRpb25hbC5cbiAgICAgICogKlxuICAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvcmVhY3RpdmVSYWRpb0J1dHRvbnMvcmVhY3RpdmVfcmFkaW9fYnV0dG9uX2V4YW1wbGUudHMgcmVnaW9uPSdSZWFjdGl2ZSd9XG4gICAgICAqICpcbiAgICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgICogKlxuICAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAgICAgICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICAgICAgICAgKiBAcGFyYW0gez99IF9yZWdpc3RyeVxuICAgICAgICAgKiBAcGFyYW0gez99IF9pbmplY3RvclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvcihfcmVuZGVyZXIsIF9lbGVtZW50UmVmLCBfcmVnaXN0cnksIF9pbmplY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RyeSA9IF9yZWdpc3RyeTtcbiAgICAgICAgICAgIHRoaXMuX2luamVjdG9yID0gX2luamVjdG9yO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250cm9sID0gdGhpcy5faW5qZWN0b3IuZ2V0KE5nQ29udHJvbCk7XG4gICAgICAgICAgICB0aGlzLl9jaGVja05hbWUoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdHJ5LmFkZCh0aGlzLl9jb250cm9sLCB0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fcmVnaXN0cnkucmVtb3ZlKHRoaXMpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUud3JpdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB2YWx1ZSA9PT0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjaGVja2VkJywgdGhpcy5fc3RhdGUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuX2ZuID0gZm47XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZuKF90aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVnaXN0cnkuc2VsZWN0KF90aGlzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5maXJlVW5jaGVjayA9IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLndyaXRlVmFsdWUodmFsdWUpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPblRvdWNoZWQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuc2V0RGlzYWJsZWRTdGF0ZSA9IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fY2hlY2tOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubmFtZSAmJiB0aGlzLmZvcm1Db250cm9sTmFtZSAmJiB0aGlzLm5hbWUgIT09IHRoaXMuZm9ybUNvbnRyb2xOYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGhyb3dOYW1lRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5uYW1lICYmIHRoaXMuZm9ybUNvbnRyb2xOYW1lKVxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMuZm9ybUNvbnRyb2xOYW1lO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl90aHJvd05hbWVFcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgIElmIHlvdSBkZWZpbmUgYm90aCBhIG5hbWUgYW5kIGEgZm9ybUNvbnRyb2xOYW1lIGF0dHJpYnV0ZSBvbiB5b3VyIHJhZGlvIGJ1dHRvbiwgdGhlaXIgdmFsdWVzXFxuICAgICAgbXVzdCBtYXRjaC4gRXg6IDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJmb29kXFxcIiBuYW1lPVxcXCJmb29kXFxcIj5cXG4gICAgXCIpO1xuICAgICAgICB9O1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFt0eXBlPXJhZGlvXVtmb3JtQ29udHJvbE5hbWVdLGlucHV0W3R5cGU9cmFkaW9dW2Zvcm1Db250cm9sXSxpbnB1dFt0eXBlPXJhZGlvXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgpJywgJyhibHVyKSc6ICdvblRvdWNoZWQoKScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW1JBRElPX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRWxlbWVudFJlZiwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogUmFkaW9Db250cm9sUmVnaXN0cnksIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0b3IsIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbmFtZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQgfSxdLFxuICAgICAgICAgICAgJ2Zvcm1Db250cm9sTmFtZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQgfSxdLFxuICAgICAgICAgICAgJ3ZhbHVlJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuICAgIH0oKSk7XG5cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBSQU5HRV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gUmFuZ2VWYWx1ZUFjY2Vzc29yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICBUaGUgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSByYW5nZSB2YWx1ZSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgdGhhdCBpcyB1c2VkIGJ5IHRoZVxuICAgICAgKiB7QGxpbmsgTmdNb2RlbH0sIHtAbGluayBGb3JtQ29udHJvbERpcmVjdGl2ZX0sIGFuZCB7QGxpbmsgRm9ybUNvbnRyb2xOYW1lfSBkaXJlY3RpdmVzLlxuICAgICAgKiAqXG4gICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAqIGBgYFxuICAgICAgKiA8aW5wdXQgdHlwZT1cInJhbmdlXCIgWyhuZ01vZGVsKV09XCJhZ2VcIiA+XG4gICAgICAqIGBgYFxuICAgICAqL1xuICAgIHZhciBSYW5nZVZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAgICAgICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gUmFuZ2VWYWx1ZUFjY2Vzc29yKF9yZW5kZXJlciwgX2VsZW1lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChfKSB7IH07XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFuZ2VWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYW5nZVZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHsgZm4odmFsdWUgPT0gJycgPyBudWxsIDogcGFyc2VGbG9hdCh2YWx1ZSkpOyB9O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFuZ2VWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uVG91Y2hlZCA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYW5nZVZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnNldERpc2FibGVkU3RhdGUgPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICAgIH07XG4gICAgICAgIFJhbmdlVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1yYW5nZV1bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPXJhbmdlXVtmb3JtQ29udHJvbF0saW5wdXRbdHlwZT1yYW5nZV1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyhpbnB1dCknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcoYmx1ciknOiAnb25Ub3VjaGVkKCknXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbUkFOR0VfVkFMVUVfQUNDRVNTT1JdXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgUmFuZ2VWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIHJldHVybiBSYW5nZVZhbHVlQWNjZXNzb3I7XG4gICAgfSgpKTtcblxuICAgIHZhciAvKiogQHR5cGUgez99ICovIFNFTEVDVF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBpZFxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9idWlsZFZhbHVlU3RyaW5nKGlkLCB2YWx1ZSkge1xuICAgICAgICBpZiAoaWQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBcIlwiICsgdmFsdWU7XG4gICAgICAgIGlmICghaXNQcmltaXRpdmUodmFsdWUpKVxuICAgICAgICAgICAgdmFsdWUgPSAnT2JqZWN0JztcbiAgICAgICAgcmV0dXJuIChpZCArIFwiOiBcIiArIHZhbHVlKS5zbGljZSgwLCA1MCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVTdHJpbmdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9leHRyYWN0SWQodmFsdWVTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlU3RyaW5nLnNwbGl0KCc6JylbMF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqICAqXG4gICAgICAqIFVzZWQgYnkge0BsaW5rIE5nTW9kZWx9LCB7QGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge0BsaW5rIEZvcm1Db250cm9sTmFtZX1cbiAgICAgICogdG8ga2VlcCB0aGUgdmlldyBzeW5jZWQgd2l0aCB0aGUge0BsaW5rIEZvcm1Db250cm9sfSBtb2RlbC5cbiAgICAgICogKlxuICAgICAgKiAqXG4gICAgICAqIElmIHlvdSBoYXZlIGltcG9ydGVkIHRoZSB7QGxpbmsgRm9ybXNNb2R1bGV9IG9yIHRoZSB7QGxpbmsgUmVhY3RpdmVGb3Jtc01vZHVsZX0sIHRoaXNcbiAgICAgICogdmFsdWUgYWNjZXNzb3Igd2lsbCBiZSBhY3RpdmUgb24gYW55IHNlbGVjdCBjb250cm9sIHRoYXQgaGFzIGEgZm9ybSBkaXJlY3RpdmUuIFlvdSBkb1xuICAgICAgKiAqKm5vdCoqIG5lZWQgdG8gYWRkIGEgc3BlY2lhbCBzZWxlY3RvciB0byBhY3RpdmF0ZSBpdC5cbiAgICAgICogKlxuICAgICAgKiAjIyMgSG93IHRvIHVzZSBzZWxlY3QgY29udHJvbHMgd2l0aCBmb3JtIGRpcmVjdGl2ZXNcbiAgICAgICogKlxuICAgICAgKiBUbyB1c2UgYSBzZWxlY3QgaW4gYSB0ZW1wbGF0ZS1kcml2ZW4gZm9ybSwgc2ltcGx5IGFkZCBhbiBgbmdNb2RlbGAgYW5kIGEgYG5hbWVgXG4gICAgICAqIGF0dHJpYnV0ZSB0byB0aGUgbWFpbiBgPHNlbGVjdD5gIHRhZy5cbiAgICAgICogKlxuICAgICAgKiBJZiB5b3VyIG9wdGlvbiB2YWx1ZXMgYXJlIHNpbXBsZSBzdHJpbmdzLCB5b3UgY2FuIGJpbmQgdG8gdGhlIG5vcm1hbCBgdmFsdWVgIHByb3BlcnR5XG4gICAgICAqIG9uIHRoZSBvcHRpb24uICBJZiB5b3VyIG9wdGlvbiB2YWx1ZXMgaGFwcGVuIHRvIGJlIG9iamVjdHMgKGFuZCB5b3UnZCBsaWtlIHRvIHNhdmUgdGhlXG4gICAgICAqIHNlbGVjdGlvbiBpbiB5b3VyIGZvcm0gYXMgYW4gb2JqZWN0KSwgdXNlIGBuZ1ZhbHVlYCBpbnN0ZWFkOlxuICAgICAgKiAqXG4gICAgICAqIHtAZXhhbXBsZSBmb3Jtcy90cy9zZWxlY3RDb250cm9sL3NlbGVjdF9jb250cm9sX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAgKiAqXG4gICAgICAqIEluIHJlYWN0aXZlIGZvcm1zLCB5b3UnbGwgYWxzbyB3YW50IHRvIGFkZCB5b3VyIGZvcm0gZGlyZWN0aXZlIChgZm9ybUNvbnRyb2xOYW1lYCBvclxuICAgICAgKiBgZm9ybUNvbnRyb2xgKSBvbiB0aGUgbWFpbiBgPHNlbGVjdD5gIHRhZy4gTGlrZSBpbiB0aGUgZm9ybWVyIGV4YW1wbGUsIHlvdSBoYXZlIHRoZVxuICAgICAgKiBjaG9pY2Ugb2YgYmluZGluZyB0byB0aGUgIGB2YWx1ZWAgb3IgYG5nVmFsdWVgIHByb3BlcnR5IG9uIHRoZSBzZWxlY3QncyBvcHRpb25zLlxuICAgICAgKiAqXG4gICAgICAqIHtAZXhhbXBsZSBmb3Jtcy90cy9yZWFjdGl2ZVNlbGVjdENvbnRyb2wvcmVhY3RpdmVfc2VsZWN0X2NvbnRyb2xfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICAqICpcbiAgICAgICogTm90ZTogV2UgbGlzdGVuIHRvIHRoZSAnY2hhbmdlJyBldmVudCBiZWNhdXNlICdpbnB1dCcgZXZlbnRzIGFyZW4ndCBmaXJlZFxuICAgICAgKiBmb3Igc2VsZWN0cyBpbiBGaXJlZm94IGFuZCBJRTpcbiAgICAgICogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTAyNDM1MFxuICAgICAgKiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy80NjYwMDQ1L1xuICAgICAgKiAqXG4gICAgICAqICogKipucG0gcGFja2FnZSoqOiBgQGFuZ3VsYXIvZm9ybXNgXG4gICAgICAqICpcbiAgICAgKi9cbiAgICB2YXIgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAgICAgICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IoX3JlbmRlcmVyLCBfZWxlbWVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25NYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9pZENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChfKSB7IH07XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLndyaXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbHVlU3RyaW5nID0gX2J1aWxkVmFsdWVTdHJpbmcodGhpcy5fZ2V0T3B0aW9uSWQodmFsdWUpLCB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB2YWx1ZVN0cmluZyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWVTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy52YWx1ZSA9IHZhbHVlU3RyaW5nO1xuICAgICAgICAgICAgICAgIGZuKF90aGlzLl9nZXRPcHRpb25WYWx1ZSh2YWx1ZVN0cmluZykpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uVG91Y2hlZCA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuc2V0RGlzYWJsZWRTdGF0ZSA9IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX3JlZ2lzdGVyT3B0aW9uID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHRoaXMuX2lkQ291bnRlcisrKS50b1N0cmluZygpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9nZXRPcHRpb25JZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IEFycmF5LmZyb20odGhpcy5fb3B0aW9uTWFwLmtleXMoKSk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIGlmIChsb29zZUlkZW50aWNhbCh0aGlzLl9vcHRpb25NYXAuZ2V0KGlkKSwgdmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVTdHJpbmdcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fZ2V0T3B0aW9uVmFsdWUgPSBmdW5jdGlvbiAodmFsdWVTdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGlkID0gX2V4dHJhY3RJZCh2YWx1ZVN0cmluZyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uTWFwLmhhcyhpZCkgPyB0aGlzLl9vcHRpb25NYXAuZ2V0KGlkKSA6IHZhbHVlU3RyaW5nO1xuICAgICAgICB9O1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0Om5vdChbbXVsdGlwbGVdKVtmb3JtQ29udHJvbE5hbWVdLHNlbGVjdDpub3QoW211bHRpcGxlXSlbZm9ybUNvbnRyb2xdLHNlbGVjdDpub3QoW211bHRpcGxlXSlbbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbU0VMRUNUX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIHJldHVybiBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgICB9KCkpO1xuICAgIC8qKlxuICAgICAqICAqXG4gICAgICAqICpcbiAgICAgICogU2VlIGRvY3MgZm9yIHtAbGluayBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZm9yIHVzYWdlIGV4YW1wbGVzLlxuICAgICAgKiAqXG4gICAgICovXG4gICAgdmFyIE5nU2VsZWN0T3B0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRcbiAgICAgICAgICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAgICAgICAgICogQHBhcmFtIHs/fSBfc2VsZWN0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBOZ1NlbGVjdE9wdGlvbihfZWxlbWVudCwgX3JlbmRlcmVyLCBfc2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50ID0gX2VsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdCA9IF9zZWxlY3Q7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0KVxuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLl9zZWxlY3QuX3JlZ2lzdGVyT3B0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nU2VsZWN0T3B0aW9uLnByb3RvdHlwZSwgXCJuZ1ZhbHVlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0ID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3QuX29wdGlvbk1hcC5zZXQodGhpcy5pZCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldEVsZW1lbnRWYWx1ZShfYnVpbGRWYWx1ZVN0cmluZyh0aGlzLmlkLCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdC53cml0ZVZhbHVlKHRoaXMuX3NlbGVjdC52YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nU2VsZWN0T3B0aW9uLnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0RWxlbWVudFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ1NlbGVjdE9wdGlvbi5wcm90b3R5cGUuX3NldEVsZW1lbnRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nU2VsZWN0T3B0aW9uLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3QuX29wdGlvbk1hcC5kZWxldGUodGhpcy5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTmdTZWxlY3RPcHRpb24uZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnb3B0aW9uJyB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE5nU2VsZWN0T3B0aW9uLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ib3N0IH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICBOZ1NlbGVjdE9wdGlvbi5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICduZ1ZhbHVlJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWyduZ1ZhbHVlJyxdIH0sXSxcbiAgICAgICAgICAgICd2YWx1ZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsndmFsdWUnLF0gfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTmdTZWxlY3RPcHRpb247XG4gICAgfSgpKTtcblxuICAgIHZhciAvKiogQHR5cGUgez99ICovIFNFTEVDVF9NVUxUSVBMRV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGlkXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2J1aWxkVmFsdWVTdHJpbmckMShpZCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGlkID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gXCJcIiArIHZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHZhbHVlID0gXCInXCIgKyB2YWx1ZSArIFwiJ1wiO1xuICAgICAgICBpZiAoIWlzUHJpbWl0aXZlKHZhbHVlKSlcbiAgICAgICAgICAgIHZhbHVlID0gJ09iamVjdCc7XG4gICAgICAgIHJldHVybiAoaWQgKyBcIjogXCIgKyB2YWx1ZSkuc2xpY2UoMCwgNTApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlU3RyaW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZXh0cmFjdElkJDEodmFsdWVTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlU3RyaW5nLnNwbGl0KCc6JylbMF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqICBUaGUgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSB2YWx1ZSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgb24gYSBzZWxlY3QgZWxlbWVudC5cbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IoX3JlbmRlcmVyLCBfZWxlbWVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25NYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9pZENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChfKSB7IH07XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUud3JpdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9wdGlvblNlbGVjdGVkU3RhdGVTZXR0ZXI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IHZhbHVlcyB0byBpZHNcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpZHNfMSA9IHZhbHVlLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gX3RoaXMuX2dldE9wdGlvbklkKHYpOyB9KTtcbiAgICAgICAgICAgICAgICBvcHRpb25TZWxlY3RlZFN0YXRlU2V0dGVyID0gZnVuY3Rpb24gKG9wdCwgbykgeyBvcHQuX3NldFNlbGVjdGVkKGlkc18xLmluZGV4T2Yoby50b1N0cmluZygpKSA+IC0xKTsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdGlvblNlbGVjdGVkU3RhdGVTZXR0ZXIgPSBmdW5jdGlvbiAob3B0LCBvKSB7IG9wdC5fc2V0U2VsZWN0ZWQoZmFsc2UpOyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fb3B0aW9uTWFwLmZvckVhY2gob3B0aW9uU2VsZWN0ZWRTdGF0ZVNldHRlcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChfKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc2VsZWN0ZWQgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoXy5oYXNPd25Qcm9wZXJ0eSgnc2VsZWN0ZWRPcHRpb25zJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb3B0aW9ucyA9IF8uc2VsZWN0ZWRPcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb3B0ID0gb3B0aW9ucy5pdGVtKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdmFsID0gX3RoaXMuX2dldE9wdGlvblZhbHVlKG9wdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9wdGlvbnMgPSAoXy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgLyoqIEB0eXBlIHs/fSAqLyBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9wdCA9IG9wdGlvbnMuaXRlbShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHQuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWwgPSBfdGhpcy5fZ2V0T3B0aW9uVmFsdWUob3B0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMudmFsdWUgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgICAgICBmbihzZWxlY3RlZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPblRvdWNoZWQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuc2V0RGlzYWJsZWRTdGF0ZSA9IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9yZWdpc3Rlck9wdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaWQgPSAodGhpcy5faWRDb3VudGVyKyspLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25NYXAuc2V0KGlkLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fZ2V0T3B0aW9uSWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBBcnJheS5mcm9tKHRoaXMuX29wdGlvbk1hcC5rZXlzKCkpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBpZiAobG9vc2VJZGVudGljYWwodGhpcy5fb3B0aW9uTWFwLmdldChpZCkuX3ZhbHVlLCB2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVN0cmluZ1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2dldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gKHZhbHVlU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpZCA9IF9leHRyYWN0SWQkMSh2YWx1ZVN0cmluZyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uTWFwLmhhcyhpZCkgPyB0aGlzLl9vcHRpb25NYXAuZ2V0KGlkKS5fdmFsdWUgOiB2YWx1ZVN0cmluZztcbiAgICAgICAgfTtcbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0W211bHRpcGxlXVtmb3JtQ29udHJvbE5hbWVdLHNlbGVjdFttdWx0aXBsZV1bZm9ybUNvbnRyb2xdLHNlbGVjdFttdWx0aXBsZV1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldCknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbU0VMRUNUX01VTFRJUExFX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRWxlbWVudFJlZiwgfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgcmV0dXJuIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3I7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiAgTWFya3MgYDxvcHRpb24+YCBhcyBkeW5hbWljLCBzbyBBbmd1bGFyIGNhbiBiZSBub3RpZmllZCB3aGVuIG9wdGlvbnMgY2hhbmdlLlxuICAgICAgKiAqXG4gICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAqICpcbiAgICAgICogYGBgXG4gICAgICAqIDxzZWxlY3QgbXVsdGlwbGUgbmFtZT1cImNpdHlcIiBuZ01vZGVsPlxuICAgICAgKiA8b3B0aW9uICpuZ0Zvcj1cImxldCBjIG9mIGNpdGllc1wiIFt2YWx1ZV09XCJjXCI+PC9vcHRpb24+XG4gICAgICAqIDwvc2VsZWN0PlxuICAgICAgKiBgYGBcbiAgICAgKi9cbiAgICB2YXIgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IF9lbGVtZW50XG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3NlbGVjdFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gTmdTZWxlY3RNdWx0aXBsZU9wdGlvbihfZWxlbWVudCwgX3JlbmRlcmVyLCBfc2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50ID0gX2VsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdCA9IF9zZWxlY3Q7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMuX3NlbGVjdC5fcmVnaXN0ZXJPcHRpb24odGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLCBcIm5nVmFsdWVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3QgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0RWxlbWVudFZhbHVlKF9idWlsZFZhbHVlU3RyaW5nJDEodGhpcy5pZCwgdmFsdWUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUoX2J1aWxkVmFsdWVTdHJpbmckMSh0aGlzLmlkLCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0RWxlbWVudFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLl9zZXRFbGVtZW50VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gc2VsZWN0ZWRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLl9zZXRTZWxlY3RlZCA9IGZ1bmN0aW9uIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdC5fb3B0aW9uTWFwLmRlbGV0ZSh0aGlzLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ29wdGlvbicgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkhvc3QgfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbmdWYWx1ZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnbmdWYWx1ZScsXSB9LF0sXG4gICAgICAgICAgICAndmFsdWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ3ZhbHVlJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE5nU2VsZWN0TXVsdGlwbGVPcHRpb247XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb250cm9sUGF0aChuYW1lLCBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5wYXRoLmNvbmNhdChbbmFtZV0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0VXBDb250cm9sKGNvbnRyb2wsIGRpcikge1xuICAgICAgICBpZiAoIWNvbnRyb2wpXG4gICAgICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdDYW5ub3QgZmluZCBjb250cm9sIHdpdGgnKTtcbiAgICAgICAgaWYgKCFkaXIudmFsdWVBY2Nlc3NvcilcbiAgICAgICAgICAgIF90aHJvd0Vycm9yKGRpciwgJ05vIHZhbHVlIGFjY2Vzc29yIGZvciBmb3JtIGNvbnRyb2wgd2l0aCcpO1xuICAgICAgICBjb250cm9sLnZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZShbY29udHJvbC52YWxpZGF0b3IsIGRpci52YWxpZGF0b3JdKTtcbiAgICAgICAgY29udHJvbC5hc3luY1ZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jKFtjb250cm9sLmFzeW5jVmFsaWRhdG9yLCBkaXIuYXN5bmNWYWxpZGF0b3JdKTtcbiAgICAgICAgZGlyLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZShjb250cm9sLnZhbHVlKTtcbiAgICAgICAgLy8gdmlldyAtPiBtb2RlbFxuICAgICAgICBkaXIudmFsdWVBY2Nlc3Nvci5yZWdpc3Rlck9uQ2hhbmdlKGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgZGlyLnZpZXdUb01vZGVsVXBkYXRlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgICAgIGNvbnRyb2wuc2V0VmFsdWUobmV3VmFsdWUsIHsgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlOiBmYWxzZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRvdWNoZWRcbiAgICAgICAgZGlyLnZhbHVlQWNjZXNzb3IucmVnaXN0ZXJPblRvdWNoZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7IH0pO1xuICAgICAgICBjb250cm9sLnJlZ2lzdGVyT25DaGFuZ2UoZnVuY3Rpb24gKG5ld1ZhbHVlLCBlbWl0TW9kZWxFdmVudCkge1xuICAgICAgICAgICAgLy8gY29udHJvbCAtPiB2aWV3XG4gICAgICAgICAgICBkaXIudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIC8vIGNvbnRyb2wgLT4gbmdNb2RlbFxuICAgICAgICAgICAgaWYgKGVtaXRNb2RlbEV2ZW50KVxuICAgICAgICAgICAgICAgIGRpci52aWV3VG9Nb2RlbFVwZGF0ZShuZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZGlyLnZhbHVlQWNjZXNzb3Iuc2V0RGlzYWJsZWRTdGF0ZSkge1xuICAgICAgICAgICAgY29udHJvbC5yZWdpc3Rlck9uRGlzYWJsZWRDaGFuZ2UoZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHsgZGlyLnZhbHVlQWNjZXNzb3Iuc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmUtcnVuIHZhbGlkYXRpb24gd2hlbiB2YWxpZGF0b3IgYmluZGluZyBjaGFuZ2VzLCBlLmcuIG1pbmxlbmd0aD0zIC0+IG1pbmxlbmd0aD00XG4gICAgICAgIGRpci5fcmF3VmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGlmICgoKHZhbGlkYXRvcikpLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UpXG4gICAgICAgICAgICAgICAgKCh2YWxpZGF0b3IpKS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRpci5fcmF3QXN5bmNWYWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgaWYgKCgodmFsaWRhdG9yKSkucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSlcbiAgICAgICAgICAgICAgICAoKHZhbGlkYXRvcikpLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNsZWFuVXBDb250cm9sKGNvbnRyb2wsIGRpcikge1xuICAgICAgICBkaXIudmFsdWVBY2Nlc3Nvci5yZWdpc3Rlck9uQ2hhbmdlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9ub0NvbnRyb2xFcnJvcihkaXIpOyB9KTtcbiAgICAgICAgZGlyLnZhbHVlQWNjZXNzb3IucmVnaXN0ZXJPblRvdWNoZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX25vQ29udHJvbEVycm9yKGRpcik7IH0pO1xuICAgICAgICBkaXIuX3Jhd1ZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRpci5fcmF3QXN5bmNWYWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvci5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY29udHJvbClcbiAgICAgICAgICAgIGNvbnRyb2wuX2NsZWFyQ2hhbmdlRm5zKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRVcEZvcm1Db250YWluZXIoY29udHJvbCwgZGlyKSB7XG4gICAgICAgIGlmIChpc0JsYW5rKGNvbnRyb2wpKVxuICAgICAgICAgICAgX3Rocm93RXJyb3IoZGlyLCAnQ2Fubm90IGZpbmQgY29udHJvbCB3aXRoJyk7XG4gICAgICAgIGNvbnRyb2wudmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlKFtjb250cm9sLnZhbGlkYXRvciwgZGlyLnZhbGlkYXRvcl0pO1xuICAgICAgICBjb250cm9sLmFzeW5jVmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlQXN5bmMoW2NvbnRyb2wuYXN5bmNWYWxpZGF0b3IsIGRpci5hc3luY1ZhbGlkYXRvcl0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gX25vQ29udHJvbEVycm9yKGRpcikge1xuICAgICAgICByZXR1cm4gX3Rocm93RXJyb3IoZGlyLCAnVGhlcmUgaXMgbm8gRm9ybUNvbnRyb2wgaW5zdGFuY2UgYXR0YWNoZWQgdG8gZm9ybSBjb250cm9sIGVsZW1lbnQgd2l0aCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEBwYXJhbSB7P30gbWVzc2FnZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gX3Rocm93RXJyb3IoZGlyLCBtZXNzYWdlKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG1lc3NhZ2VFbmQ7XG4gICAgICAgIGlmIChkaXIucGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBtZXNzYWdlRW5kID0gXCJwYXRoOiAnXCIgKyBkaXIucGF0aC5qb2luKCcgLT4gJykgKyBcIidcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXIucGF0aFswXSkge1xuICAgICAgICAgICAgbWVzc2FnZUVuZCA9IFwibmFtZTogJ1wiICsgZGlyLnBhdGggKyBcIidcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2VFbmQgPSAndW5zcGVjaWZpZWQgbmFtZSBhdHRyaWJ1dGUnO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlICsgXCIgXCIgKyBtZXNzYWdlRW5kKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb21wb3NlVmFsaWRhdG9ycyh2YWxpZGF0b3JzKSB7XG4gICAgICAgIHJldHVybiBpc1ByZXNlbnQodmFsaWRhdG9ycykgPyBWYWxpZGF0b3JzLmNvbXBvc2UodmFsaWRhdG9ycy5tYXAobm9ybWFsaXplVmFsaWRhdG9yKSkgOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModmFsaWRhdG9ycykge1xuICAgICAgICByZXR1cm4gaXNQcmVzZW50KHZhbGlkYXRvcnMpID8gVmFsaWRhdG9ycy5jb21wb3NlQXN5bmModmFsaWRhdG9ycy5tYXAobm9ybWFsaXplQXN5bmNWYWxpZGF0b3IpKSA6XG4gICAgICAgICAgICBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gez99IHZpZXdNb2RlbFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdmlld01vZGVsKSB7XG4gICAgICAgIGlmICghY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbW9kZWwnKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY2hhbmdlID0gY2hhbmdlc1snbW9kZWwnXTtcbiAgICAgICAgaWYgKGNoYW5nZS5pc0ZpcnN0Q2hhbmdlKCkpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuICFsb29zZUlkZW50aWNhbCh2aWV3TW9kZWwsIGNoYW5nZS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBCVUlMVElOX0FDQ0VTU09SUyA9IFtcbiAgICAgICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgUmFuZ2VWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBOdW1iZXJWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICBdO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVBY2Nlc3NvclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNCdWlsdEluQWNjZXNzb3IodmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICByZXR1cm4gQlVJTFRJTl9BQ0NFU1NPUlMuc29tZShmdW5jdGlvbiAoYSkgeyByZXR1cm4gdmFsdWVBY2Nlc3Nvci5jb25zdHJ1Y3RvciA9PT0gYTsgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZUFjY2Vzc29yc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2VsZWN0VmFsdWVBY2Nlc3NvcihkaXIsIHZhbHVlQWNjZXNzb3JzKSB7XG4gICAgICAgIGlmICghdmFsdWVBY2Nlc3NvcnMpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZGVmYXVsdEFjY2Vzc29yO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBidWlsdGluQWNjZXNzb3I7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGN1c3RvbUFjY2Vzc29yO1xuICAgICAgICB2YWx1ZUFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICBpZiAodi5jb25zdHJ1Y3RvciA9PT0gRGVmYXVsdFZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0QWNjZXNzb3IgPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNCdWlsdEluQWNjZXNzb3IodikpIHtcbiAgICAgICAgICAgICAgICBpZiAoYnVpbHRpbkFjY2Vzc29yKVxuICAgICAgICAgICAgICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdNb3JlIHRoYW4gb25lIGJ1aWx0LWluIHZhbHVlIGFjY2Vzc29yIG1hdGNoZXMgZm9ybSBjb250cm9sIHdpdGgnKTtcbiAgICAgICAgICAgICAgICBidWlsdGluQWNjZXNzb3IgPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbUFjY2Vzc29yKVxuICAgICAgICAgICAgICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdNb3JlIHRoYW4gb25lIGN1c3RvbSB2YWx1ZSBhY2Nlc3NvciBtYXRjaGVzIGZvcm0gY29udHJvbCB3aXRoJyk7XG4gICAgICAgICAgICAgICAgY3VzdG9tQWNjZXNzb3IgPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGN1c3RvbUFjY2Vzc29yKVxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbUFjY2Vzc29yO1xuICAgICAgICBpZiAoYnVpbHRpbkFjY2Vzc29yKVxuICAgICAgICAgICAgcmV0dXJuIGJ1aWx0aW5BY2Nlc3NvcjtcbiAgICAgICAgaWYgKGRlZmF1bHRBY2Nlc3NvcilcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0QWNjZXNzb3I7XG4gICAgICAgIF90aHJvd0Vycm9yKGRpciwgJ05vIHZhbGlkIHZhbHVlIGFjY2Vzc29yIGZvciBmb3JtIGNvbnRyb2wgd2l0aCcpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICBUaGlzIGlzIGEgYmFzZSBjbGFzcyBmb3IgY29kZSBzaGFyZWQgYmV0d2VlbiB7QGxpbmsgTmdNb2RlbEdyb3VwfSBhbmQge0BsaW5rIEZvcm1Hcm91cE5hbWV9LlxuICAgICAgKiAqXG4gICAgICovXG4gICAgdmFyIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSgpIHtcbiAgICAgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tQYXJlbnRUeXBlKCk7XG4gICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUuYWRkRm9ybUdyb3VwKHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1EaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlRm9ybUdyb3VwKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgR2V0IHRoZSB7QGxpbmsgRm9ybUdyb3VwfSBiYWNraW5nIHRoaXMgYmluZGluZy5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5mb3JtRGlyZWN0aXZlLmdldEZvcm1Hcm91cCh0aGlzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqICBHZXQgdGhlIHBhdGggdG8gdGhpcyBjb250cm9sIGdyb3VwLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb250cm9sUGF0aCh0aGlzLm5hbWUsIHRoaXMuX3BhcmVudCk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcImZvcm1EaXJlY3RpdmVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgR2V0IHRoZSB7QGxpbmsgRm9ybX0gdG8gd2hpY2ggdGhpcyBncm91cCBiZWxvbmdzLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wYXJlbnQgPyB0aGlzLl9wYXJlbnQuZm9ybURpcmVjdGl2ZSA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcInZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fdmFsaWRhdG9ycyk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcImFzeW5jVmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX2FzeW5jVmFsaWRhdG9ycyk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fY2hlY2tQYXJlbnRUeXBlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICByZXR1cm4gQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmU7XG4gICAgfShDb250cm9sQ29udGFpbmVyKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIEFic3RyYWN0Q29udHJvbFN0YXR1cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBBYnN0cmFjdENvbnRyb2xTdGF0dXMoY2QpIHtcbiAgICAgICAgICAgIHRoaXMuX2NkID0gY2Q7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbFN0YXR1cy5wcm90b3R5cGUsIFwibmdDbGFzc1VudG91Y2hlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wudW50b3VjaGVkIDogZmFsc2U7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZSwgXCJuZ0NsYXNzVG91Y2hlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wudG91Y2hlZCA6IGZhbHNlOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbFN0YXR1cy5wcm90b3R5cGUsIFwibmdDbGFzc1ByaXN0aW5lXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC5wcmlzdGluZSA6IGZhbHNlOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbFN0YXR1cy5wcm90b3R5cGUsIFwibmdDbGFzc0RpcnR5XCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC5kaXJ0eSA6IGZhbHNlOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbFN0YXR1cy5wcm90b3R5cGUsIFwibmdDbGFzc1ZhbGlkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC52YWxpZCA6IGZhbHNlOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbFN0YXR1cy5wcm90b3R5cGUsIFwibmdDbGFzc0ludmFsaWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLmludmFsaWQgOiBmYWxzZTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLCBcIm5nQ2xhc3NQZW5kaW5nXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC5wZW5kaW5nIDogZmFsc2U7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gQWJzdHJhY3RDb250cm9sU3RhdHVzO1xuICAgIH0oKSk7XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbmdDb250cm9sU3RhdHVzSG9zdCA9IHtcbiAgICAgICAgJ1tjbGFzcy5uZy11bnRvdWNoZWRdJzogJ25nQ2xhc3NVbnRvdWNoZWQnLFxuICAgICAgICAnW2NsYXNzLm5nLXRvdWNoZWRdJzogJ25nQ2xhc3NUb3VjaGVkJyxcbiAgICAgICAgJ1tjbGFzcy5uZy1wcmlzdGluZV0nOiAnbmdDbGFzc1ByaXN0aW5lJyxcbiAgICAgICAgJ1tjbGFzcy5uZy1kaXJ0eV0nOiAnbmdDbGFzc0RpcnR5JyxcbiAgICAgICAgJ1tjbGFzcy5uZy12YWxpZF0nOiAnbmdDbGFzc1ZhbGlkJyxcbiAgICAgICAgJ1tjbGFzcy5uZy1pbnZhbGlkXSc6ICduZ0NsYXNzSW52YWxpZCcsXG4gICAgICAgICdbY2xhc3MubmctcGVuZGluZ10nOiAnbmdDbGFzc1BlbmRpbmcnLFxuICAgIH07XG4gICAgLyoqXG4gICAgICogIERpcmVjdGl2ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gQW5ndWxhciBmb3JtIGNvbnRyb2xzIHRoYXQgc2V0cyBDU1MgY2xhc3Nlc1xuICAgICAgKiBiYXNlZCBvbiBjb250cm9sIHN0YXR1cyAodmFsaWQvaW52YWxpZC9kaXJ0eS9ldGMpLlxuICAgICAgKiAqXG4gICAgICovXG4gICAgdmFyIE5nQ29udHJvbFN0YXR1cyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQzKE5nQ29udHJvbFN0YXR1cywgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2RcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE5nQ29udHJvbFN0YXR1cyhjZCkge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgY2QpO1xuICAgICAgICB9XG4gICAgICAgIE5nQ29udHJvbFN0YXR1cy5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdbZm9ybUNvbnRyb2xOYW1lXSxbbmdNb2RlbF0sW2Zvcm1Db250cm9sXScsIGhvc3Q6IG5nQ29udHJvbFN0YXR1c0hvc3QgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBOZ0NvbnRyb2xTdGF0dXMuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IE5nQ29udHJvbCwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICByZXR1cm4gTmdDb250cm9sU3RhdHVzO1xuICAgIH0oQWJzdHJhY3RDb250cm9sU3RhdHVzKSk7XG4gICAgLyoqXG4gICAgICogIERpcmVjdGl2ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gQW5ndWxhciBmb3JtIGdyb3VwcyB0aGF0IHNldHMgQ1NTIGNsYXNzZXNcbiAgICAgICogYmFzZWQgb24gY29udHJvbCBzdGF0dXMgKHZhbGlkL2ludmFsaWQvZGlydHkvZXRjKS5cbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBOZ0NvbnRyb2xTdGF0dXNHcm91cCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQzKE5nQ29udHJvbFN0YXR1c0dyb3VwLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gTmdDb250cm9sU3RhdHVzR3JvdXAoY2QpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGNkKTtcbiAgICAgICAgfVxuICAgICAgICBOZ0NvbnRyb2xTdGF0dXNHcm91cC5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW2Zvcm1Hcm91cE5hbWVdLFtmb3JtQXJyYXlOYW1lXSxbbmdNb2RlbEdyb3VwXSxbZm9ybUdyb3VwXSxmb3JtOm5vdChbbmdOb0Zvcm1dKSxbbmdGb3JtXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiBuZ0NvbnRyb2xTdGF0dXNIb3N0XG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTmdDb250cm9sU3RhdHVzR3JvdXAuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LF0gfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgcmV0dXJuIE5nQ29udHJvbFN0YXR1c0dyb3VwO1xuICAgIH0oQWJzdHJhY3RDb250cm9sU3RhdHVzKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQ1ID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogIFVzZSBieSBkaXJlY3RpdmVzIGFuZCBjb21wb25lbnRzIHRvIGVtaXQgY3VzdG9tIEV2ZW50cy5cbiAgICAgICogKlxuICAgICAgKiAjIyMgRXhhbXBsZXNcbiAgICAgICogKlxuICAgICAgKiBJbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUsIGBaaXBweWAgYWx0ZXJuYXRpdmVseSBlbWl0cyBgb3BlbmAgYW5kIGBjbG9zZWAgZXZlbnRzIHdoZW4gaXRzXG4gICAgICAqIHRpdGxlIGdldHMgY2xpY2tlZDpcbiAgICAgICogKlxuICAgICAgKiBgYGBcbiAgICAgICogc2VsZWN0b3I6ICd6aXBweScsXG4gICAgICAqIHRlbXBsYXRlOiBgXG4gICAgICAqIDxkaXYgY2xhc3M9XCJ6aXBweVwiPlxuICAgICAgKiA8ZGl2IChjbGljayk9XCJ0b2dnbGUoKVwiPlRvZ2dsZTwvZGl2PlxuICAgICAgKiA8ZGl2IFtoaWRkZW5dPVwiIXZpc2libGVcIj5cbiAgICAgICogPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgKiA8L2Rpdj5cbiAgICAgICogPC9kaXY+YH0pXG4gICAgICAqIGV4cG9ydCBjbGFzcyBaaXBweSB7XG4gICAgICAqIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgKiBAT3V0cHV0KCkgb3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAqIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAqICpcbiAgICAgICogdG9nZ2xlKCkge1xuICAgICAgKiB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICAgICAgKiBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAqIHRoaXMub3Blbi5lbWl0KG51bGwpO1xuICAgICAgKiB9IGVsc2Uge1xuICAgICAgKiB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICAqIH1cbiAgICAgICogfVxuICAgICAgKiB9XG4gICAgICAqIGBgYFxuICAgICAgKiAqXG4gICAgICAqIFRoZSBldmVudHMgcGF5bG9hZCBjYW4gYmUgYWNjZXNzZWQgYnkgdGhlIHBhcmFtZXRlciBgJGV2ZW50YCBvbiB0aGUgY29tcG9uZW50cyBvdXRwdXQgZXZlbnRcbiAgICAgICogaGFuZGxlcjpcbiAgICAgICogKlxuICAgICAgKiBgYGBcbiAgICAgICogPHppcHB5IChvcGVuKT1cIm9uT3BlbigkZXZlbnQpXCIgKGNsb3NlKT1cIm9uQ2xvc2UoJGV2ZW50KVwiPjwvemlwcHk+XG4gICAgICAqIGBgYFxuICAgICAgKiAqXG4gICAgICAqIFVzZXMgUnguT2JzZXJ2YWJsZSBidXQgcHJvdmlkZXMgYW4gYWRhcHRlciB0byBtYWtlIGl0IHdvcmsgYXMgc3BlY2lmaWVkIGhlcmU6XG4gICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qaHVzYWluL29ic2VydmFibGUtc3BlY1xuICAgICAgKiAqXG4gICAgICAqIE9uY2UgYSByZWZlcmVuY2UgaW1wbGVtZW50YXRpb24gb2YgdGhlIHNwZWMgaXMgYXZhaWxhYmxlLCBzd2l0Y2ggdG8gaXQuXG4gICAgICovXG4gICAgdmFyIEV2ZW50RW1pdHRlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQ1KEV2ZW50RW1pdHRlciwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFtFdmVudEVtaXR0ZXJdLCB3aGljaCBkZXBlbmRpbmcgb24gW2lzQXN5bmNdLFxuICAgICAgICAgICogZGVsaXZlcnMgZXZlbnRzIHN5bmNocm9ub3VzbHkgb3IgYXN5bmNocm9ub3VzbHkuXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGlzQXN5bmNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcihpc0FzeW5jKSB7XG4gICAgICAgICAgICBpZiAoaXNBc3luYyA9PT0gdm9pZCAwKSB7IGlzQXN5bmMgPSBmYWxzZTsgfVxuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9faXNBc3luYyA9IGlzQXN5bmM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAodmFsdWUpIHsgX3N1cGVyLnByb3RvdHlwZS5uZXh0LmNhbGwodGhpcywgdmFsdWUpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/PX0gZ2VuZXJhdG9yT3JOZXh0XG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGVycm9yXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGNvbXBsZXRlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChnZW5lcmF0b3JPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc2NoZWR1bGVyRm47XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBlcnJvckZuID0gZnVuY3Rpb24gKGVycikgeyByZXR1cm4gbnVsbDsgfTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNvbXBsZXRlRm4gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9O1xuICAgICAgICAgICAgaWYgKGdlbmVyYXRvck9yTmV4dCAmJiB0eXBlb2YgZ2VuZXJhdG9yT3JOZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlckZuID0gdGhpcy5fX2lzQXN5bmMgPyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBnZW5lcmF0b3JPck5leHQubmV4dCh2YWx1ZSk7IH0pO1xuICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbiAodmFsdWUpIHsgZ2VuZXJhdG9yT3JOZXh0Lm5leHQodmFsdWUpOyB9O1xuICAgICAgICAgICAgICAgIGlmIChnZW5lcmF0b3JPck5leHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JGbiA9IHRoaXMuX19pc0FzeW5jID8gZnVuY3Rpb24gKGVycikgeyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdlbmVyYXRvck9yTmV4dC5lcnJvcihlcnIpOyB9KTsgfSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyKSB7IGdlbmVyYXRvck9yTmV4dC5lcnJvcihlcnIpOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ2VuZXJhdG9yT3JOZXh0LmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlRm4gPSB0aGlzLl9faXNBc3luYyA/IGZ1bmN0aW9uICgpIHsgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBnZW5lcmF0b3JPck5leHQuY29tcGxldGUoKTsgfSk7IH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyBnZW5lcmF0b3JPck5leHQuY29tcGxldGUoKTsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXJGbiA9IHRoaXMuX19pc0FzeW5jID8gZnVuY3Rpb24gKHZhbHVlKSB7IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2VuZXJhdG9yT3JOZXh0KHZhbHVlKTsgfSk7IH0gOlxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodmFsdWUpIHsgZ2VuZXJhdG9yT3JOZXh0KHZhbHVlKTsgfTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JGbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9faXNBc3luYyA/IGZ1bmN0aW9uIChlcnIpIHsgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBlcnJvcihlcnIpOyB9KTsgfSA6IGZ1bmN0aW9uIChlcnIpIHsgZXJyb3IoZXJyKTsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlRm4gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2lzQXN5bmMgPyBmdW5jdGlvbiAoKSB7IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcGxldGUoKTsgfSk7IH0gOiBmdW5jdGlvbiAoKSB7IGNvbXBsZXRlKCk7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuc3Vic2NyaWJlLmNhbGwodGhpcywgc2NoZWR1bGVyRm4sIGVycm9yRm4sIGNvbXBsZXRlRm4pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRXZlbnRFbWl0dGVyO1xuICAgIH0ocnhqc19TdWJqZWN0LlN1YmplY3QpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDYgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCBhIEZvcm1Db250cm9sIGlzIHZhbGlkLCBpLmUuIHRoYXQgbm8gZXJyb3JzIGV4aXN0IGluIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBWQUxJRCA9ICdWQUxJRCc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyBpbnZhbGlkLCBpLmUuIHRoYXQgYW4gZXJyb3IgZXhpc3RzIGluIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBJTlZBTElEID0gJ0lOVkFMSUQnO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgcGVuZGluZywgaS5lLiB0aGF0IGFzeW5jIHZhbGlkYXRpb24gaXMgb2NjdXJyaW5nIGFuZFxuICAgICAqIGVycm9ycyBhcmUgbm90IHlldCBhdmFpbGFibGUgZm9yIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBQRU5ESU5HID0gJ1BFTkRJTkcnO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgZGlzYWJsZWQsIGkuZS4gdGhhdCB0aGUgY29udHJvbCBpcyBleGVtcHQgZnJvbSBhbmNlc3RvclxuICAgICAqIGNhbGN1bGF0aW9ucyBvZiB2YWxpZGl0eSBvciB2YWx1ZS5cbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBESVNBQkxFRCA9ICdESVNBQkxFRCc7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICogQHBhcmFtIHs/fSBwYXRoXG4gICAgICogQHBhcmFtIHs/fSBkZWxpbWl0ZXJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9maW5kKGNvbnRyb2wsIHBhdGgsIGRlbGltaXRlcikge1xuICAgICAgICBpZiAocGF0aCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICghKHBhdGggaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICAgIHBhdGggPSAoKHBhdGgpKS5zcGxpdChkZWxpbWl0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoIGluc3RhbmNlb2YgQXJyYXkgJiYgKHBhdGgubGVuZ3RoID09PSAwKSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gKChwYXRoKSkucmVkdWNlKGZ1bmN0aW9uICh2LCBuYW1lKSB7XG4gICAgICAgICAgICBpZiAodiBpbnN0YW5jZW9mIEZvcm1Hcm91cCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2LmNvbnRyb2xzW25hbWVdIHx8IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodiBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2LmF0KC8qKiBAdHlwZSB7P30gKi8gKG5hbWUpKSB8fCBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sIGNvbnRyb2wpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRvT2JzZXJ2YWJsZShyKSB7XG4gICAgICAgIHJldHVybiBpc1Byb21pc2UocikgPyByeGpzX29ic2VydmFibGVfZnJvbVByb21pc2UuZnJvbVByb21pc2UocikgOiByO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gY29lcmNlVG9WYWxpZGF0b3IodmFsaWRhdG9yKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbGlkYXRvcikgPyBjb21wb3NlVmFsaWRhdG9ycyh2YWxpZGF0b3IpIDogdmFsaWRhdG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb2VyY2VUb0FzeW5jVmFsaWRhdG9yKGFzeW5jVmFsaWRhdG9yKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFzeW5jVmFsaWRhdG9yKSA/IGNvbXBvc2VBc3luY1ZhbGlkYXRvcnMoYXN5bmNWYWxpZGF0b3IpIDogYXN5bmNWYWxpZGF0b3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqICB7QGxpbmsgRm9ybUFycmF5fS5cbiAgICAgICogKlxuICAgICAgKiBJdCBwcm92aWRlcyBzb21lIG9mIHRoZSBzaGFyZWQgYmVoYXZpb3IgdGhhdCBhbGwgY29udHJvbHMgYW5kIGdyb3VwcyBvZiBjb250cm9scyBoYXZlLCBsaWtlXG4gICAgICAqIHJ1bm5pbmcgdmFsaWRhdG9ycywgY2FsY3VsYXRpbmcgc3RhdHVzLCBhbmQgcmVzZXR0aW5nIHN0YXRlLiBJdCBhbHNvIGRlZmluZXMgdGhlIHByb3BlcnRpZXNcbiAgICAgICogdGhhdCBhcmUgc2hhcmVkIGJldHdlZW4gYWxsIHN1Yi1jbGFzc2VzLCBsaWtlIGB2YWx1ZWAsIGB2YWxpZGAsIGFuZCBgZGlydHlgLiBJdCBzaG91bGRuJ3QgYmVcbiAgICAgICogaW5zdGFudGlhdGVkIGRpcmVjdGx5LlxuICAgICAgKiAqXG4gICAgICogQGFic3RyYWN0XG4gICAgICovXG4gICAgdmFyIEFic3RyYWN0Q29udHJvbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvclxuICAgICAgICAgKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBBYnN0cmFjdENvbnRyb2wodmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gICAgICAgICAgICB0aGlzLmFzeW5jVmFsaWRhdG9yID0gYXN5bmNWYWxpZGF0b3I7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgICAgICB0aGlzLl9wcmlzdGluZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl90b3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9vbkRpc2FibGVkQ2hhbmdlID0gW107XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgVGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInBhcmVudFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqICBUaGUgcGFyZW50IGNvbnRyb2wuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3BhcmVudDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInN0YXR1c1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqICBUaGUgdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIGNvbnRyb2wuIFRoZXJlIGFyZSBmb3VyIHBvc3NpYmxlXG4gICAgICAgICAgICAgICogdmFsaWRhdGlvbiBzdGF0dXNlczpcbiAgICAgICAgICAgICAgKiAqXG4gICAgICAgICAgICAgICogKiAqKlZBTElEKio6ICBjb250cm9sIGhhcyBwYXNzZWQgYWxsIHZhbGlkYXRpb24gY2hlY2tzXG4gICAgICAgICAgICAgICogKiAqKklOVkFMSUQqKjogY29udHJvbCBoYXMgZmFpbGVkIGF0IGxlYXN0IG9uZSB2YWxpZGF0aW9uIGNoZWNrXG4gICAgICAgICAgICAgICogKiAqKlBFTkRJTkcqKjogY29udHJvbCBpcyBpbiB0aGUgbWlkc3Qgb2YgY29uZHVjdGluZyBhIHZhbGlkYXRpb24gY2hlY2tcbiAgICAgICAgICAgICAgKiAqICoqRElTQUJMRUQqKjogY29udHJvbCBpcyBleGVtcHQgZnJvbSB2YWxpZGF0aW9uIGNoZWNrc1xuICAgICAgICAgICAgICAqICpcbiAgICAgICAgICAgICAgKiBUaGVzZSBzdGF0dXNlcyBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLCBzbyBhIGNvbnRyb2wgY2Fubm90IGJlXG4gICAgICAgICAgICAgICogYm90aCB2YWxpZCBBTkQgaW52YWxpZCBvciBpbnZhbGlkIEFORCBkaXNhYmxlZC5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwidmFsaWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgQSBjb250cm9sIGlzIGB2YWxpZGAgd2hlbiBpdHMgYHN0YXR1cyA9PT0gVkFMSURgLlxuICAgICAgICAgICAgICAqICpcbiAgICAgICAgICAgICAgKiBJbiBvcmRlciB0byBoYXZlIHRoaXMgc3RhdHVzLCB0aGUgY29udHJvbCBtdXN0IGhhdmUgcGFzc2VkIGFsbCBpdHNcbiAgICAgICAgICAgICAgKiB2YWxpZGF0aW9uIGNoZWNrcy5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzID09PSBWQUxJRDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcImludmFsaWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgQSBjb250cm9sIGlzIGBpbnZhbGlkYCB3aGVuIGl0cyBgc3RhdHVzID09PSBJTlZBTElEYC5cbiAgICAgICAgICAgICAgKiAqXG4gICAgICAgICAgICAgICogSW4gb3JkZXIgdG8gaGF2ZSB0aGlzIHN0YXR1cywgdGhlIGNvbnRyb2wgbXVzdCBoYXZlIGZhaWxlZFxuICAgICAgICAgICAgICAqIGF0IGxlYXN0IG9uZSBvZiBpdHMgdmFsaWRhdGlvbiBjaGVja3MuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PT0gSU5WQUxJRDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInBlbmRpbmdcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgQSBjb250cm9sIGlzIGBwZW5kaW5nYCB3aGVuIGl0cyBgc3RhdHVzID09PSBQRU5ESU5HYC5cbiAgICAgICAgICAgICAgKiAqXG4gICAgICAgICAgICAgICogSW4gb3JkZXIgdG8gaGF2ZSB0aGlzIHN0YXR1cywgdGhlIGNvbnRyb2wgbXVzdCBiZSBpbiB0aGVcbiAgICAgICAgICAgICAgKiBtaWRkbGUgb2YgY29uZHVjdGluZyBhIHZhbGlkYXRpb24gY2hlY2suXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PSBQRU5ESU5HOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgQSBjb250cm9sIGlzIGBkaXNhYmxlZGAgd2hlbiBpdHMgYHN0YXR1cyA9PT0gRElTQUJMRURgLlxuICAgICAgICAgICAgICAqICpcbiAgICAgICAgICAgICAgKiBEaXNhYmxlZCBjb250cm9scyBhcmUgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3MgYW5kXG4gICAgICAgICAgICAgICogYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgYWdncmVnYXRlIHZhbHVlIG9mIHRoZWlyIGFuY2VzdG9yXG4gICAgICAgICAgICAgICogY29udHJvbHMuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PT0gRElTQUJMRUQ7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJlbmFibGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIEEgY29udHJvbCBpcyBgZW5hYmxlZGAgYXMgbG9uZyBhcyBpdHMgYHN0YXR1cyAhPT0gRElTQUJMRURgLlxuICAgICAgICAgICAgICAqICpcbiAgICAgICAgICAgICAgKiBJbiBvdGhlciB3b3JkcywgaXQgaGFzIGEgc3RhdHVzIG9mIGBWQUxJRGAsIGBJTlZBTElEYCwgb3JcbiAgICAgICAgICAgICAgKiBgUEVORElOR2AuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyAhPT0gRElTQUJMRUQ7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJlcnJvcnNcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgUmV0dXJucyBhbnkgZXJyb3JzIGdlbmVyYXRlZCBieSBmYWlsaW5nIHZhbGlkYXRpb24uIElmIHRoZXJlXG4gICAgICAgICAgICAgICogYXJlIG5vIGVycm9ycywgaXQgd2lsbCByZXR1cm4gbnVsbC5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZXJyb3JzOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwicHJpc3RpbmVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgQSBjb250cm9sIGlzIGBwcmlzdGluZWAgaWYgdGhlIHVzZXIgaGFzIG5vdCB5ZXQgY2hhbmdlZFxuICAgICAgICAgICAgICAqIHRoZSB2YWx1ZSBpbiB0aGUgVUkuXG4gICAgICAgICAgICAgICogKlxuICAgICAgICAgICAgICAqIE5vdGUgdGhhdCBwcm9ncmFtbWF0aWMgY2hhbmdlcyB0byBhIGNvbnRyb2wncyB2YWx1ZSB3aWxsXG4gICAgICAgICAgICAgICogKm5vdCogbWFyayBpdCBkaXJ0eS5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcHJpc3RpbmU7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJkaXJ0eVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqICBBIGNvbnRyb2wgaXMgYGRpcnR5YCBpZiB0aGUgdXNlciBoYXMgY2hhbmdlZCB0aGUgdmFsdWVcbiAgICAgICAgICAgICAgKiBpbiB0aGUgVUkuXG4gICAgICAgICAgICAgICogKlxuICAgICAgICAgICAgICAqIE5vdGUgdGhhdCBwcm9ncmFtbWF0aWMgY2hhbmdlcyB0byBhIGNvbnRyb2wncyB2YWx1ZSB3aWxsXG4gICAgICAgICAgICAgICogKm5vdCogbWFyayBpdCBkaXJ0eS5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gIXRoaXMucHJpc3RpbmU7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJ0b3VjaGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIEEgY29udHJvbCBpcyBtYXJrZWQgYHRvdWNoZWRgIG9uY2UgdGhlIHVzZXIgaGFzIHRyaWdnZXJlZFxuICAgICAgICAgICAgICAqIGEgYGJsdXJgIGV2ZW50IG9uIGl0LlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl90b3VjaGVkOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwidW50b3VjaGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIEEgY29udHJvbCBpcyBgdW50b3VjaGVkYCBpZiB0aGUgdXNlciBoYXMgbm90IHlldCB0cmlnZ2VyZWRcbiAgICAgICAgICAgICAgKiBhIGBibHVyYCBldmVudCBvbiBpdC5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gIXRoaXMuX3RvdWNoZWQ7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJ2YWx1ZUNoYW5nZXNcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgRW1pdHMgYW4gZXZlbnQgZXZlcnkgdGltZSB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wgY2hhbmdlcywgaW5cbiAgICAgICAgICAgICAgKiB0aGUgVUkgb3IgcHJvZ3JhbW1hdGljYWxseS5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fdmFsdWVDaGFuZ2VzOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwic3RhdHVzQ2hhbmdlc1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqICBFbWl0cyBhbiBldmVudCBldmVyeSB0aW1lIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbFxuICAgICAgICAgICAgICAqIGlzIHJlLWNhbGN1bGF0ZWQuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1c0NoYW5nZXM7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogIFNldHMgdGhlIHN5bmNocm9ub3VzIHZhbGlkYXRvcnMgdGhhdCBhcmUgYWN0aXZlIG9uIHRoaXMgY29udHJvbC4gIENhbGxpbmdcbiAgICAgICAgICAqIHRoaXMgd2lsbCBvdmVyd3JpdGUgYW55IGV4aXN0aW5nIHN5bmMgdmFsaWRhdG9ycy5cbiAgICAgICAgICogQHBhcmFtIHs/fSBuZXdWYWxpZGF0b3JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuc2V0VmFsaWRhdG9ycyA9IGZ1bmN0aW9uIChuZXdWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yID0gY29lcmNlVG9WYWxpZGF0b3IobmV3VmFsaWRhdG9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBTZXRzIHRoZSBhc3luYyB2YWxpZGF0b3JzIHRoYXQgYXJlIGFjdGl2ZSBvbiB0aGlzIGNvbnRyb2wuIENhbGxpbmcgdGhpc1xuICAgICAgICAgICogd2lsbCBvdmVyd3JpdGUgYW55IGV4aXN0aW5nIGFzeW5jIHZhbGlkYXRvcnMuXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmV3VmFsaWRhdG9yXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnNldEFzeW5jVmFsaWRhdG9ycyA9IGZ1bmN0aW9uIChuZXdWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuYXN5bmNWYWxpZGF0b3IgPSBjb2VyY2VUb0FzeW5jVmFsaWRhdG9yKG5ld1ZhbGlkYXRvcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgRW1wdGllcyBvdXQgdGhlIHN5bmMgdmFsaWRhdG9yIGxpc3QuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmNsZWFyVmFsaWRhdG9ycyA9IGZ1bmN0aW9uICgpIHsgdGhpcy52YWxpZGF0b3IgPSBudWxsOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIEVtcHRpZXMgb3V0IHRoZSBhc3luYyB2YWxpZGF0b3IgbGlzdC5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuY2xlYXJBc3luY1ZhbGlkYXRvcnMgPSBmdW5jdGlvbiAoKSB7IHRoaXMuYXN5bmNWYWxpZGF0b3IgPSBudWxsOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIE1hcmtzIHRoZSBjb250cm9sIGFzIGB0b3VjaGVkYC5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIFRoaXMgd2lsbCBhbHNvIG1hcmsgYWxsIGRpcmVjdCBhbmNlc3RvcnMgYXMgYHRvdWNoZWRgIHRvIG1haW50YWluXG4gICAgICAgICAgKiB0aGUgbW9kZWwuXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5tYXJrQXNUb3VjaGVkID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgb25seVNlbGYgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLm9ubHlTZWxmO1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5tYXJrQXNUb3VjaGVkKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIE1hcmtzIHRoZSBjb250cm9sIGFzIGB1bnRvdWNoZWRgLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogSWYgdGhlIGNvbnRyb2wgaGFzIGFueSBjaGlsZHJlbiwgaXQgd2lsbCBhbHNvIG1hcmsgYWxsIGNoaWxkcmVuIGFzIGB1bnRvdWNoZWRgXG4gICAgICAgICAgKiB0byBtYWludGFpbiB0aGUgbW9kZWwsIGFuZCByZS1jYWxjdWxhdGUgdGhlIGB0b3VjaGVkYCBzdGF0dXMgb2YgYWxsIHBhcmVudFxuICAgICAgICAgICogY29udHJvbHMuXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5tYXJrQXNVbnRvdWNoZWQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBvbmx5U2VsZiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkub25seVNlbGY7XG4gICAgICAgICAgICB0aGlzLl90b3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wpIHsgY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoeyBvbmx5U2VsZjogdHJ1ZSB9KTsgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlVG91Y2hlZCh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBNYXJrcyB0aGUgY29udHJvbCBhcyBgZGlydHlgLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogVGhpcyB3aWxsIGFsc28gbWFyayBhbGwgZGlyZWN0IGFuY2VzdG9ycyBhcyBgZGlydHlgIHRvIG1haW50YWluXG4gICAgICAgICAgKiB0aGUgbW9kZWwuXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5tYXJrQXNEaXJ0eSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG9ubHlTZWxmID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5vbmx5U2VsZjtcbiAgICAgICAgICAgIHRoaXMuX3ByaXN0aW5lID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5tYXJrQXNEaXJ0eSh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBNYXJrcyB0aGUgY29udHJvbCBhcyBgcHJpc3RpbmVgLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogSWYgdGhlIGNvbnRyb2wgaGFzIGFueSBjaGlsZHJlbiwgaXQgd2lsbCBhbHNvIG1hcmsgYWxsIGNoaWxkcmVuIGFzIGBwcmlzdGluZWBcbiAgICAgICAgICAqIHRvIG1haW50YWluIHRoZSBtb2RlbCwgYW5kIHJlLWNhbGN1bGF0ZSB0aGUgYHByaXN0aW5lYCBzdGF0dXMgb2YgYWxsIHBhcmVudFxuICAgICAgICAgICogY29udHJvbHMuXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5tYXJrQXNQcmlzdGluZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG9ubHlTZWxmID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5vbmx5U2VsZjtcbiAgICAgICAgICAgIHRoaXMuX3ByaXN0aW5lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCkgeyBjb250cm9sLm1hcmtBc1ByaXN0aW5lKHsgb25seVNlbGY6IHRydWUgfSk7IH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVByaXN0aW5lKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIE1hcmtzIHRoZSBjb250cm9sIGFzIGBwZW5kaW5nYC5cbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18wXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLm1hcmtBc1BlbmRpbmcgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBvbmx5U2VsZiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkub25seVNlbGY7XG4gICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBQRU5ESU5HO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQubWFya0FzUGVuZGluZyh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBEaXNhYmxlcyB0aGUgY29udHJvbC4gVGhpcyBtZWFucyB0aGUgY29udHJvbCB3aWxsIGJlIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzIGFuZFxuICAgICAgICAgICogZXhjbHVkZWQgZnJvbSB0aGUgYWdncmVnYXRlIHZhbHVlIG9mIGFueSBwYXJlbnQuIEl0cyBzdGF0dXMgaXMgYERJU0FCTEVEYC5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIElmIHRoZSBjb250cm9sIGhhcyBjaGlsZHJlbiwgYWxsIGNoaWxkcmVuIHdpbGwgYmUgZGlzYWJsZWQgdG8gbWFpbnRhaW4gdGhlIG1vZGVsLlxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzBcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIG9ubHlTZWxmID0gX2Iub25seVNlbGYsIGVtaXRFdmVudCA9IF9iLmVtaXRFdmVudDtcbiAgICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IERJU0FCTEVEO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3JzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCkgeyBjb250cm9sLmRpc2FibGUoeyBvbmx5U2VsZjogdHJ1ZSB9KTsgfSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xuICAgICAgICAgICAgaWYgKGVtaXRFdmVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZUNoYW5nZXMuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdHVzQ2hhbmdlcy5lbWl0KHRoaXMuX3N0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVBbmNlc3RvcnMob25seVNlbGYpO1xuICAgICAgICAgICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZS5mb3JFYWNoKGZ1bmN0aW9uIChjaGFuZ2VGbikgeyByZXR1cm4gY2hhbmdlRm4odHJ1ZSk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIEVuYWJsZXMgdGhlIGNvbnRyb2wuIFRoaXMgbWVhbnMgdGhlIGNvbnRyb2wgd2lsbCBiZSBpbmNsdWRlZCBpbiB2YWxpZGF0aW9uIGNoZWNrcyBhbmRcbiAgICAgICAgICAqIHRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgaXRzIHBhcmVudC4gSXRzIHN0YXR1cyBpcyByZS1jYWxjdWxhdGVkIGJhc2VkIG9uIGl0cyB2YWx1ZSBhbmRcbiAgICAgICAgICAqIGl0cyB2YWxpZGF0b3JzLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogSWYgdGhlIGNvbnRyb2wgaGFzIGNoaWxkcmVuLCBhbGwgY2hpbGRyZW4gd2lsbCBiZSBlbmFibGVkLlxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzBcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gVkFMSUQ7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wpIHsgY29udHJvbC5lbmFibGUoeyBvbmx5U2VsZjogdHJ1ZSB9KTsgfSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVBbmNlc3RvcnMob25seVNlbGYpO1xuICAgICAgICAgICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZS5mb3JFYWNoKGZ1bmN0aW9uIChjaGFuZ2VGbikgeyByZXR1cm4gY2hhbmdlRm4oZmFsc2UpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gb25seVNlbGZcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3VwZGF0ZUFuY2VzdG9ycyA9IGZ1bmN0aW9uIChvbmx5U2VsZikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlUHJpc3RpbmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVRvdWNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnNldFBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQpIHsgdGhpcy5fcGFyZW50ID0gcGFyZW50OyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLiBBYnN0cmFjdCBtZXRob2QgKGltcGxlbWVudGVkIGluIHN1Yi1jbGFzc2VzKS5cbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFBhdGNoZXMgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLiBBYnN0cmFjdCBtZXRob2QgKGltcGxlbWVudGVkIGluIHN1Yi1jbGFzc2VzKS5cbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5wYXRjaFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUmVzZXRzIHRoZSBjb250cm9sLiBBYnN0cmFjdCBtZXRob2QgKGltcGxlbWVudGVkIGluIHN1Yi1jbGFzc2VzKS5cbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBSZS1jYWxjdWxhdGVzIHRoZSB2YWx1ZSBhbmQgdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIGNvbnRyb2wuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBCeSBkZWZhdWx0LCBpdCB3aWxsIGFsc28gdXBkYXRlIHRoZSB2YWx1ZSBhbmQgdmFsaWRpdHkgb2YgaXRzIGFuY2VzdG9ycy5cbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18wXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB0aGlzLl9zZXRJbml0aWFsU3RhdHVzKCk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9ycyA9IHRoaXMuX3J1blZhbGlkYXRvcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IHRoaXMuX2NhbGN1bGF0ZVN0YXR1cygpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0dXMgPT09IFZBTElEIHx8IHRoaXMuX3N0YXR1cyA9PT0gUEVORElORykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ydW5Bc3luY1ZhbGlkYXRvcihlbWl0RXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbWl0RXZlbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VzLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMuZW1pdCh0aGlzLl9zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiBvbmx5U2VsZiwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzBcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3VwZGF0ZVRyZWVWYWxpZGl0eSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGVtaXRFdmVudCA9IChfYSA9PT0gdm9pZCAwID8geyBlbWl0RXZlbnQ6IHRydWUgfSA6IF9hKS5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGN0cmwpIHsgcmV0dXJuIGN0cmwuX3VwZGF0ZVRyZWVWYWxpZGl0eSh7IGVtaXRFdmVudDogZW1pdEV2ZW50IH0pOyB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9zZXRJbml0aWFsU3RhdHVzID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9zdGF0dXMgPSB0aGlzLl9hbGxDb250cm9sc0Rpc2FibGVkKCkgPyBESVNBQkxFRCA6IFZBTElEOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3J1blZhbGlkYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvciA/IHRoaXMudmFsaWRhdG9yKHRoaXMpIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZW1pdEV2ZW50XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9ydW5Bc3luY1ZhbGlkYXRvciA9IGZ1bmN0aW9uIChlbWl0RXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5hc3luY1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IFBFTkRJTkc7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsRXhpc3RpbmdTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvYnMgPSB0b09ic2VydmFibGUodGhpcy5hc3luY1ZhbGlkYXRvcih0aGlzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgb2JzLnN1YnNjcmliZSh7IG5leHQ6IGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIF90aGlzLnNldEVycm9ycyhyZXMsIHsgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7IH0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fY2FuY2VsRXhpc3RpbmdTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgU2V0cyBlcnJvcnMgb24gYSBmb3JtIGNvbnRyb2wuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBUaGlzIGlzIHVzZWQgd2hlbiB2YWxpZGF0aW9ucyBhcmUgcnVuIG1hbnVhbGx5IGJ5IHRoZSB1c2VyLCByYXRoZXIgdGhhbiBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgICogKlxuICAgICAgICAgICogQ2FsbGluZyBgc2V0RXJyb3JzYCB3aWxsIGFsc28gdXBkYXRlIHRoZSB2YWxpZGl0eSBvZiB0aGUgcGFyZW50IGNvbnRyb2wuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgICAgICogKlxuICAgICAgICAgICogYGBgXG4gICAgICAgICAgKiBjb25zdCBsb2dpbiA9IG5ldyBGb3JtQ29udHJvbChcInNvbWVMb2dpblwiKTtcbiAgICAgICAgICAqIGxvZ2luLnNldEVycm9ycyh7XG4gICAgICAgICAgKiBcIm5vdFVuaXF1ZVwiOiB0cnVlXG4gICAgICAgICAgKiB9KTtcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGV4cGVjdChsb2dpbi52YWxpZCkudG9FcXVhbChmYWxzZSk7XG4gICAgICAgICAgKiBleHBlY3QobG9naW4uZXJyb3JzKS50b0VxdWFsKHtcIm5vdFVuaXF1ZVwiOiB0cnVlfSk7XG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBsb2dpbi5zZXRWYWx1ZShcInNvbWVPdGhlckxvZ2luXCIpO1xuICAgICAgICAgICogKlxuICAgICAgICAgICogZXhwZWN0KGxvZ2luLnZhbGlkKS50b0VxdWFsKHRydWUpO1xuICAgICAgICAgICogYGBgXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXJyb3JzXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5zZXRFcnJvcnMgPSBmdW5jdGlvbiAoZXJyb3JzLCBfYSkge1xuICAgICAgICAgICAgdmFyIGVtaXRFdmVudCA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ29udHJvbHNFcnJvcnMoZW1pdEV2ZW50ICE9PSBmYWxzZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUmV0cmlldmVzIGEgY2hpbGQgY29udHJvbCBnaXZlbiB0aGUgY29udHJvbCdzIG5hbWUgb3IgcGF0aC5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIFBhdGhzIGNhbiBiZSBwYXNzZWQgaW4gYXMgYW4gYXJyYXkgb3IgYSBzdHJpbmcgZGVsaW1pdGVkIGJ5IGEgZG90LlxuICAgICAgICAgICogKlxuICAgICAgICAgICogVG8gZ2V0IGEgY29udHJvbCBuZXN0ZWQgd2l0aGluIGEgYHBlcnNvbmAgc3ViLWdyb3VwOlxuICAgICAgICAgICogKlxuICAgICAgICAgICogKiBgdGhpcy5mb3JtLmdldCgncGVyc29uLm5hbWUnKTtgXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiAtT1ItXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiAqIGB0aGlzLmZvcm0uZ2V0KFsncGVyc29uJywgJ25hbWUnXSk7YFxuICAgICAgICAgKiBAcGFyYW0gez99IHBhdGhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIF9maW5kKHRoaXMsIHBhdGgsICcuJyk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUmV0dXJucyB0cnVlIGlmIHRoZSBjb250cm9sIHdpdGggdGhlIGdpdmVuIHBhdGggaGFzIHRoZSBlcnJvciBzcGVjaWZpZWQuIE90aGVyd2lzZVxuICAgICAgICAgICogcmV0dXJucyBudWxsIG9yIHVuZGVmaW5lZC5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIElmIG5vIHBhdGggaXMgZ2l2ZW4sIGl0IGNoZWNrcyBmb3IgdGhlIGVycm9yIG9uIHRoZSBwcmVzZW50IGNvbnRyb2wuXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXJyb3JDb2RlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHBhdGhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuZ2V0RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JDb2RlLCBwYXRoKSB7XG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7IHBhdGggPSBudWxsOyB9XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9sID0gcGF0aCA/IHRoaXMuZ2V0KHBhdGgpIDogdGhpcztcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sICYmIGNvbnRyb2wuX2Vycm9ycyA/IGNvbnRyb2wuX2Vycm9yc1tlcnJvckNvZGVdIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbnRyb2wgd2l0aCB0aGUgZ2l2ZW4gcGF0aCBoYXMgdGhlIGVycm9yIHNwZWNpZmllZC4gT3RoZXJ3aXNlXG4gICAgICAgICAgKiByZXR1cm5zIGZhbHNlLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogSWYgbm8gcGF0aCBpcyBnaXZlbiwgaXQgY2hlY2tzIGZvciB0aGUgZXJyb3Igb24gdGhlIHByZXNlbnQgY29udHJvbC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBlcnJvckNvZGVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gcGF0aFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5oYXNFcnJvciA9IGZ1bmN0aW9uIChlcnJvckNvZGUsIHBhdGgpIHtcbiAgICAgICAgICAgIGlmIChwYXRoID09PSB2b2lkIDApIHsgcGF0aCA9IG51bGw7IH1cbiAgICAgICAgICAgIHJldHVybiAhIXRoaXMuZ2V0RXJyb3IoZXJyb3JDb2RlLCBwYXRoKTtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwicm9vdFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqICBSZXRyaWV2ZXMgdGhlIHRvcC1sZXZlbCBhbmNlc3RvciBvZiB0aGlzIGNvbnRyb2wuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB4ID0gdGhpcztcbiAgICAgICAgICAgICAgICB3aGlsZSAoeC5fcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSB4Ll9wYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGVtaXRFdmVudFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fdXBkYXRlQ29udHJvbHNFcnJvcnMgPSBmdW5jdGlvbiAoZW1pdEV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSB0aGlzLl9jYWxjdWxhdGVTdGF0dXMoKTtcbiAgICAgICAgICAgIGlmIChlbWl0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0dXNDaGFuZ2VzLmVtaXQodGhpcy5fc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZUNvbnRyb2xzRXJyb3JzKGVtaXRFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5faW5pdE9ic2VydmFibGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzQ2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9jYWxjdWxhdGVTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYWxsQ29udHJvbHNEaXNhYmxlZCgpKVxuICAgICAgICAgICAgICAgIHJldHVybiBESVNBQkxFRDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvcnMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAodGhpcy5fYW55Q29udHJvbHNIYXZlU3RhdHVzKFBFTkRJTkcpKVxuICAgICAgICAgICAgICAgIHJldHVybiBQRU5ESU5HO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2FueUNvbnRyb2xzSGF2ZVN0YXR1cyhJTlZBTElEKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIHJldHVybiBWQUxJRDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fdXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICogQHBhcmFtIHs/fSBjYlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fZm9yRWFjaENoaWxkID0gZnVuY3Rpb24gKGNiKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb25kaXRpb25cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2FueUNvbnRyb2xzID0gZnVuY3Rpb24gKGNvbmRpdGlvbikgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9hbGxDb250cm9sc0Rpc2FibGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBzdGF0dXNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2FueUNvbnRyb2xzSGF2ZVN0YXR1cyA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbnlDb250cm9scyhmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gY29udHJvbC5zdGF0dXMgPT09IHN0YXR1czsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fYW55Q29udHJvbHNEaXJ0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbnlDb250cm9scyhmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gY29udHJvbC5kaXJ0eTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fYW55Q29udHJvbHNUb3VjaGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FueUNvbnRyb2xzKGZ1bmN0aW9uIChjb250cm9sKSB7IHJldHVybiBjb250cm9sLnRvdWNoZWQ7IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18wXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl91cGRhdGVQcmlzdGluZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG9ubHlTZWxmID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5vbmx5U2VsZjtcbiAgICAgICAgICAgIHRoaXMuX3ByaXN0aW5lID0gIXRoaXMuX2FueUNvbnRyb2xzRGlydHkoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVQcmlzdGluZSh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fdXBkYXRlVG91Y2hlZCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG9ubHlTZWxmID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5vbmx5U2VsZjtcbiAgICAgICAgICAgIHRoaXMuX3RvdWNoZWQgPSB0aGlzLl9hbnlDb250cm9sc1RvdWNoZWQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVUb3VjaGVkKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmb3JtU3RhdGVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2lzQm94ZWRWYWx1ZSA9IGZ1bmN0aW9uIChmb3JtU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZm9ybVN0YXRlID09PSAnb2JqZWN0JyAmJiBmb3JtU3RhdGUgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmb3JtU3RhdGUpLmxlbmd0aCA9PT0gMiAmJiAndmFsdWUnIGluIGZvcm1TdGF0ZSAmJiAnZGlzYWJsZWQnIGluIGZvcm1TdGF0ZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSA9IGZuOyB9O1xuICAgICAgICByZXR1cm4gQWJzdHJhY3RDb250cm9sO1xuICAgIH0oKSk7XG4gICAgLyoqXG4gICAgICogICpcbiAgICAgICogSXQgaXMgb25lIG9mIHRoZSB0aHJlZSBmdW5kYW1lbnRhbCBidWlsZGluZyBibG9ja3Mgb2YgQW5ndWxhciBmb3JtcywgYWxvbmcgd2l0aFxuICAgICAgKiB7QGxpbmsgRm9ybUdyb3VwfSBhbmQge0BsaW5rIEZvcm1BcnJheX0uXG4gICAgICAqICpcbiAgICAgICogKlxuICAgICAgKiBXaGVuIGluc3RhbnRpYXRpbmcgYSB7QGxpbmsgRm9ybUNvbnRyb2x9LCB5b3UgY2FuIHBhc3MgaW4gYW4gaW5pdGlhbCB2YWx1ZSBhcyB0aGVcbiAgICAgICogZmlyc3QgYXJndW1lbnQuIEV4YW1wbGU6XG4gICAgICAqICpcbiAgICAgICogYGBgdHNcbiAgICAgICogY29uc3QgY3RybCA9IG5ldyBGb3JtQ29udHJvbCgnc29tZSB2YWx1ZScpO1xuICAgICAgKiBjb25zb2xlLmxvZyhjdHJsLnZhbHVlKTsgICAgIC8vICdzb21lIHZhbHVlJ1xuICAgICAgKiAqYGBgXG4gICAgICAqICpcbiAgICAgICogWW91IGNhbiBhbHNvIGluaXRpYWxpemUgdGhlIGNvbnRyb2wgd2l0aCBhIGZvcm0gc3RhdGUgb2JqZWN0IG9uIGluc3RhbnRpYXRpb24sXG4gICAgICAqIHdoaWNoIGluY2x1ZGVzIGJvdGggdGhlIHZhbHVlIGFuZCB3aGV0aGVyIG9yIG5vdCB0aGUgY29udHJvbCBpcyBkaXNhYmxlZC5cbiAgICAgICogWW91IGNhbid0IHVzZSB0aGUgdmFsdWUga2V5IHdpdGhvdXQgdGhlIGRpc2FibGVkIGtleTsgYm90aCBhcmUgcmVxdWlyZWRcbiAgICAgICogdG8gdXNlIHRoaXMgd2F5IG9mIGluaXRpYWxpemF0aW9uLlxuICAgICAgKiAqXG4gICAgICAqIGBgYHRzXG4gICAgICAqIGNvbnN0IGN0cmwgPSBuZXcgRm9ybUNvbnRyb2woe3ZhbHVlOiAnbi9hJywgZGlzYWJsZWQ6IHRydWV9KTtcbiAgICAgICogY29uc29sZS5sb2coY3RybC52YWx1ZSk7ICAgICAvLyAnbi9hJ1xuICAgICAgKiBjb25zb2xlLmxvZyhjdHJsLnN0YXR1cyk7ICAgLy8gJ0RJU0FCTEVEJ1xuICAgICAgKiBgYGBcbiAgICAgICogKlxuICAgICAgKiBUbyBpbmNsdWRlIGEgc3luYyB2YWxpZGF0b3IgKG9yIGFuIGFycmF5IG9mIHN5bmMgdmFsaWRhdG9ycykgd2l0aCB0aGUgY29udHJvbCxcbiAgICAgICogcGFzcyBpdCBpbiBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBBc3luYyB2YWxpZGF0b3JzIGFyZSBhbHNvIHN1cHBvcnRlZCwgYnV0XG4gICAgICAqIGhhdmUgdG8gYmUgcGFzc2VkIGluIHNlcGFyYXRlbHkgYXMgdGhlIHRoaXJkIGFyZy5cbiAgICAgICogKlxuICAgICAgKiBgYGB0c1xuICAgICAgKiBjb25zdCBjdHJsID0gbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICogY29uc29sZS5sb2coY3RybC52YWx1ZSk7ICAgICAvLyAnJ1xuICAgICAgKiBjb25zb2xlLmxvZyhjdHJsLnN0YXR1cyk7ICAgLy8gJ0lOVkFMSUQnXG4gICAgICAqIGBgYFxuICAgICAgKiAqXG4gICAgICAqIFNlZSBpdHMgc3VwZXJjbGFzcywge0BsaW5rIEFic3RyYWN0Q29udHJvbH0sIGZvciBtb3JlIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gICAgICAqICpcbiAgICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBGb3JtQ29udHJvbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQ2KEZvcm1Db250cm9sLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/PX0gZm9ybVN0YXRlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbGlkYXRvclxuICAgICAgICAgKiBAcGFyYW0gez89fSBhc3luY1ZhbGlkYXRvclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gRm9ybUNvbnRyb2woZm9ybVN0YXRlLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBpZiAoZm9ybVN0YXRlID09PSB2b2lkIDApIHsgZm9ybVN0YXRlID0gbnVsbDsgfVxuICAgICAgICAgICAgaWYgKHZhbGlkYXRvciA9PT0gdm9pZCAwKSB7IHZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmIChhc3luY1ZhbGlkYXRvciA9PT0gdm9pZCAwKSB7IGFzeW5jVmFsaWRhdG9yID0gbnVsbDsgfVxuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgY29lcmNlVG9WYWxpZGF0b3IodmFsaWRhdG9yKSwgY29lcmNlVG9Bc3luY1ZhbGlkYXRvcihhc3luY1ZhbGlkYXRvcikpO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX2FwcGx5Rm9ybVN0YXRlKGZvcm1TdGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRPYnNlcnZhYmxlcygpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgU2V0IHRoZSB2YWx1ZSBvZiB0aGUgZm9ybSBjb250cm9sIHRvIGB2YWx1ZWAuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBJZiBgb25seVNlbGZgIGlzIGB0cnVlYCwgdGhpcyBjaGFuZ2Ugd2lsbCBvbmx5IGFmZmVjdCB0aGUgdmFsaWRhdGlvbiBvZiB0aGlzIGBGb3JtQ29udHJvbGBcbiAgICAgICAgICAqIGFuZCBub3QgaXRzIHBhcmVudCBjb21wb25lbnQuIFRoaXMgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBJZiBgZW1pdEV2ZW50YCBpcyBgdHJ1ZWAsIHRoaXNcbiAgICAgICAgICAqIGNoYW5nZSB3aWxsIGNhdXNlIGEgYHZhbHVlQ2hhbmdlc2AgZXZlbnQgb24gdGhlIGBGb3JtQ29udHJvbGAgdG8gYmUgZW1pdHRlZC4gVGhpcyBkZWZhdWx0c1xuICAgICAgICAgICogdG8gdHJ1ZSAoYXMgaXQgZmFsbHMgdGhyb3VnaCB0byBgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eWApLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogSWYgYGVtaXRNb2RlbFRvVmlld0NoYW5nZWAgaXMgYHRydWVgLCB0aGUgdmlldyB3aWxsIGJlIG5vdGlmaWVkIGFib3V0IHRoZSBuZXcgdmFsdWVcbiAgICAgICAgICAqIHZpYSBhbiBgb25DaGFuZ2VgIGV2ZW50LiBUaGlzIGlzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIGlmIGBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2VgIGlzIG5vdFxuICAgICAgICAgICogc3BlY2lmaWVkLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogSWYgYGVtaXRWaWV3VG9Nb2RlbENoYW5nZWAgaXMgYHRydWVgLCBhbiBuZ01vZGVsQ2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgdG8gdXBkYXRlIHRoZVxuICAgICAgICAgICogbW9kZWwuICBUaGlzIGlzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIGlmIGBlbWl0Vmlld1RvTW9kZWxDaGFuZ2VgIGlzIG5vdCBzcGVjaWZpZWQuXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18xXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIF9hKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIG9ubHlTZWxmID0gX2Iub25seVNlbGYsIGVtaXRFdmVudCA9IF9iLmVtaXRFdmVudCwgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlID0gX2IuZW1pdE1vZGVsVG9WaWV3Q2hhbmdlLCBlbWl0Vmlld1RvTW9kZWxDaGFuZ2UgPSBfYi5lbWl0Vmlld1RvTW9kZWxDaGFuZ2U7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlLmxlbmd0aCAmJiBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlRm4pIHsgcmV0dXJuIGNoYW5nZUZuKF90aGlzLl92YWx1ZSwgZW1pdFZpZXdUb01vZGVsQ2hhbmdlICE9PSBmYWxzZSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBQYXRjaGVzIHRoZSB2YWx1ZSBvZiBhIGNvbnRyb2wuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGZ1bmN0aW9uYWxseSB0aGUgc2FtZSBhcyB7QGxpbmsgRm9ybUNvbnRyb2wuc2V0VmFsdWV9IGF0IHRoaXMgbGV2ZWwuXG4gICAgICAgICAgKiBJdCBleGlzdHMgZm9yIHN5bW1ldHJ5IHdpdGgge0BsaW5rIEZvcm1Hcm91cC5wYXRjaFZhbHVlfSBvbiBgRm9ybUdyb3Vwc2AgYW5kIGBGb3JtQXJyYXlzYCxcbiAgICAgICAgICAqIHdoZXJlIGl0IGRvZXMgYmVoYXZlIGRpZmZlcmVudGx5LlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5wYXRjaFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUmVzZXRzIHRoZSBmb3JtIGNvbnRyb2wuIFRoaXMgbWVhbnMgYnkgZGVmYXVsdDpcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqICogaXQgaXMgbWFya2VkIGFzIGBwcmlzdGluZWBcbiAgICAgICAgICAqICogaXQgaXMgbWFya2VkIGFzIGB1bnRvdWNoZWRgXG4gICAgICAgICAgKiAqIHZhbHVlIGlzIHNldCB0byBudWxsXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBZb3UgY2FuIGFsc28gcmVzZXQgdG8gYSBzcGVjaWZpYyBmb3JtIHN0YXRlIGJ5IHBhc3NpbmcgdGhyb3VnaCBhIHN0YW5kYWxvbmVcbiAgICAgICAgICAqIHZhbHVlIG9yIGEgZm9ybSBzdGF0ZSBvYmplY3QgdGhhdCBjb250YWlucyBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWQgc3RhdGVcbiAgICAgICAgICAqICh0aGVzZSBhcmUgdGhlIG9ubHkgdHdvIHByb3BlcnRpZXMgdGhhdCBjYW5ub3QgYmUgY2FsY3VsYXRlZCkuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBFeDpcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGBgYHRzXG4gICAgICAgICAgKiB0aGlzLmNvbnRyb2wucmVzZXQoJ05hbmN5Jyk7XG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBjb25zb2xlLmxvZyh0aGlzLmNvbnRyb2wudmFsdWUpOyAgLy8gJ05hbmN5J1xuICAgICAgICAgICogYGBgXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBPUlxuICAgICAgICAgICogKlxuICAgICAgICAgICogYGBgXG4gICAgICAgICAgKiB0aGlzLmNvbnRyb2wucmVzZXQoe3ZhbHVlOiAnTmFuY3knLCBkaXNhYmxlZDogdHJ1ZX0pO1xuICAgICAgICAgICogKlxuICAgICAgICAgICogY29uc29sZS5sb2codGhpcy5jb250cm9sLnZhbHVlKTsgIC8vICdOYW5jeSdcbiAgICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbC5zdGF0dXMpOyAgLy8gJ0RJU0FCTEVEJ1xuICAgICAgICAgICogYGBgXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGZvcm1TdGF0ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzFcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIChmb3JtU3RhdGUsIF9hKSB7XG4gICAgICAgICAgICBpZiAoZm9ybVN0YXRlID09PSB2b2lkIDApIHsgZm9ybVN0YXRlID0gbnVsbDsgfVxuICAgICAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIG9ubHlTZWxmID0gX2Iub25seVNlbGYsIGVtaXRFdmVudCA9IF9iLmVtaXRFdmVudDtcbiAgICAgICAgICAgIHRoaXMuX2FwcGx5Rm9ybVN0YXRlKGZvcm1TdGF0ZSk7XG4gICAgICAgICAgICB0aGlzLm1hcmtBc1ByaXN0aW5lKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgdGhpcy5tYXJrQXNVbnRvdWNoZWQoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuX3ZhbHVlLCB7IG9ubHlTZWxmOiBvbmx5U2VsZiwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLl91cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29uZGl0aW9uXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUuX2FueUNvbnRyb2xzID0gZnVuY3Rpb24gKGNvbmRpdGlvbikgeyByZXR1cm4gZmFsc2U7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLl9hbGxDb250cm9sc0Rpc2FibGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5kaXNhYmxlZDsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBSZWdpc3RlciBhIGxpc3RlbmVyIGZvciBjaGFuZ2UgZXZlbnRzLlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLl9vbkNoYW5nZS5wdXNoKGZuKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUuX2NsZWFyQ2hhbmdlRm5zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBSZWdpc3RlciBhIGxpc3RlbmVyIGZvciBkaXNhYmxlZCBldmVudHMuXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5yZWdpc3Rlck9uRGlzYWJsZWRDaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UucHVzaChmbik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNiXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUuX2ZvckVhY2hDaGlsZCA9IGZ1bmN0aW9uIChjYikgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmb3JtU3RhdGVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5fYXBwbHlGb3JtU3RhdGUgPSBmdW5jdGlvbiAoZm9ybVN0YXRlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNCb3hlZFZhbHVlKGZvcm1TdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZSA9IGZvcm1TdGF0ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBmb3JtU3RhdGUuZGlzYWJsZWQgPyB0aGlzLmRpc2FibGUoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KSA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlKHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZSA9IGZvcm1TdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1Db250cm9sO1xuICAgIH0oQWJzdHJhY3RDb250cm9sKSk7XG4gICAgLyoqXG4gICAgICogIGluc3RhbmNlcy5cbiAgICAgICogKlxuICAgICAgKiBBIGBGb3JtR3JvdXBgIGFnZ3JlZ2F0ZXMgdGhlIHZhbHVlcyBvZiBlYWNoIGNoaWxkIHtAbGluayBGb3JtQ29udHJvbH0gaW50byBvbmUgb2JqZWN0LFxuICAgICAgKiB3aXRoIGVhY2ggY29udHJvbCBuYW1lIGFzIHRoZSBrZXkuICBJdCBjYWxjdWxhdGVzIGl0cyBzdGF0dXMgYnkgcmVkdWNpbmcgdGhlIHN0YXR1c2VzXG4gICAgICAqIG9mIGl0cyBjaGlsZHJlbi4gRm9yIGV4YW1wbGUsIGlmIG9uZSBvZiB0aGUgY29udHJvbHMgaW4gYSBncm91cCBpcyBpbnZhbGlkLCB0aGUgZW50aXJlXG4gICAgICAqIGdyb3VwIGJlY29tZXMgaW52YWxpZC5cbiAgICAgICogKlxuICAgICAgKiBgRm9ybUdyb3VwYCBpcyBvbmUgb2YgdGhlIHRocmVlIGZ1bmRhbWVudGFsIGJ1aWxkaW5nIGJsb2NrcyB1c2VkIHRvIGRlZmluZSBmb3JtcyBpbiBBbmd1bGFyLFxuICAgICAgKiBhbG9uZyB3aXRoIHtAbGluayBGb3JtQ29udHJvbH0gYW5kIHtAbGluayBGb3JtQXJyYXl9LlxuICAgICAgKiAqXG4gICAgICAqICpcbiAgICAgICogV2hlbiBpbnN0YW50aWF0aW5nIGEge0BsaW5rIEZvcm1Hcm91cH0sIHBhc3MgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkIGNvbnRyb2xzIGFzIHRoZSBmaXJzdFxuICAgICAgKiBhcmd1bWVudC4gVGhlIGtleSBmb3IgZWFjaCBjaGlsZCB3aWxsIGJlIHRoZSBuYW1lIHVuZGVyIHdoaWNoIGl0IGlzIHJlZ2lzdGVyZWQuXG4gICAgICAqICpcbiAgICAgICogIyMjIEV4YW1wbGVcbiAgICAgICogKlxuICAgICAgKiBgYGBcbiAgICAgICogY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgKiBmaXJzdDogbmV3IEZvcm1Db250cm9sKCdOYW5jeScsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAgICAgICogbGFzdDogbmV3IEZvcm1Db250cm9sKCdEcmV3JyksXG4gICAgICAqIH0pO1xuICAgICAgKiAqXG4gICAgICAqIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogJ05hbmN5JywgbGFzdDsgJ0RyZXcnfVxuICAgICAgKiBjb25zb2xlLmxvZyhmb3JtLnN0YXR1cyk7ICAvLyAnVkFMSUQnXG4gICAgICAqIGBgYFxuICAgICAgKiAqXG4gICAgICAqIFlvdSBjYW4gYWxzbyBpbmNsdWRlIGdyb3VwLWxldmVsIHZhbGlkYXRvcnMgYXMgdGhlIHNlY29uZCBhcmcsIG9yIGdyb3VwLWxldmVsIGFzeW5jXG4gICAgICAqIHZhbGlkYXRvcnMgYXMgdGhlIHRoaXJkIGFyZy4gVGhlc2UgY29tZSBpbiBoYW5keSB3aGVuIHlvdSB3YW50IHRvIHBlcmZvcm0gdmFsaWRhdGlvblxuICAgICAgKiB0aGF0IGNvbnNpZGVycyB0aGUgdmFsdWUgb2YgbW9yZSB0aGFuIG9uZSBjaGlsZCBjb250cm9sLlxuICAgICAgKiAqXG4gICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAqICpcbiAgICAgICogYGBgXG4gICAgICAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICogcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMikpLFxuICAgICAgKiBwYXNzd29yZENvbmZpcm06IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMikpLFxuICAgICAgKiB9LCBwYXNzd29yZE1hdGNoVmFsaWRhdG9yKTtcbiAgICAgICogKlxuICAgICAgKiAqXG4gICAgICAqIGZ1bmN0aW9uIHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IoZzogRm9ybUdyb3VwKSB7XG4gICAgICAqIHJldHVybiBnLmdldCgncGFzc3dvcmQnKS52YWx1ZSA9PT0gZy5nZXQoJ3Bhc3N3b3JkQ29uZmlybScpLnZhbHVlXG4gICAgICAqID8gbnVsbCA6IHsnbWlzbWF0Y2gnOiB0cnVlfTtcbiAgICAgICogfVxuICAgICAgKiBgYGBcbiAgICAgICogKlxuICAgICAgKiAqICoqbnBtIHBhY2thZ2UqKjogYEBhbmd1bGFyL2Zvcm1zYFxuICAgICAgKiAqXG4gICAgICovXG4gICAgdmFyIEZvcm1Hcm91cCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQ2KEZvcm1Hcm91cCwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbHNcbiAgICAgICAgICogQHBhcmFtIHs/PX0gdmFsaWRhdG9yXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGFzeW5jVmFsaWRhdG9yXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBGb3JtR3JvdXAoY29udHJvbHMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgPT09IHZvaWQgMCkgeyB2YWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3IgPT09IHZvaWQgMCkgeyBhc3luY1ZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgICAgICAgdGhpcy5jb250cm9scyA9IGNvbnRyb2xzO1xuICAgICAgICAgICAgdGhpcy5faW5pdE9ic2VydmFibGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9zZXRVcENvbnRyb2xzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogIFJlZ2lzdGVycyBhIGNvbnRyb2wgd2l0aCB0aGUgZ3JvdXAncyBsaXN0IG9mIGNvbnRyb2xzLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogVGhpcyBtZXRob2QgZG9lcyBub3QgdXBkYXRlIHZhbHVlIG9yIHZhbGlkaXR5IG9mIHRoZSBjb250cm9sLCBzbyBmb3JcbiAgICAgICAgICAqIG1vc3QgY2FzZXMgeW91J2xsIHdhbnQgdG8gdXNlIHtAbGluayBGb3JtR3JvdXAuYWRkQ29udHJvbH0gaW5zdGVhZC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5yZWdpc3RlckNvbnRyb2wgPSBmdW5jdGlvbiAobmFtZSwgY29udHJvbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNbbmFtZV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHNbbmFtZV07XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzW25hbWVdID0gY29udHJvbDtcbiAgICAgICAgICAgIGNvbnRyb2wuc2V0UGFyZW50KHRoaXMpO1xuICAgICAgICAgICAgY29udHJvbC5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UodGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKTtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIEFkZCBhIGNvbnRyb2wgdG8gdGhpcyBncm91cC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5hZGRDb250cm9sID0gZnVuY3Rpb24gKG5hbWUsIGNvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDb250cm9sKG5hbWUsIGNvbnRyb2wpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBSZW1vdmUgYSBjb250cm9sIGZyb20gdGhpcyBncm91cC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLnJlbW92ZUNvbnRyb2wgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNbbmFtZV0pXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sc1tuYW1lXS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgICAgIGRlbGV0ZSAodGhpcy5jb250cm9sc1tuYW1lXSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFJlcGxhY2UgYW4gZXhpc3RpbmcgY29udHJvbC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5zZXRDb250cm9sID0gZnVuY3Rpb24gKG5hbWUsIGNvbnRyb2wpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2xzW25hbWVdKVxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHNbbmFtZV0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgICAgICBkZWxldGUgKHRoaXMuY29udHJvbHNbbmFtZV0pO1xuICAgICAgICAgICAgaWYgKGNvbnRyb2wpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNvbnRyb2wobmFtZSwgY29udHJvbCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIENoZWNrIHdoZXRoZXIgdGhlcmUgaXMgYW4gZW5hYmxlZCBjb250cm9sIHdpdGggdGhlIGdpdmVuIG5hbWUgaW4gdGhlIGdyb3VwLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogSXQgd2lsbCByZXR1cm4gZmFsc2UgZm9yIGRpc2FibGVkIGNvbnRyb2xzLiBJZiB5b3UnZCBsaWtlIHRvIGNoZWNrIGZvclxuICAgICAgICAgICogZXhpc3RlbmNlIGluIHRoZSBncm91cCBvbmx5LCB1c2Uge0BsaW5rIEFic3RyYWN0Q29udHJvbC5nZXR9IGluc3RlYWQuXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbE5hbWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoY29udHJvbE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmhhc093blByb3BlcnR5KGNvbnRyb2xOYW1lKSAmJiB0aGlzLmNvbnRyb2xzW2NvbnRyb2xOYW1lXS5lbmFibGVkO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFNldHMgdGhlIHZhbHVlIG9mIHRoZSB7QGxpbmsgRm9ybUdyb3VwfS4gSXQgYWNjZXB0cyBhbiBvYmplY3QgdGhhdCBtYXRjaGVzXG4gICAgICAgICAgKiB0aGUgc3RydWN0dXJlIG9mIHRoZSBncm91cCwgd2l0aCBjb250cm9sIG5hbWVzIGFzIGtleXMuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBUaGlzIG1ldGhvZCBwZXJmb3JtcyBzdHJpY3QgY2hlY2tzLCBzbyBpdCB3aWxsIHRocm93IGFuIGVycm9yIGlmIHlvdSB0cnlcbiAgICAgICAgICAqIHRvIHNldCB0aGUgdmFsdWUgb2YgYSBjb250cm9sIHRoYXQgZG9lc24ndCBleGlzdCBvciBpZiB5b3UgZXhjbHVkZSB0aGVcbiAgICAgICAgICAqIHZhbHVlIG9mIGEgY29udHJvbC5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBgYGBcbiAgICAgICAgICAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgICAqIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICAgICAgICAqIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgpXG4gICAgICAgICAgKiB9KTtcbiAgICAgICAgICAqIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogbnVsbCwgbGFzdDogbnVsbH1cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGZvcm0uc2V0VmFsdWUoe2ZpcnN0OiAnTmFuY3knLCBsYXN0OiAnRHJldyd9KTtcbiAgICAgICAgICAqIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogJ05hbmN5JywgbGFzdDogJ0RyZXcnfVxuICAgICAgICAgICogKlxuICAgICAgICAgICogYGBgXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18xXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB0aGlzLl9jaGVja0FsbFZhbHVlc1ByZXNlbnQodmFsdWUpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdGhyb3dJZkNvbnRyb2xNaXNzaW5nKG5hbWUpO1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbnRyb2xzW25hbWVdLnNldFZhbHVlKHZhbHVlW25hbWVdLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBQYXRjaGVzIHRoZSB2YWx1ZSBvZiB0aGUge0BsaW5rIEZvcm1Hcm91cH0uIEl0IGFjY2VwdHMgYW4gb2JqZWN0IHdpdGggY29udHJvbFxuICAgICAgICAgICogbmFtZXMgYXMga2V5cywgYW5kIHdpbGwgZG8gaXRzIGJlc3QgdG8gbWF0Y2ggdGhlIHZhbHVlcyB0byB0aGUgY29ycmVjdCBjb250cm9sc1xuICAgICAgICAgICogaW4gdGhlIGdyb3VwLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogSXQgYWNjZXB0cyBib3RoIHN1cGVyLXNldHMgYW5kIHN1Yi1zZXRzIG9mIHRoZSBncm91cCB3aXRob3V0IHRocm93aW5nIGFuIGVycm9yLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogIyMjIEV4YW1wbGVcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgICogY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgICAgICogZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgpLFxuICAgICAgICAgICogbGFzdDogbmV3IEZvcm1Db250cm9sKClcbiAgICAgICAgICAqIH0pO1xuICAgICAgICAgICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiBudWxsLCBsYXN0OiBudWxsfVxuICAgICAgICAgICogKlxuICAgICAgICAgICogZm9ybS5wYXRjaFZhbHVlKHtmaXJzdDogJ05hbmN5J30pO1xuICAgICAgICAgICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiAnTmFuY3knLCBsYXN0OiBudWxsfVxuICAgICAgICAgICogKlxuICAgICAgICAgICogYGBgXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18xXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLnBhdGNoVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIF9hKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIG9ubHlTZWxmID0gX2Iub25seVNlbGYsIGVtaXRFdmVudCA9IF9iLmVtaXRFdmVudDtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmNvbnRyb2xzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbnRyb2xzW25hbWVdLnBhdGNoVmFsdWUodmFsdWVbbmFtZV0sIHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBSZXNldHMgdGhlIHtAbGluayBGb3JtR3JvdXB9LiBUaGlzIG1lYW5zIGJ5IGRlZmF1bHQ6XG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiAqIFRoZSBncm91cCBhbmQgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHByaXN0aW5lYFxuICAgICAgICAgICogKiBUaGUgZ3JvdXAgYW5kIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGB1bnRvdWNoZWRgXG4gICAgICAgICAgKiAqIFRoZSB2YWx1ZSBvZiBhbGwgZGVzY2VuZGFudHMgd2lsbCBiZSBudWxsIG9yIG51bGwgbWFwc1xuICAgICAgICAgICogKlxuICAgICAgICAgICogWW91IGNhbiBhbHNvIHJlc2V0IHRvIGEgc3BlY2lmaWMgZm9ybSBzdGF0ZSBieSBwYXNzaW5nIGluIGEgbWFwIG9mIHN0YXRlc1xuICAgICAgICAgICogdGhhdCBtYXRjaGVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBmb3JtLCB3aXRoIGNvbnRyb2wgbmFtZXMgYXMga2V5cy4gVGhlIHN0YXRlXG4gICAgICAgICAgKiBjYW4gYmUgYSBzdGFuZGFsb25lIHZhbHVlIG9yIGEgZm9ybSBzdGF0ZSBvYmplY3Qgd2l0aCBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWRcbiAgICAgICAgICAqIHN0YXR1cy5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBgYGB0c1xuICAgICAgICAgICogdGhpcy5mb3JtLnJlc2V0KHtmaXJzdDogJ25hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJ30pO1xuICAgICAgICAgICogKlxuICAgICAgICAgICogY29uc29sZS5sb2codGhpcy5mb3JtLnZhbHVlKTsgIC8vIHtmaXJzdDogJ25hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJ31cbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgICogKlxuICAgICAgICAgICogLSBPUiAtXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBgYGBcbiAgICAgICAgICAqIHRoaXMuZm9ybS5yZXNldCh7XG4gICAgICAgICAgKiBmaXJzdDoge3ZhbHVlOiAnbmFtZScsIGRpc2FibGVkOiB0cnVlfSxcbiAgICAgICAgICAqIGxhc3Q6ICdsYXN0J1xuICAgICAgICAgICogfSk7XG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBjb25zb2xlLmxvZyh0aGlzLmZvcm0udmFsdWUpOyAgLy8ge2ZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfVxuICAgICAgICAgICogY29uc29sZS5sb2codGhpcy5mb3JtLmdldCgnZmlyc3QnKS5zdGF0dXMpOyAgLy8gJ0RJU0FCTEVEJ1xuICAgICAgICAgICogYGBgXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICh2YWx1ZSwgX2EpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7IHZhbHVlID0ge307IH1cbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wsIG5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sLnJlc2V0KHZhbHVlW25hbWVdLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVByaXN0aW5lKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVG91Y2hlZCh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBUaGUgYWdncmVnYXRlIHZhbHVlIG9mIHRoZSB7QGxpbmsgRm9ybUdyb3VwfSwgaW5jbHVkaW5nIGFueSBkaXNhYmxlZCBjb250cm9scy5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIElmIHlvdSdkIGxpa2UgdG8gaW5jbHVkZSBhbGwgdmFsdWVzIHJlZ2FyZGxlc3Mgb2YgZGlzYWJsZWQgc3RhdHVzLCB1c2UgdGhpcyBtZXRob2QuXG4gICAgICAgICAgKiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIHByb3BlcnR5IGlzIHRoZSBiZXN0IHdheSB0byBnZXQgdGhlIHZhbHVlIG9mIHRoZSBncm91cC5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuZ2V0UmF3VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVkdWNlQ2hpbGRyZW4oe30sIGZ1bmN0aW9uIChhY2MsIGNvbnRyb2wsIG5hbWUpIHtcbiAgICAgICAgICAgICAgICBhY2NbbmFtZV0gPSBjb250cm9sLnZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5fdGhyb3dJZkNvbnRyb2xNaXNzaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXModGhpcy5jb250cm9scykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgICBUaGVyZSBhcmUgbm8gZm9ybSBjb250cm9scyByZWdpc3RlcmVkIHdpdGggdGhpcyBncm91cCB5ZXQuICBJZiB5b3UncmUgdXNpbmcgbmdNb2RlbCxcXG4gICAgICAgIHlvdSBtYXkgd2FudCB0byBjaGVjayBuZXh0IHRpY2sgKGUuZy4gdXNlIHNldFRpbWVvdXQpLlxcbiAgICAgIFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5jb250cm9sc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIGZvcm0gY29udHJvbCB3aXRoIG5hbWU6IFwiICsgbmFtZSArIFwiLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX2ZvckVhY2hDaGlsZCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgcmV0dXJuIGNiKF90aGlzLmNvbnRyb2xzW2tdLCBrKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5fc2V0VXBDb250cm9scyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sLnNldFBhcmVudChfdGhpcyk7XG4gICAgICAgICAgICAgICAgY29udHJvbC5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoX3RoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLl91cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fdmFsdWUgPSB0aGlzLl9yZWR1Y2VWYWx1ZSgpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb25kaXRpb25cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX2FueUNvbnRyb2xzID0gZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gcmVzIHx8IChfdGhpcy5jb250YWlucyhuYW1lKSAmJiBjb25kaXRpb24oY29udHJvbCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX3JlZHVjZVZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWR1Y2VDaGlsZHJlbih7fSwgZnVuY3Rpb24gKGFjYywgY29udHJvbCwgbmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9sLmVuYWJsZWQgfHwgX3RoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjW25hbWVdID0gY29udHJvbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbml0VmFsdWVcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5fcmVkdWNlQ2hpbGRyZW4gPSBmdW5jdGlvbiAoaW5pdFZhbHVlLCBmbikge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcmVzID0gaW5pdFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBuYW1lKSB7IHJlcyA9IGZuKHJlcywgY29udHJvbCwgbmFtZSk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLl9hbGxDb250cm9sc0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBjb250cm9sTmFtZSA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250cm9sc1tjb250cm9sTmFtZV0uZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpLmxlbmd0aCA+IDAgfHwgdGhpcy5kaXNhYmxlZDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX2NoZWNrQWxsVmFsdWVzUHJlc2VudCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBzdXBwbHkgYSB2YWx1ZSBmb3IgZm9ybSBjb250cm9sIHdpdGggbmFtZTogJ1wiICsgbmFtZSArIFwiJy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBGb3JtR3JvdXA7XG4gICAgfShBYnN0cmFjdENvbnRyb2wpKTtcbiAgICAvKipcbiAgICAgKiAgaW5zdGFuY2VzLlxuICAgICAgKiAqXG4gICAgICAqIEEgYEZvcm1BcnJheWAgYWdncmVnYXRlcyB0aGUgdmFsdWVzIG9mIGVhY2ggY2hpbGQge0BsaW5rIEZvcm1Db250cm9sfSBpbnRvIGFuIGFycmF5LlxuICAgICAgKiBJdCBjYWxjdWxhdGVzIGl0cyBzdGF0dXMgYnkgcmVkdWNpbmcgdGhlIHN0YXR1c2VzIG9mIGl0cyBjaGlsZHJlbi4gRm9yIGV4YW1wbGUsIGlmIG9uZSBvZlxuICAgICAgKiB0aGUgY29udHJvbHMgaW4gYSBgRm9ybUFycmF5YCBpcyBpbnZhbGlkLCB0aGUgZW50aXJlIGFycmF5IGJlY29tZXMgaW52YWxpZC5cbiAgICAgICogKlxuICAgICAgKiBgRm9ybUFycmF5YCBpcyBvbmUgb2YgdGhlIHRocmVlIGZ1bmRhbWVudGFsIGJ1aWxkaW5nIGJsb2NrcyB1c2VkIHRvIGRlZmluZSBmb3JtcyBpbiBBbmd1bGFyLFxuICAgICAgKiBhbG9uZyB3aXRoIHtAbGluayBGb3JtQ29udHJvbH0gYW5kIHtAbGluayBGb3JtR3JvdXB9LlxuICAgICAgKiAqXG4gICAgICAqICpcbiAgICAgICogV2hlbiBpbnN0YW50aWF0aW5nIGEge0BsaW5rIEZvcm1BcnJheX0sIHBhc3MgaW4gYW4gYXJyYXkgb2YgY2hpbGQgY29udHJvbHMgYXMgdGhlIGZpcnN0XG4gICAgICAqIGFyZ3VtZW50LlxuICAgICAgKiAqXG4gICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAqICpcbiAgICAgICogYGBgXG4gICAgICAqIGNvbnN0IGFyciA9IG5ldyBGb3JtQXJyYXkoW1xuICAgICAgKiBuZXcgRm9ybUNvbnRyb2woJ05hbmN5JywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMikpLFxuICAgICAgKiBuZXcgRm9ybUNvbnRyb2woJ0RyZXcnKSxcbiAgICAgICogXSk7XG4gICAgICAqICpcbiAgICAgICogY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbJ05hbmN5JywgJ0RyZXcnXVxuICAgICAgKiBjb25zb2xlLmxvZyhhcnIuc3RhdHVzKTsgIC8vICdWQUxJRCdcbiAgICAgICogYGBgXG4gICAgICAqICpcbiAgICAgICogWW91IGNhbiBhbHNvIGluY2x1ZGUgYXJyYXktbGV2ZWwgdmFsaWRhdG9ycyBhcyB0aGUgc2Vjb25kIGFyZywgb3IgYXJyYXktbGV2ZWwgYXN5bmNcbiAgICAgICogdmFsaWRhdG9ycyBhcyB0aGUgdGhpcmQgYXJnLiBUaGVzZSBjb21lIGluIGhhbmR5IHdoZW4geW91IHdhbnQgdG8gcGVyZm9ybSB2YWxpZGF0aW9uXG4gICAgICAqIHRoYXQgY29uc2lkZXJzIHRoZSB2YWx1ZSBvZiBtb3JlIHRoYW4gb25lIGNoaWxkIGNvbnRyb2wuXG4gICAgICAqICpcbiAgICAgICogIyMjIEFkZGluZyBvciByZW1vdmluZyBjb250cm9sc1xuICAgICAgKiAqXG4gICAgICAqIFRvIGNoYW5nZSB0aGUgY29udHJvbHMgaW4gdGhlIGFycmF5LCB1c2UgdGhlIGBwdXNoYCwgYGluc2VydGAsIG9yIGByZW1vdmVBdGAgbWV0aG9kc1xuICAgICAgKiBpbiBgRm9ybUFycmF5YCBpdHNlbGYuIFRoZXNlIG1ldGhvZHMgZW5zdXJlIHRoZSBjb250cm9scyBhcmUgcHJvcGVybHkgdHJhY2tlZCBpbiB0aGVcbiAgICAgICogZm9ybSdzIGhpZXJhcmNoeS4gRG8gbm90IG1vZGlmeSB0aGUgYXJyYXkgb2YgYEFic3RyYWN0Q29udHJvbGBzIHVzZWQgdG8gaW5zdGFudGlhdGVcbiAgICAgICogdGhlIGBGb3JtQXJyYXlgIGRpcmVjdGx5LCBhcyB0aGF0IHdpbGwgcmVzdWx0IGluIHN0cmFuZ2UgYW5kIHVuZXhwZWN0ZWQgYmVoYXZpb3Igc3VjaFxuICAgICAgKiBhcyBicm9rZW4gY2hhbmdlIGRldGVjdGlvbi5cbiAgICAgICogKlxuICAgICAgKiAqICoqbnBtIHBhY2thZ2UqKjogYEBhbmd1bGFyL2Zvcm1zYFxuICAgICAgKiAqXG4gICAgICovXG4gICAgdmFyIEZvcm1BcnJheSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQ2KEZvcm1BcnJheSwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbHNcbiAgICAgICAgICogQHBhcmFtIHs/PX0gdmFsaWRhdG9yXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGFzeW5jVmFsaWRhdG9yXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBGb3JtQXJyYXkoY29udHJvbHMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgPT09IHZvaWQgMCkgeyB2YWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3IgPT09IHZvaWQgMCkgeyBhc3luY1ZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgICAgICAgdGhpcy5jb250cm9scyA9IGNvbnRyb2xzO1xuICAgICAgICAgICAgdGhpcy5faW5pdE9ic2VydmFibGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9zZXRVcENvbnRyb2xzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogIEdldCB0aGUge0BsaW5rIEFic3RyYWN0Q29udHJvbH0gYXQgdGhlIGdpdmVuIGBpbmRleGAgaW4gdGhlIGFycmF5LlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLmF0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiB0aGlzLmNvbnRyb2xzW2luZGV4XTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBJbnNlcnQgYSBuZXcge0BsaW5rIEFic3RyYWN0Q29udHJvbH0gYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdGVyQ29udHJvbChjb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgSW5zZXJ0IGEgbmV3IHtAbGluayBBYnN0cmFjdENvbnRyb2x9IGF0IHRoZSBnaXZlbiBgaW5kZXhgIGluIHRoZSBhcnJheS5cbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKGluZGV4LCBjb250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnNwbGljZShpbmRleCwgMCwgY29udHJvbCk7XG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RlckNvbnRyb2woY29udHJvbCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFJlbW92ZSB0aGUgY29udHJvbCBhdCB0aGUgZ2l2ZW4gYGluZGV4YCBpbiB0aGUgYXJyYXkuXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUucmVtb3ZlQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2xzW2luZGV4XSlcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzW2luZGV4XS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUmVwbGFjZSBhbiBleGlzdGluZyBjb250cm9sLlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5zZXRDb250cm9sID0gZnVuY3Rpb24gKGluZGV4LCBjb250cm9sKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sc1tpbmRleF0pXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sc1tpbmRleF0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHMuc3BsaWNlKGluZGV4LCAwLCBjb250cm9sKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWdpc3RlckNvbnRyb2woY29udHJvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUFycmF5LnByb3RvdHlwZSwgXCJsZW5ndGhcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgTGVuZ3RoIG9mIHRoZSBjb250cm9sIGFycmF5LlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2xzLmxlbmd0aDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHtAbGluayBGb3JtQXJyYXl9LiBJdCBhY2NlcHRzIGFuIGFycmF5IHRoYXQgbWF0Y2hlc1xuICAgICAgICAgICogdGhlIHN0cnVjdHVyZSBvZiB0aGUgY29udHJvbC5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIFRoaXMgbWV0aG9kIHBlcmZvcm1zIHN0cmljdCBjaGVja3MsIHNvIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgeW91IHRyeVxuICAgICAgICAgICogdG8gc2V0IHRoZSB2YWx1ZSBvZiBhIGNvbnRyb2wgdGhhdCBkb2Vzbid0IGV4aXN0IG9yIGlmIHlvdSBleGNsdWRlIHRoZVxuICAgICAgICAgICogdmFsdWUgb2YgYSBjb250cm9sLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogIyMjIEV4YW1wbGVcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgICogY29uc3QgYXJyID0gbmV3IEZvcm1BcnJheShbXG4gICAgICAgICAgKiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICAgICAgICAqIG5ldyBGb3JtQ29udHJvbCgpXG4gICAgICAgICAgKiBdKTtcbiAgICAgICAgICAqIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gW251bGwsIG51bGxdXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBhcnIuc2V0VmFsdWUoWydOYW5jeScsICdEcmV3J10pO1xuICAgICAgICAgICogY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbJ05hbmN5JywgJ0RyZXcnXVxuICAgICAgICAgICogYGBgXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18xXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB0aGlzLl9jaGVja0FsbFZhbHVlc1ByZXNlbnQodmFsdWUpO1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAobmV3VmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3Rocm93SWZDb250cm9sTWlzc2luZyhpbmRleCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuYXQoaW5kZXgpLnNldFZhbHVlKG5ld1ZhbHVlLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBQYXRjaGVzIHRoZSB2YWx1ZSBvZiB0aGUge0BsaW5rIEZvcm1BcnJheX0uIEl0IGFjY2VwdHMgYW4gYXJyYXkgdGhhdCBtYXRjaGVzIHRoZVxuICAgICAgICAgICogc3RydWN0dXJlIG9mIHRoZSBjb250cm9sLCBhbmQgd2lsbCBkbyBpdHMgYmVzdCB0byBtYXRjaCB0aGUgdmFsdWVzIHRvIHRoZSBjb3JyZWN0XG4gICAgICAgICAgKiBjb250cm9scyBpbiB0aGUgZ3JvdXAuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBJdCBhY2NlcHRzIGJvdGggc3VwZXItc2V0cyBhbmQgc3ViLXNldHMgb2YgdGhlIGFycmF5IHdpdGhvdXQgdGhyb3dpbmcgYW4gZXJyb3IuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgICAgICogKlxuICAgICAgICAgICogYGBgXG4gICAgICAgICAgKiBjb25zdCBhcnIgPSBuZXcgRm9ybUFycmF5KFtcbiAgICAgICAgICAqIG5ldyBGb3JtQ29udHJvbCgpLFxuICAgICAgICAgICogbmV3IEZvcm1Db250cm9sKClcbiAgICAgICAgICAqIF0pO1xuICAgICAgICAgICogY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbbnVsbCwgbnVsbF1cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGFyci5wYXRjaFZhbHVlKFsnTmFuY3knXSk7XG4gICAgICAgICAgKiBjb25zb2xlLmxvZyhhcnIudmFsdWUpOyAgIC8vIFsnTmFuY3knLCBudWxsXVxuICAgICAgICAgICogYGBgXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18xXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLnBhdGNoVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIF9hKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIG9ubHlTZWxmID0gX2Iub25seVNlbGYsIGVtaXRFdmVudCA9IF9iLmVtaXRFdmVudDtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKG5ld1ZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5hdChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYXQoaW5kZXgpLnBhdGNoVmFsdWUobmV3VmFsdWUsIHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBSZXNldHMgdGhlIHtAbGluayBGb3JtQXJyYXl9LiBUaGlzIG1lYW5zIGJ5IGRlZmF1bHQ6XG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiAqIFRoZSBhcnJheSBhbmQgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHByaXN0aW5lYFxuICAgICAgICAgICogKiBUaGUgYXJyYXkgYW5kIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGB1bnRvdWNoZWRgXG4gICAgICAgICAgKiAqIFRoZSB2YWx1ZSBvZiBhbGwgZGVzY2VuZGFudHMgd2lsbCBiZSBudWxsIG9yIG51bGwgbWFwc1xuICAgICAgICAgICogKlxuICAgICAgICAgICogWW91IGNhbiBhbHNvIHJlc2V0IHRvIGEgc3BlY2lmaWMgZm9ybSBzdGF0ZSBieSBwYXNzaW5nIGluIGFuIGFycmF5IG9mIHN0YXRlc1xuICAgICAgICAgICogdGhhdCBtYXRjaGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGNvbnRyb2wuIFRoZSBzdGF0ZSBjYW4gYmUgYSBzdGFuZGFsb25lIHZhbHVlXG4gICAgICAgICAgKiBvciBhIGZvcm0gc3RhdGUgb2JqZWN0IHdpdGggYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkIHN0YXR1cy5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBgYGB0c1xuICAgICAgICAgICogdGhpcy5hcnIucmVzZXQoWyduYW1lJywgJ2xhc3QgbmFtZSddKTtcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuYXJyLnZhbHVlKTsgIC8vIFsnbmFtZScsICdsYXN0IG5hbWUnXVxuICAgICAgICAgICogYGBgXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiAtIE9SIC1cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgICogdGhpcy5hcnIucmVzZXQoW1xuICAgICAgICAgICoge3ZhbHVlOiAnbmFtZScsIGRpc2FibGVkOiB0cnVlfSxcbiAgICAgICAgICAqICdsYXN0J1xuICAgICAgICAgICogXSk7XG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBjb25zb2xlLmxvZyh0aGlzLmFyci52YWx1ZSk7ICAvLyBbJ25hbWUnLCAnbGFzdCBuYW1lJ11cbiAgICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuYXJyLmdldCgwKS5zdGF0dXMpOyAgLy8gJ0RJU0FCTEVEJ1xuICAgICAgICAgICogYGBgXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICh2YWx1ZSwgX2EpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7IHZhbHVlID0gW107IH1cbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5yZXNldCh2YWx1ZVtpbmRleF0sIHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogb25seVNlbGYsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUHJpc3RpbmUoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVUb3VjaGVkKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgdGhlIGFycmF5LCBpbmNsdWRpbmcgYW55IGRpc2FibGVkIGNvbnRyb2xzLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogSWYgeW91J2QgbGlrZSB0byBpbmNsdWRlIGFsbCB2YWx1ZXMgcmVnYXJkbGVzcyBvZiBkaXNhYmxlZCBzdGF0dXMsIHVzZSB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAqIE90aGVyd2lzZSwgdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgdGhlIGJlc3Qgd2F5IHRvIGdldCB0aGUgdmFsdWUgb2YgdGhlIGFycmF5LlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5nZXRSYXdWYWx1ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbHMubWFwKGZ1bmN0aW9uIChjb250cm9sKSB7IHJldHVybiBjb250cm9sLnZhbHVlOyB9KTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuX3Rocm93SWZDb250cm9sTWlzc2luZyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRyb2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgICAgVGhlcmUgYXJlIG5vIGZvcm0gY29udHJvbHMgcmVnaXN0ZXJlZCB3aXRoIHRoaXMgYXJyYXkgeWV0LiAgSWYgeW91J3JlIHVzaW5nIG5nTW9kZWwsXFxuICAgICAgICB5b3UgbWF5IHdhbnQgdG8gY2hlY2sgbmV4dCB0aWNrIChlLmcuIHVzZSBzZXRUaW1lb3V0KS5cXG4gICAgICBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuYXQoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgZm9ybSBjb250cm9sIGF0IGluZGV4IFwiICsgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjYlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5fZm9yRWFjaENoaWxkID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLmZvckVhY2goZnVuY3Rpb24gKGNvbnRyb2wsIGluZGV4KSB7IGNiKGNvbnRyb2wsIGluZGV4KTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5fdXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLmNvbnRyb2xzLmZpbHRlcihmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gY29udHJvbC5lbmFibGVkIHx8IF90aGlzLmRpc2FibGVkOyB9KVxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGNvbnRyb2wpIHsgcmV0dXJuIGNvbnRyb2wudmFsdWU7IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb25kaXRpb25cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuX2FueUNvbnRyb2xzID0gZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHMuc29tZShmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gY29udHJvbC5lbmFibGVkICYmIGNvbmRpdGlvbihjb250cm9sKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5fc2V0VXBDb250cm9scyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wpIHsgcmV0dXJuIF90aGlzLl9yZWdpc3RlckNvbnRyb2woY29udHJvbCk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5fY2hlY2tBbGxWYWx1ZXNQcmVzZW50ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wsIGkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IHN1cHBseSBhIHZhbHVlIGZvciBmb3JtIGNvbnRyb2wgYXQgaW5kZXg6IFwiICsgaSArIFwiLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl9hbGxDb250cm9sc0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuY29udHJvbHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRyb2wgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZW5hYmxlZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHMubGVuZ3RoID4gMCB8fCB0aGlzLmRpc2FibGVkO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl9yZWdpc3RlckNvbnRyb2wgPSBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgY29udHJvbC5zZXRQYXJlbnQodGhpcyk7XG4gICAgICAgICAgICBjb250cm9sLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSh0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUFycmF5O1xuICAgIH0oQWJzdHJhY3RDb250cm9sKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQ0ID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZm9ybURpcmVjdGl2ZVByb3ZpZGVyID0ge1xuICAgICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE5nRm9ybTsgfSlcbiAgICB9O1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlc29sdmVkUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAvKipcbiAgICAgKiAgdG8gdHJhY2sgYWdncmVnYXRlIGZvcm0gdmFsdWUgYW5kIHZhbGlkYXRpb24gc3RhdHVzLlxuICAgICAgKiAqXG4gICAgICAqICpcbiAgICAgICogQXMgc29vbiBhcyB5b3UgaW1wb3J0IHRoZSBgRm9ybXNNb2R1bGVgLCB0aGlzIGRpcmVjdGl2ZSBiZWNvbWVzIGFjdGl2ZSBieSBkZWZhdWx0IG9uXG4gICAgICAqIGFsbCBgPGZvcm0+YCB0YWdzLiAgWW91IGRvbid0IG5lZWQgdG8gYWRkIGEgc3BlY2lhbCBzZWxlY3Rvci5cbiAgICAgICogKlxuICAgICAgKiBZb3UgY2FuIGV4cG9ydCB0aGUgZGlyZWN0aXZlIGludG8gYSBsb2NhbCB0ZW1wbGF0ZSB2YXJpYWJsZSB1c2luZyBgbmdGb3JtYCBhcyB0aGUga2V5XG4gICAgICAqIChleDogYCNteUZvcm09XCJuZ0Zvcm1cImApLiBUaGlzIGlzIG9wdGlvbmFsLCBidXQgdXNlZnVsLiAgTWFueSBwcm9wZXJ0aWVzIGZyb20gdGhlIHVuZGVybHlpbmdcbiAgICAgICoge0BsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UgYXJlIGR1cGxpY2F0ZWQgb24gdGhlIGRpcmVjdGl2ZSBpdHNlbGYsIHNvIGEgcmVmZXJlbmNlIHRvIGl0XG4gICAgICAqIHdpbGwgZ2l2ZSB5b3UgYWNjZXNzIHRvIHRoZSBhZ2dyZWdhdGUgdmFsdWUgYW5kIHZhbGlkaXR5IHN0YXR1cyBvZiB0aGUgZm9ybSwgYXMgd2VsbCBhc1xuICAgICAgKiB1c2VyIGludGVyYWN0aW9uIHByb3BlcnRpZXMgbGlrZSBgZGlydHlgIGFuZCBgdG91Y2hlZGAuXG4gICAgICAqICpcbiAgICAgICogVG8gcmVnaXN0ZXIgY2hpbGQgY29udHJvbHMgd2l0aCB0aGUgZm9ybSwgeW91J2xsIHdhbnQgdG8gdXNlIHtAbGluayBOZ01vZGVsfSB3aXRoIGFcbiAgICAgICogYG5hbWVgIGF0dHJpYnV0ZS4gIFlvdSBjYW4gYWxzbyB1c2Uge0BsaW5rIE5nTW9kZWxHcm91cH0gaWYgeW91J2QgbGlrZSB0byBjcmVhdGVcbiAgICAgICogc3ViLWdyb3VwcyB3aXRoaW4gdGhlIGZvcm0uXG4gICAgICAqICpcbiAgICAgICogWW91IGNhbiBsaXN0ZW4gdG8gdGhlIGRpcmVjdGl2ZSdzIGBuZ1N1Ym1pdGAgZXZlbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdXNlciBoYXNcbiAgICAgICogdHJpZ2dlcmVkIGEgZm9ybSBzdWJtaXNzaW9uLiBUaGUgYG5nU3VibWl0YCBldmVudCB3aWxsIGJlIGVtaXR0ZWQgd2l0aCB0aGUgb3JpZ2luYWwgZm9ybVxuICAgICAgKiBzdWJtaXNzaW9uIGV2ZW50LlxuICAgICAgKiAqXG4gICAgICAqIHtAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtL3NpbXBsZV9mb3JtX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAgKiAqXG4gICAgICAqICogKipucG0gcGFja2FnZSoqOiBgQGFuZ3VsYXIvZm9ybXNgXG4gICAgICAqICpcbiAgICAgICogKiAqKk5nTW9kdWxlKio6IGBGb3Jtc01vZHVsZWBcbiAgICAgICogKlxuICAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIE5nRm9ybSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQ0KE5nRm9ybSwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAgICAgKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gTmdGb3JtKHZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycykge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubmdTdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLmZvcm0gPVxuICAgICAgICAgICAgICAgIG5ldyBGb3JtR3JvdXAoe30sIGNvbXBvc2VWYWxpZGF0b3JzKHZhbGlkYXRvcnMpLCBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKGFzeW5jVmFsaWRhdG9ycykpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0Zvcm0ucHJvdG90eXBlLCBcInN1Ym1pdHRlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3VibWl0dGVkOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nRm9ybS5wcm90b3R5cGUsIFwiZm9ybURpcmVjdGl2ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0Zvcm0ucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0Zvcm0ucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nRm9ybS5wcm90b3R5cGUsIFwiY29udHJvbHNcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sczsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5hZGRDb250cm9sID0gZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250YWluZXIgPSBfdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICAgICAgICAgICAgZGlyLl9jb250cm9sID0gKGNvbnRhaW5lci5yZWdpc3RlckNvbnRyb2woZGlyLm5hbWUsIGRpci5jb250cm9sKSk7XG4gICAgICAgICAgICAgICAgc2V0VXBDb250cm9sKGRpci5jb250cm9sLCBkaXIpO1xuICAgICAgICAgICAgICAgIGRpci5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5nZXRDb250cm9sID0gZnVuY3Rpb24gKGRpcikgeyByZXR1cm4gKHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLnJlbW92ZUNvbnRyb2wgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNvbnRhaW5lciA9IF90aGlzLl9maW5kQ29udGFpbmVyKGRpci5wYXRoKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDb250cm9sKGRpci5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLmFkZEZvcm1Hcm91cCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXNvbHZlZFByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udGFpbmVyID0gX3RoaXMuX2ZpbmRDb250YWluZXIoZGlyLnBhdGgpO1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XG4gICAgICAgICAgICAgICAgc2V0VXBGb3JtQ29udGFpbmVyKGdyb3VwLCBkaXIpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZWdpc3RlckNvbnRyb2woZGlyLm5hbWUsIGdyb3VwKTtcbiAgICAgICAgICAgICAgICBncm91cC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUucmVtb3ZlRm9ybUdyb3VwID0gZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250YWluZXIgPSBfdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ29udHJvbChkaXIubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5nZXRGb3JtR3JvdXAgPSBmdW5jdGlvbiAoZGlyKSB7IHJldHVybiAodGhpcy5mb3JtLmdldChkaXIucGF0aCkpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS51cGRhdGVNb2RlbCA9IGZ1bmN0aW9uIChkaXIsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGN0cmwgPSAoX3RoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKTtcbiAgICAgICAgICAgICAgICBjdHJsLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSAkZXZlbnRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uZ1N1Ym1pdC5lbWl0KCRldmVudCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5vblJlc2V0ID0gZnVuY3Rpb24gKCkgeyB0aGlzLnJlc2V0Rm9ybSgpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/PX0gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUucmVzZXRGb3JtID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9IHVuZGVmaW5lZDsgfVxuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBwYXRoXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLl9maW5kQ29udGFpbmVyID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgICAgIHBhdGgucG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gcGF0aC5sZW5ndGggPyAodGhpcy5mb3JtLmdldChwYXRoKSkgOiB0aGlzLmZvcm07XG4gICAgICAgIH07XG4gICAgICAgIE5nRm9ybS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybTpub3QoW25nTm9Gb3JtXSk6bm90KFtmb3JtR3JvdXBdKSxuZ0Zvcm0sW25nRm9ybV0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbZm9ybURpcmVjdGl2ZVByb3ZpZGVyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhzdWJtaXQpJzogJ29uU3VibWl0KCRldmVudCknLCAnKHJlc2V0KSc6ICdvblJlc2V0KCknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRzOiBbJ25nU3VibWl0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRBczogJ25nRm9ybSdcbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBOZ0Zvcm0uY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIHJldHVybiBOZ0Zvcm07XG4gICAgfShDb250cm9sQ29udGFpbmVyKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gRXhhbXBsZXMgPSB7XG4gICAgICAgIGZvcm1Db250cm9sTmFtZTogXCJcXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cXFwibXlHcm91cFxcXCI+XFxuICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cXFwiZmlyc3ROYW1lXFxcIj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIEluIHlvdXIgY2xhc3M6XFxuXFxuICAgIHRoaXMubXlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xcbiAgICAgICBmaXJzdE5hbWU6IG5ldyBGb3JtQ29udHJvbCgpXFxuICAgIH0pO1wiLFxuICAgICAgICBmb3JtR3JvdXBOYW1lOiBcIlxcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVxcXCJteUdyb3VwXFxcIj5cXG4gICAgICAgPGRpdiBmb3JtR3JvdXBOYW1lPVxcXCJwZXJzb25cXFwiPlxcbiAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVxcXCJmaXJzdE5hbWVcXFwiPlxcbiAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIEluIHlvdXIgY2xhc3M6XFxuXFxuICAgIHRoaXMubXlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xcbiAgICAgICBwZXJzb246IG5ldyBGb3JtR3JvdXAoeyBmaXJzdE5hbWU6IG5ldyBGb3JtQ29udHJvbCgpIH0pXFxuICAgIH0pO1wiLFxuICAgICAgICBmb3JtQXJyYXlOYW1lOiBcIlxcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVxcXCJteUdyb3VwXFxcIj5cXG4gICAgICA8ZGl2IGZvcm1BcnJheU5hbWU9XFxcImNpdGllc1xcXCI+XFxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IGNpdHkgb2YgY2l0eUFycmF5LmNvbnRyb2xzOyBsZXQgaT1pbmRleFxcXCI+XFxuICAgICAgICAgIDxpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cXFwiaVxcXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIEluIHlvdXIgY2xhc3M6XFxuXFxuICAgIHRoaXMuY2l0eUFycmF5ID0gbmV3IEZvcm1BcnJheShbbmV3IEZvcm1Db250cm9sKCdTRicpXSk7XFxuICAgIHRoaXMubXlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xcbiAgICAgIGNpdGllczogdGhpcy5jaXR5QXJyYXlcXG4gICAgfSk7XCIsXG4gICAgICAgIG5nTW9kZWxHcm91cDogXCJcXG4gICAgPGZvcm0+XFxuICAgICAgIDxkaXYgbmdNb2RlbEdyb3VwPVxcXCJwZXJzb25cXFwiPlxcbiAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcInBlcnNvbi5uYW1lXFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiPlxcbiAgICAgICA8L2Rpdj5cXG4gICAgPC9mb3JtPlwiLFxuICAgICAgICBuZ01vZGVsV2l0aEZvcm1Hcm91cDogXCJcXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cXFwibXlHcm91cFxcXCI+XFxuICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XFxcImZpcnN0TmFtZVxcXCI+XFxuICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwic2hvd01vcmVDb250cm9sc1xcXCIgW25nTW9kZWxPcHRpb25zXT1cXFwie3N0YW5kYWxvbmU6IHRydWV9XFxcIj5cXG4gICAgPC9kaXY+XFxuICBcIlxuICAgIH07XG5cbiAgICB2YXIgVGVtcGxhdGVEcml2ZW5FcnJvcnMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBUZW1wbGF0ZURyaXZlbkVycm9ycygpIHtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLm1vZGVsUGFyZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgbmdNb2RlbCBjYW5ub3QgYmUgdXNlZCB0byByZWdpc3RlciBmb3JtIGNvbnRyb2xzIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS4gIFRyeSB1c2luZ1xcbiAgICAgIGZvcm1Hcm91cCdzIHBhcnRuZXIgZGlyZWN0aXZlIFxcXCJmb3JtQ29udHJvbE5hbWVcXFwiIGluc3RlYWQuICBFeGFtcGxlOlxcblxcbiAgICAgIFwiICsgRXhhbXBsZXMuZm9ybUNvbnRyb2xOYW1lICsgXCJcXG5cXG4gICAgICBPciwgaWYgeW91J2QgbGlrZSB0byBhdm9pZCByZWdpc3RlcmluZyB0aGlzIGZvcm0gY29udHJvbCwgaW5kaWNhdGUgdGhhdCBpdCdzIHN0YW5kYWxvbmUgaW4gbmdNb2RlbE9wdGlvbnM6XFxuXFxuICAgICAgRXhhbXBsZTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLm5nTW9kZWxXaXRoRm9ybUdyb3VwKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5mb3JtR3JvdXBOYW1lRXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgbmdNb2RlbCBjYW5ub3QgYmUgdXNlZCB0byByZWdpc3RlciBmb3JtIGNvbnRyb2xzIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwTmFtZSBvciBmb3JtQXJyYXlOYW1lIGRpcmVjdGl2ZS5cXG5cXG4gICAgICBPcHRpb24gMTogVXNlIGZvcm1Db250cm9sTmFtZSBpbnN0ZWFkIG9mIG5nTW9kZWwgKHJlYWN0aXZlIHN0cmF0ZWd5KTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLmZvcm1Hcm91cE5hbWUgKyBcIlxcblxcbiAgICAgIE9wdGlvbiAyOiAgVXBkYXRlIG5nTW9kZWwncyBwYXJlbnQgYmUgbmdNb2RlbEdyb3VwICh0ZW1wbGF0ZS1kcml2ZW4gc3RyYXRlZ3kpOlxcblxcbiAgICAgIFwiICsgRXhhbXBsZXMubmdNb2RlbEdyb3VwKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5taXNzaW5nTmFtZUV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIklmIG5nTW9kZWwgaXMgdXNlZCB3aXRoaW4gYSBmb3JtIHRhZywgZWl0aGVyIHRoZSBuYW1lIGF0dHJpYnV0ZSBtdXN0IGJlIHNldCBvciB0aGUgZm9ybVxcbiAgICAgIGNvbnRyb2wgbXVzdCBiZSBkZWZpbmVkIGFzICdzdGFuZGFsb25lJyBpbiBuZ01vZGVsT3B0aW9ucy5cXG5cXG4gICAgICBFeGFtcGxlIDE6IDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwicGVyc29uLmZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3RcXFwiPlxcbiAgICAgIEV4YW1wbGUgMjogPGlucHV0IFsobmdNb2RlbCldPVxcXCJwZXJzb24uZmlyc3ROYW1lXFxcIiBbbmdNb2RlbE9wdGlvbnNdPVxcXCJ7c3RhbmRhbG9uZTogdHJ1ZX1cXFwiPlwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5tb2RlbEdyb3VwUGFyZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgbmdNb2RlbEdyb3VwIGNhbm5vdCBiZSB1c2VkIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS5cXG5cXG4gICAgICBPcHRpb24gMTogVXNlIGZvcm1Hcm91cE5hbWUgaW5zdGVhZCBvZiBuZ01vZGVsR3JvdXAgKHJlYWN0aXZlIHN0cmF0ZWd5KTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLmZvcm1Hcm91cE5hbWUgKyBcIlxcblxcbiAgICAgIE9wdGlvbiAyOiAgVXNlIGEgcmVndWxhciBmb3JtIHRhZyBpbnN0ZWFkIG9mIHRoZSBmb3JtR3JvdXAgZGlyZWN0aXZlICh0ZW1wbGF0ZS1kcml2ZW4gc3RyYXRlZ3kpOlxcblxcbiAgICAgIFwiICsgRXhhbXBsZXMubmdNb2RlbEdyb3VwKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFRlbXBsYXRlRHJpdmVuRXJyb3JzO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQ4ID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbW9kZWxHcm91cFByb3ZpZGVyID0ge1xuICAgICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE5nTW9kZWxHcm91cDsgfSlcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICAqXG4gICAgICAqICpcbiAgICAgICogVGhpcyBkaXJlY3RpdmUgY2FuIG9ubHkgYmUgdXNlZCBhcyBhIGNoaWxkIG9mIHtAbGluayBOZ0Zvcm19IChvciBpbiBvdGhlciB3b3JkcyxcbiAgICAgICogd2l0aGluIGA8Zm9ybT5gIHRhZ3MpLlxuICAgICAgKiAqXG4gICAgICAqIFVzZSB0aGlzIGRpcmVjdGl2ZSBpZiB5b3UnZCBsaWtlIHRvIGNyZWF0ZSBhIHN1Yi1ncm91cCB3aXRoaW4gYSBmb3JtLiBUaGlzIGNhblxuICAgICAgKiBjb21lIGluIGhhbmR5IGlmIHlvdSB3YW50IHRvIHZhbGlkYXRlIGEgc3ViLWdyb3VwIG9mIHlvdXIgZm9ybSBzZXBhcmF0ZWx5IGZyb21cbiAgICAgICogdGhlIHJlc3Qgb2YgeW91ciBmb3JtLCBvciBpZiBzb21lIHZhbHVlcyBpbiB5b3VyIGRvbWFpbiBtb2RlbCBtYWtlIG1vcmUgc2Vuc2UgdG9cbiAgICAgICogY29uc3VtZSB0b2dldGhlciBpbiBhIG5lc3RlZCBvYmplY3QuXG4gICAgICAqICpcbiAgICAgICogUGFzcyBpbiB0aGUgbmFtZSB5b3UnZCBsaWtlIHRoaXMgc3ViLWdyb3VwIHRvIGhhdmUgYW5kIGl0IHdpbGwgYmVjb21lIHRoZSBrZXlcbiAgICAgICogZm9yIHRoZSBzdWItZ3JvdXAgaW4gdGhlIGZvcm0ncyBmdWxsIHZhbHVlLiBZb3UgY2FuIGFsc28gZXhwb3J0IHRoZSBkaXJlY3RpdmUgaW50b1xuICAgICAgKiBhIGxvY2FsIHRlbXBsYXRlIHZhcmlhYmxlIHVzaW5nIGBuZ01vZGVsR3JvdXBgIChleDogYCNteUdyb3VwPVwibmdNb2RlbEdyb3VwXCJgKS5cbiAgICAgICogKlxuICAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvbmdNb2RlbEdyb3VwL25nX21vZGVsX2dyb3VwX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAgKiAqXG4gICAgICAqICogKipucG0gcGFja2FnZSoqOiBgQGFuZ3VsYXIvZm9ybXNgXG4gICAgICAqICpcbiAgICAgICogKiAqKk5nTW9kdWxlKio6IGBGb3Jtc01vZHVsZWBcbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBOZ01vZGVsR3JvdXAgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkOChOZ01vZGVsR3JvdXAsIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE5nTW9kZWxHcm91cChwYXJlbnQsIHZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycykge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0b3JzID0gdmFsaWRhdG9ycztcbiAgICAgICAgICAgIHRoaXMuX2FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWxHcm91cC5wcm90b3R5cGUuX2NoZWNrUGFyZW50VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIE5nTW9kZWxHcm91cCkgJiYgISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ0Zvcm0pKSB7XG4gICAgICAgICAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMubW9kZWxHcm91cFBhcmVudEV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBOZ01vZGVsR3JvdXAuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW25nTW9kZWxHcm91cF0nLCBwcm92aWRlcnM6IFttb2RlbEdyb3VwUHJvdmlkZXJdLCBleHBvcnRBczogJ25nTW9kZWxHcm91cCcgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBOZ01vZGVsR3JvdXAuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSG9zdCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2tpcFNlbGYgfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIE5nTW9kZWxHcm91cC5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICduYW1lJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWyduZ01vZGVsR3JvdXAnLF0gfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTmdNb2RlbEdyb3VwO1xuICAgIH0oQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDcgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBmb3JtQ29udHJvbEJpbmRpbmcgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5nQ29udHJvbCxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBOZ01vZGVsOyB9KVxuICAgIH07XG4gICAgLyoqXG4gICAgICogYG5nTW9kZWxgIGZvcmNlcyBhbiBhZGRpdGlvbmFsIGNoYW5nZSBkZXRlY3Rpb24gcnVuIHdoZW4gaXRzIGlucHV0cyBjaGFuZ2U6XG4gICAgICogRS5nLjpcbiAgICAgKiBgYGBcbiAgICAgKiA8ZGl2Pnt7bXlNb2RlbC52YWxpZH19PC9kaXY+XG4gICAgICogPGlucHV0IFsobmdNb2RlbCldPVwibXlWYWx1ZVwiICNteU1vZGVsPVwibmdNb2RlbFwiPlxuICAgICAqIGBgYFxuICAgICAqIEkuZS4gYG5nTW9kZWxgIGNhbiBleHBvcnQgaXRzZWxmIG9uIHRoZSBlbGVtZW50IGFuZCB0aGVuIGJlIHVzZWQgaW4gdGhlIHRlbXBsYXRlLlxuICAgICAqIE5vcm1hbGx5LCB0aGlzIHdvdWxkIHJlc3VsdCBpbiBleHByZXNzaW9ucyBiZWZvcmUgdGhlIGBpbnB1dGAgdGhhdCB1c2UgdGhlIGV4cG9ydGVkIGRpcmVjdGl2ZVxuICAgICAqIHRvIGhhdmUgYW5kIG9sZCB2YWx1ZSBhcyB0aGV5IGhhdmUgYmVlblxuICAgICAqIGRpcnR5IGNoZWNrZWQgYmVmb3JlLiBBcyB0aGlzIGlzIGEgdmVyeSBjb21tb24gY2FzZSBmb3IgYG5nTW9kZWxgLCB3ZSBhZGRlZCB0aGlzIHNlY29uZCBjaGFuZ2VcbiAgICAgKiBkZXRlY3Rpb24gcnVuLlxuICAgICAqXG4gICAgICogTm90ZXM6XG4gICAgICogLSB0aGlzIGlzIGp1c3Qgb25lIGV4dHJhIHJ1biBubyBtYXR0ZXIgaG93IG1hbnkgYG5nTW9kZWxgIGhhdmUgYmVlbiBjaGFuZ2VkLlxuICAgICAqIC0gdGhpcyBpcyBhIGdlbmVyYWwgcHJvYmxlbSB3aGVuIHVzaW5nIGBleHBvcnRBc2AgZm9yIGRpcmVjdGl2ZXMhXG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcmVzb2x2ZWRQcm9taXNlJDEgPSBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgLyoqXG4gICAgICogIHRvIGEgZm9ybSBjb250cm9sIGVsZW1lbnQuXG4gICAgICAqICpcbiAgICAgICogVGhlIHtAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2Ugd2lsbCB0cmFjayB0aGUgdmFsdWUsIHVzZXIgaW50ZXJhY3Rpb24sIGFuZFxuICAgICAgKiB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbCBhbmQga2VlcCB0aGUgdmlldyBzeW5jZWQgd2l0aCB0aGUgbW9kZWwuIElmIHVzZWRcbiAgICAgICogd2l0aGluIGEgcGFyZW50IGZvcm0sIHRoZSBkaXJlY3RpdmUgd2lsbCBhbHNvIHJlZ2lzdGVyIGl0c2VsZiB3aXRoIHRoZSBmb3JtIGFzIGEgY2hpbGRcbiAgICAgICogY29udHJvbC5cbiAgICAgICogKlxuICAgICAgKiAqXG4gICAgICAqIFRoaXMgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIGJ5IGl0c2VsZiBvciBhcyBwYXJ0IG9mIGEgbGFyZ2VyIGZvcm0uIEFsbCB5b3UgbmVlZCBpcyB0aGVcbiAgICAgICogYG5nTW9kZWxgIHNlbGVjdG9yIHRvIGFjdGl2YXRlIGl0LlxuICAgICAgKiAqXG4gICAgICAqIEl0IGFjY2VwdHMgYSBkb21haW4gbW9kZWwgYXMgYW4gb3B0aW9uYWwge0BsaW5rIEBJbnB1dH0uIElmIHlvdSBoYXZlIGEgb25lLXdheSBiaW5kaW5nXG4gICAgICAqIHRvIGBuZ01vZGVsYCB3aXRoIGBbXWAgc3ludGF4LCBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdGhlIGRvbWFpbiBtb2RlbCBpbiB0aGUgY29tcG9uZW50XG4gICAgICAqIGNsYXNzIHdpbGwgc2V0IHRoZSB2YWx1ZSBpbiB0aGUgdmlldy4gSWYgeW91IGhhdmUgYSB0d28td2F5IGJpbmRpbmcgd2l0aCBgWygpXWAgc3ludGF4XG4gICAgICAqIChhbHNvIGtub3duIGFzICdiYW5hbmEtYm94IHN5bnRheCcpLCB0aGUgdmFsdWUgaW4gdGhlIFVJIHdpbGwgYWx3YXlzIGJlIHN5bmNlZCBiYWNrIHRvXG4gICAgICAqIHRoZSBkb21haW4gbW9kZWwgaW4geW91ciBjbGFzcyBhcyB3ZWxsLlxuICAgICAgKiAqXG4gICAgICAqIElmIHlvdSB3aXNoIHRvIGluc3BlY3QgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGFzc29jaWF0ZWQge0BsaW5rIEZvcm1Db250cm9sfSAobGlrZVxuICAgICAgKiB2YWxpZGl0eSBzdGF0ZSksIHlvdSBjYW4gYWxzbyBleHBvcnQgdGhlIGRpcmVjdGl2ZSBpbnRvIGEgbG9jYWwgdGVtcGxhdGUgdmFyaWFibGUgdXNpbmdcbiAgICAgICogYG5nTW9kZWxgIGFzIHRoZSBrZXkgKGV4OiBgI215VmFyPVwibmdNb2RlbFwiYCkuIFlvdSBjYW4gdGhlbiBhY2Nlc3MgdGhlIGNvbnRyb2wgdXNpbmcgdGhlXG4gICAgICAqIGRpcmVjdGl2ZSdzIGBjb250cm9sYCBwcm9wZXJ0eSwgYnV0IG1vc3QgcHJvcGVydGllcyB5b3UnbGwgbmVlZCAobGlrZSBgdmFsaWRgIGFuZCBgZGlydHlgKVxuICAgICAgKiB3aWxsIGZhbGwgdGhyb3VnaCB0byB0aGUgY29udHJvbCBhbnl3YXksIHNvIHlvdSBjYW4gYWNjZXNzIHRoZW0gZGlyZWN0bHkuIFlvdSBjYW4gc2VlIGFcbiAgICAgICogZnVsbCBsaXN0IG9mIHByb3BlcnRpZXMgZGlyZWN0bHkgYXZhaWxhYmxlIGluIHtAbGluayBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmV9LlxuICAgICAgKiAqXG4gICAgICAqIFRoZSBmb2xsb3dpbmcgaXMgYW4gZXhhbXBsZSBvZiBhIHNpbXBsZSBzdGFuZGFsb25lIGNvbnRyb2wgdXNpbmcgYG5nTW9kZWxgOlxuICAgICAgKiAqXG4gICAgICAqIHtAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVOZ01vZGVsL3NpbXBsZV9uZ19tb2RlbF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgICogKlxuICAgICAgKiBXaGVuIHVzaW5nIHRoZSBgbmdNb2RlbGAgd2l0aGluIGA8Zm9ybT5gIHRhZ3MsIHlvdSdsbCBhbHNvIG5lZWQgdG8gc3VwcGx5IGEgYG5hbWVgIGF0dHJpYnV0ZVxuICAgICAgKiBzbyB0aGF0IHRoZSBjb250cm9sIGNhbiBiZSByZWdpc3RlcmVkIHdpdGggdGhlIHBhcmVudCBmb3JtIHVuZGVyIHRoYXQgbmFtZS5cbiAgICAgICogKlxuICAgICAgKiBJdCdzIHdvcnRoIG5vdGluZyB0aGF0IGluIHRoZSBjb250ZXh0IG9mIGEgcGFyZW50IGZvcm0sIHlvdSBvZnRlbiBjYW4gc2tpcCBvbmUtd2F5IG9yXG4gICAgICAqIHR3by13YXkgYmluZGluZyBiZWNhdXNlIHRoZSBwYXJlbnQgZm9ybSB3aWxsIHN5bmMgdGhlIHZhbHVlIGZvciB5b3UuIFlvdSBjYW4gYWNjZXNzXG4gICAgICAqIGl0cyBwcm9wZXJ0aWVzIGJ5IGV4cG9ydGluZyBpdCBpbnRvIGEgbG9jYWwgdGVtcGxhdGUgdmFyaWFibGUgdXNpbmcgYG5nRm9ybWAgKGV4OlxuICAgICAgKiBgI2Y9XCJuZ0Zvcm1cImApLiBUaGVuIHlvdSBjYW4gcGFzcyBpdCB3aGVyZSBpdCBuZWVkcyB0byBnbyBvbiBzdWJtaXQuXG4gICAgICAqICpcbiAgICAgICogSWYgeW91IGRvIG5lZWQgdG8gcG9wdWxhdGUgaW5pdGlhbCB2YWx1ZXMgaW50byB5b3VyIGZvcm0sIHVzaW5nIGEgb25lLXdheSBiaW5kaW5nIGZvclxuICAgICAgKiBgbmdNb2RlbGAgdGVuZHMgdG8gYmUgc3VmZmljaWVudCBhcyBsb25nIGFzIHlvdSB1c2UgdGhlIGV4cG9ydGVkIGZvcm0ncyB2YWx1ZSByYXRoZXJcbiAgICAgICogdGhhbiB0aGUgZG9tYWluIG1vZGVsJ3MgdmFsdWUgb24gc3VibWl0LlxuICAgICAgKiAqXG4gICAgICAqIFRha2UgYSBsb29rIGF0IGFuIGV4YW1wbGUgb2YgdXNpbmcgYG5nTW9kZWxgIHdpdGhpbiBhIGZvcm06XG4gICAgICAqICpcbiAgICAgICoge0BleGFtcGxlIGZvcm1zL3RzL3NpbXBsZUZvcm0vc2ltcGxlX2Zvcm1fZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICAqICpcbiAgICAgICogVG8gc2VlIGBuZ01vZGVsYCBleGFtcGxlcyB3aXRoIGRpZmZlcmVudCBmb3JtIGNvbnRyb2wgdHlwZXMsIHNlZTpcbiAgICAgICogKlxuICAgICAgKiAqIFJhZGlvIGJ1dHRvbnM6IHtAbGluayBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yfVxuICAgICAgKiAqIFNlbGVjdHM6IHtAbGluayBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn1cbiAgICAgICogKlxuICAgICAgKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgICogKlxuICAgICAgKiAqKk5nTW9kdWxlKio6IGBGb3Jtc01vZHVsZWBcbiAgICAgICogKlxuICAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIE5nTW9kZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkNyhOZ01vZGVsLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBwYXJlbnRcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICAgICAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVBY2Nlc3NvcnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE5nTW9kZWwocGFyZW50LCB2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnMsIHZhbHVlQWNjZXNzb3JzKSB7XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgIHRoaXMuX2NvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdGVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5fcmF3VmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMgfHwgW107XG4gICAgICAgICAgICB0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnMgfHwgW107XG4gICAgICAgICAgICB0aGlzLnZhbHVlQWNjZXNzb3IgPSBzZWxlY3RWYWx1ZUFjY2Vzc29yKHRoaXMsIHZhbHVlQWNjZXNzb3JzKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGVja0ZvckVycm9ycygpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9yZWdpc3RlcmVkKVxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFVwQ29udHJvbCgpO1xuICAgICAgICAgICAgaWYgKCdpc0Rpc2FibGVkJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRGlzYWJsZWQoY2hhbmdlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdGhpcy52aWV3TW9kZWwpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWUodGhpcy5tb2RlbCk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwgPSB0aGlzLm1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkgeyB0aGlzLmZvcm1EaXJlY3RpdmUgJiYgdGhpcy5mb3JtRGlyZWN0aXZlLnJlbW92ZUNvbnRyb2wodGhpcyk7IH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ01vZGVsLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jb250cm9sOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nTW9kZWwucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50ID8gY29udHJvbFBhdGgodGhpcy5uYW1lLCB0aGlzLl9wYXJlbnQpIDogW3RoaXMubmFtZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nTW9kZWwucHJvdG90eXBlLCBcImZvcm1EaXJlY3RpdmVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3BhcmVudCA/IHRoaXMuX3BhcmVudC5mb3JtRGlyZWN0aXZlIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ01vZGVsLnByb3RvdHlwZSwgXCJ2YWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3Jhd1ZhbGlkYXRvcnMpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nTW9kZWwucHJvdG90eXBlLCBcImFzeW5jVmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBuZXdWYWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUudmlld1RvTW9kZWxVcGRhdGUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KG5ld1ZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsLnByb3RvdHlwZS5fc2V0VXBDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5faXNTdGFuZGFsb25lKCkgPyB0aGlzLl9zZXRVcFN0YW5kYWxvbmUoKSA6XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLmFkZENvbnRyb2wodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RlcmVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsLnByb3RvdHlwZS5faXNTdGFuZGFsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9wYXJlbnQgfHwgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuc3RhbmRhbG9uZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUuX3NldFVwU3RhbmRhbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldFVwQ29udHJvbCh0aGlzLl9jb250cm9sLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUuX2NoZWNrRm9yRXJyb3JzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pc1N0YW5kYWxvbmUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrUGFyZW50VHlwZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY2hlY2tOYW1lKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUuX2NoZWNrUGFyZW50VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIE5nTW9kZWxHcm91cCkgJiZcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLmZvcm1Hcm91cE5hbWVFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgTmdNb2RlbEdyb3VwKSAmJiAhKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIE5nRm9ybSkpIHtcbiAgICAgICAgICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5tb2RlbFBhcmVudEV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLl9jaGVja05hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5uYW1lKVxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMub3B0aW9ucy5uYW1lO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pc1N0YW5kYWxvbmUoKSAmJiAhdGhpcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMubWlzc2luZ05hbWVFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLl91cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZSQxLnRoZW4oZnVuY3Rpb24gKCkgeyBfdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlLCB7IGVtaXRWaWV3VG9Nb2RlbENoYW5nZTogZmFsc2UgfSk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsLnByb3RvdHlwZS5fdXBkYXRlRGlzYWJsZWQgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGRpc2FibGVkVmFsdWUgPSBjaGFuZ2VzWydpc0Rpc2FibGVkJ10uY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaXNEaXNhYmxlZCA9IGRpc2FibGVkVmFsdWUgPT09ICcnIHx8IChkaXNhYmxlZFZhbHVlICYmIGRpc2FibGVkVmFsdWUgIT09ICdmYWxzZScpO1xuICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlJDEudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRGlzYWJsZWQgJiYgIV90aGlzLmNvbnRyb2wuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29udHJvbC5kaXNhYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc0Rpc2FibGVkICYmIF90aGlzLmNvbnRyb2wuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29udHJvbC5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgTmdNb2RlbC5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW25nTW9kZWxdOm5vdChbZm9ybUNvbnRyb2xOYW1lXSk6bm90KFtmb3JtQ29udHJvbF0pJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW2Zvcm1Db250cm9sQmluZGluZ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRBczogJ25nTW9kZWwnXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTmdNb2RlbC5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSG9zdCB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX1ZBTFVFX0FDQ0VTU09SLF0gfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIE5nTW9kZWwucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbmFtZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQgfSxdLFxuICAgICAgICAgICAgJ2lzRGlzYWJsZWQnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Rpc2FibGVkJyxdIH0sXSxcbiAgICAgICAgICAgICdtb2RlbCc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnbmdNb2RlbCcsXSB9LF0sXG4gICAgICAgICAgICAnb3B0aW9ucyc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnbmdNb2RlbE9wdGlvbnMnLF0gfSxdLFxuICAgICAgICAgICAgJ3VwZGF0ZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3V0cHV0LCBhcmdzOiBbJ25nTW9kZWxDaGFuZ2UnLF0gfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTmdNb2RlbDtcbiAgICB9KE5nQ29udHJvbCkpO1xuXG4gICAgdmFyIFJlYWN0aXZlRXJyb3JzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gUmVhY3RpdmVFcnJvcnMoKSB7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSZWFjdGl2ZUVycm9ycy5jb250cm9sUGFyZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZm9ybUNvbnRyb2xOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcXG4gICAgICAgZGlyZWN0aXZlIGFuZCBwYXNzIGl0IGFuIGV4aXN0aW5nIEZvcm1Hcm91cCBpbnN0YW5jZSAoeW91IGNhbiBjcmVhdGUgb25lIGluIHlvdXIgY2xhc3MpLlxcblxcbiAgICAgIEV4YW1wbGU6XFxuXFxuICAgICAgXCIgKyBFeGFtcGxlcy5mb3JtQ29udHJvbE5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJlYWN0aXZlRXJyb3JzLm5nTW9kZWxHcm91cEV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZvcm1Db250cm9sTmFtZSBjYW5ub3QgYmUgdXNlZCB3aXRoIGFuIG5nTW9kZWxHcm91cCBwYXJlbnQuIEl0IGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHBhcmVudHNcXG4gICAgICAgdGhhdCBhbHNvIGhhdmUgYSBcXFwiZm9ybVxcXCIgcHJlZml4OiBmb3JtR3JvdXBOYW1lLCBmb3JtQXJyYXlOYW1lLCBvciBmb3JtR3JvdXAuXFxuXFxuICAgICAgIE9wdGlvbiAxOiAgVXBkYXRlIHRoZSBwYXJlbnQgdG8gYmUgZm9ybUdyb3VwTmFtZSAocmVhY3RpdmUgZm9ybSBzdHJhdGVneSlcXG5cXG4gICAgICAgIFwiICsgRXhhbXBsZXMuZm9ybUdyb3VwTmFtZSArIFwiXFxuXFxuICAgICAgICBPcHRpb24gMjogVXNlIG5nTW9kZWwgaW5zdGVhZCBvZiBmb3JtQ29udHJvbE5hbWUgKHRlbXBsYXRlLWRyaXZlbiBzdHJhdGVneSlcXG5cXG4gICAgICAgIFwiICsgRXhhbXBsZXMubmdNb2RlbEdyb3VwKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSZWFjdGl2ZUVycm9ycy5taXNzaW5nRm9ybUV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZvcm1Hcm91cCBleHBlY3RzIGEgRm9ybUdyb3VwIGluc3RhbmNlLiBQbGVhc2UgcGFzcyBvbmUgaW4uXFxuXFxuICAgICAgIEV4YW1wbGU6XFxuXFxuICAgICAgIFwiICsgRXhhbXBsZXMuZm9ybUNvbnRyb2xOYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSZWFjdGl2ZUVycm9ycy5ncm91cFBhcmVudEV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZvcm1Hcm91cE5hbWUgbXVzdCBiZSB1c2VkIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS4gIFlvdSdsbCB3YW50IHRvIGFkZCBhIGZvcm1Hcm91cFxcbiAgICAgIGRpcmVjdGl2ZSBhbmQgcGFzcyBpdCBhbiBleGlzdGluZyBGb3JtR3JvdXAgaW5zdGFuY2UgKHlvdSBjYW4gY3JlYXRlIG9uZSBpbiB5b3VyIGNsYXNzKS5cXG5cXG4gICAgICBFeGFtcGxlOlxcblxcbiAgICAgIFwiICsgRXhhbXBsZXMuZm9ybUdyb3VwTmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmVhY3RpdmVFcnJvcnMuYXJyYXlQYXJlbnRFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmb3JtQXJyYXlOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcXG4gICAgICAgZGlyZWN0aXZlIGFuZCBwYXNzIGl0IGFuIGV4aXN0aW5nIEZvcm1Hcm91cCBpbnN0YW5jZSAoeW91IGNhbiBjcmVhdGUgb25lIGluIHlvdXIgY2xhc3MpLlxcblxcbiAgICAgICAgRXhhbXBsZTpcXG5cXG4gICAgICAgIFwiICsgRXhhbXBsZXMuZm9ybUFycmF5TmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmVhY3RpdmVFcnJvcnMuZGlzYWJsZWRBdHRyV2FybmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlxcbiAgICAgIEl0IGxvb2tzIGxpa2UgeW91J3JlIHVzaW5nIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgd2l0aCBhIHJlYWN0aXZlIGZvcm0gZGlyZWN0aXZlLiBJZiB5b3Ugc2V0IGRpc2FibGVkIHRvIHRydWVcXG4gICAgICB3aGVuIHlvdSBzZXQgdXAgdGhpcyBjb250cm9sIGluIHlvdXIgY29tcG9uZW50IGNsYXNzLCB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIHdpbGwgYWN0dWFsbHkgYmUgc2V0IGluIHRoZSBET00gZm9yXFxuICAgICAgeW91LiBXZSByZWNvbW1lbmQgdXNpbmcgdGhpcyBhcHByb2FjaCB0byBhdm9pZCAnY2hhbmdlZCBhZnRlciBjaGVja2VkJyBlcnJvcnMuXFxuICAgICAgIFxcbiAgICAgIEV4YW1wbGU6IFxcbiAgICAgIGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcXG4gICAgICAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woe3ZhbHVlOiAnTmFuY3knLCBkaXNhYmxlZDogdHJ1ZX0sIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxcbiAgICAgICAgbGFzdDogbmV3IEZvcm1Db250cm9sKCdEcmV3JywgVmFsaWRhdG9ycy5yZXF1aXJlZClcXG4gICAgICB9KTtcXG4gICAgXCIpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUmVhY3RpdmVFcnJvcnM7XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDkgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBmb3JtQ29udHJvbEJpbmRpbmckMSA9IHtcbiAgICAgICAgcHJvdmlkZTogTmdDb250cm9sLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIEZvcm1Db250cm9sRGlyZWN0aXZlOyB9KVxuICAgIH07XG4gICAgLyoqXG4gICAgICogICpcbiAgICAgICogSW4gb3RoZXIgd29yZHMsIHRoaXMgZGlyZWN0aXZlIGVuc3VyZXMgdGhhdCBhbnkgdmFsdWVzIHdyaXR0ZW4gdG8gdGhlIHtAbGluayBGb3JtQ29udHJvbH1cbiAgICAgICogaW5zdGFuY2UgcHJvZ3JhbW1hdGljYWxseSB3aWxsIGJlIHdyaXR0ZW4gdG8gdGhlIERPTSBlbGVtZW50IChtb2RlbCAtPiB2aWV3KS4gQ29udmVyc2VseSxcbiAgICAgICogYW55IHZhbHVlcyB3cml0dGVuIHRvIHRoZSBET00gZWxlbWVudCB0aHJvdWdoIHVzZXIgaW5wdXQgd2lsbCBiZSByZWZsZWN0ZWQgaW4gdGhlXG4gICAgICAqIHtAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgKHZpZXcgLT4gbW9kZWwpLlxuICAgICAgKiAqXG4gICAgICAqICpcbiAgICAgICogVXNlIHRoaXMgZGlyZWN0aXZlIGlmIHlvdSdkIGxpa2UgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgYSB7QGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlIGRpcmVjdGx5LlxuICAgICAgKiBTaW1wbHkgY3JlYXRlIGEge0BsaW5rIEZvcm1Db250cm9sfSwgc2F2ZSBpdCB0byB5b3VyIGNvbXBvbmVudCBjbGFzcywgYW5kIHBhc3MgaXQgaW50byB0aGVcbiAgICAgICoge0BsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfS5cbiAgICAgICogKlxuICAgICAgKiBUaGlzIGRpcmVjdGl2ZSBpcyBkZXNpZ25lZCB0byBiZSB1c2VkIGFzIGEgc3RhbmRhbG9uZSBjb250cm9sLiAgVW5saWtlIHtAbGluayBGb3JtQ29udHJvbE5hbWV9LFxuICAgICAgKiBpdCBkb2VzIG5vdCByZXF1aXJlIHRoYXQgeW91ciB7QGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlIGJlIHBhcnQgb2YgYW55IHBhcmVudFxuICAgICAgKiB7QGxpbmsgRm9ybUdyb3VwfSwgYW5kIGl0IHdvbid0IGJlIHJlZ2lzdGVyZWQgdG8gYW55IHtAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9IHRoYXRcbiAgICAgICogZXhpc3RzIGFib3ZlIGl0LlxuICAgICAgKiAqXG4gICAgICAqICoqR2V0IHRoZSB2YWx1ZSoqOiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyBhbHdheXMgc3luY2VkIGFuZCBhdmFpbGFibGUgb24gdGhlXG4gICAgICAqIHtAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UuIFNlZSBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgcHJvcGVydGllcyBpblxuICAgICAgKiB7QGxpbmsgQWJzdHJhY3RDb250cm9sfS5cbiAgICAgICogKlxuICAgICAgKiAqKlNldCB0aGUgdmFsdWUqKjogWW91IGNhbiBwYXNzIGluIGFuIGluaXRpYWwgdmFsdWUgd2hlbiBpbnN0YW50aWF0aW5nIHRoZSB7QGxpbmsgRm9ybUNvbnRyb2x9LFxuICAgICAgKiBvciB5b3UgY2FuIHNldCBpdCBwcm9ncmFtbWF0aWNhbGx5IGxhdGVyIHVzaW5nIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc2V0VmFsdWV9IG9yXG4gICAgICAqIHtAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX0uXG4gICAgICAqICpcbiAgICAgICogKipMaXN0ZW4gdG8gdmFsdWUqKjogSWYgeW91IHdhbnQgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLCB5b3UgY2FuXG4gICAgICAqIHN1YnNjcmliZSB0byB0aGUge0BsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICAgICAgKiB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnN0YXR1c0NoYW5nZXN9IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb24gc3RhdHVzIGlzXG4gICAgICAqIHJlLWNhbGN1bGF0ZWQuXG4gICAgICAqICpcbiAgICAgICogIyMjIEV4YW1wbGVcbiAgICAgICogKlxuICAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybUNvbnRyb2wvc2ltcGxlX2Zvcm1fY29udHJvbF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgICogKlxuICAgICAgKiAqICoqbnBtIHBhY2thZ2UqKjogYEBhbmd1bGFyL2Zvcm1zYFxuICAgICAgKiAqXG4gICAgICAqICogKipOZ01vZHVsZSoqOiBgUmVhY3RpdmVGb3Jtc01vZHVsZWBcbiAgICAgICogKlxuICAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEZvcm1Db250cm9sRGlyZWN0aXZlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDkoRm9ybUNvbnRyb2xEaXJlY3RpdmUsIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZUFjY2Vzc29yc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gRm9ybUNvbnRyb2xEaXJlY3RpdmUodmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzLCB2YWx1ZUFjY2Vzc29ycykge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX3Jhd1ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yID0gc2VsZWN0VmFsdWVBY2Nlc3Nvcih0aGlzLCB2YWx1ZUFjY2Vzc29ycyk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJpc0Rpc2FibGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7IFJlYWN0aXZlRXJyb3JzLmRpc2FibGVkQXR0cldhcm5pbmcoKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNDb250cm9sQ2hhbmdlZChjaGFuZ2VzKSkge1xuICAgICAgICAgICAgICAgIHNldFVwQ29udHJvbCh0aGlzLmZvcm0sIHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2wuZGlzYWJsZWQgJiYgdGhpcy52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzLCB0aGlzLnZpZXdNb2RlbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uc2V0VmFsdWUodGhpcy5tb2RlbCk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwgPSB0aGlzLm1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ2YWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3Jhd1ZhbGlkYXRvcnMpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJhc3luY1ZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmZvcm07IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBuZXdWYWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLnZpZXdUb01vZGVsVXBkYXRlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdChuZXdWYWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZS5faXNDb250cm9sQ2hhbmdlZCA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZm9ybScpO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtQ29udHJvbERpcmVjdGl2ZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdbZm9ybUNvbnRyb2xdJywgcHJvdmlkZXJzOiBbZm9ybUNvbnRyb2xCaW5kaW5nJDFdLCBleHBvcnRBczogJ25nRm9ybScgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBGb3JtQ29udHJvbERpcmVjdGl2ZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX1ZBTFVFX0FDQ0VTU09SLF0gfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ2Zvcm0nOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Zvcm1Db250cm9sJyxdIH0sXSxcbiAgICAgICAgICAgICdtb2RlbCc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnbmdNb2RlbCcsXSB9LF0sXG4gICAgICAgICAgICAndXBkYXRlJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PdXRwdXQsIGFyZ3M6IFsnbmdNb2RlbENoYW5nZScsXSB9LF0sXG4gICAgICAgICAgICAnaXNEaXNhYmxlZCc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnZGlzYWJsZWQnLF0gfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUNvbnRyb2xEaXJlY3RpdmU7XG4gICAgfShOZ0NvbnRyb2wpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDExID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZm9ybURpcmVjdGl2ZVByb3ZpZGVyJDEgPSB7XG4gICAgICAgIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gRm9ybUdyb3VwRGlyZWN0aXZlOyB9KVxuICAgIH07XG4gICAgLyoqXG4gICAgICogICpcbiAgICAgICogKlxuICAgICAgKiBUaGlzIGRpcmVjdGl2ZSBhY2NlcHRzIGFuIGV4aXN0aW5nIHtAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlLiBJdCB3aWxsIHRoZW4gdXNlIHRoaXNcbiAgICAgICoge0BsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UgdG8gbWF0Y2ggYW55IGNoaWxkIHtAbGluayBGb3JtQ29udHJvbH0sIHtAbGluayBGb3JtR3JvdXB9LFxuICAgICAgKiBhbmQge0BsaW5rIEZvcm1BcnJheX0gaW5zdGFuY2VzIHRvIGNoaWxkIHtAbGluayBGb3JtQ29udHJvbE5hbWV9LCB7QGxpbmsgRm9ybUdyb3VwTmFtZX0sXG4gICAgICAqIGFuZCB7QGxpbmsgRm9ybUFycmF5TmFtZX0gZGlyZWN0aXZlcy5cbiAgICAgICogKlxuICAgICAgKiAqKlNldCB2YWx1ZSoqOiBZb3UgY2FuIHNldCB0aGUgZm9ybSdzIGluaXRpYWwgdmFsdWUgd2hlbiBpbnN0YW50aWF0aW5nIHRoZVxuICAgICAgKiB7QGxpbmsgRm9ybUdyb3VwfSwgb3IgeW91IGNhbiBzZXQgaXQgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZyB0aGUge0BsaW5rIEZvcm1Hcm91cH0nc1xuICAgICAgKiB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnNldFZhbHVlfSBvciB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnBhdGNoVmFsdWV9IG1ldGhvZHMuXG4gICAgICAqICpcbiAgICAgICogKipMaXN0ZW4gdG8gdmFsdWUqKjogSWYgeW91IHdhbnQgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHZhbHVlIG9mIHRoZSBmb3JtLCB5b3UgY2FuIHN1YnNjcmliZVxuICAgICAgKiB0byB0aGUge0BsaW5rIEZvcm1Hcm91cH0ncyB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnZhbHVlQ2hhbmdlc30gZXZlbnQuICBZb3UgY2FuIGFsc28gbGlzdGVuIHRvXG4gICAgICAqIGl0cyB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnN0YXR1c0NoYW5nZXN9IGV2ZW50IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb24gc3RhdHVzIGlzXG4gICAgICAqIHJlLWNhbGN1bGF0ZWQuXG4gICAgICAqICpcbiAgICAgICogRnVydGhlcm1vcmUsIHlvdSBjYW4gbGlzdGVuIHRvIHRoZSBkaXJlY3RpdmUncyBgbmdTdWJtaXRgIGV2ZW50IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHVzZXIgaGFzXG4gICAgICAqIHRyaWdnZXJlZCBhIGZvcm0gc3VibWlzc2lvbi4gVGhlIGBuZ1N1Ym1pdGAgZXZlbnQgd2lsbCBiZSBlbWl0dGVkIHdpdGggdGhlIG9yaWdpbmFsIGZvcm1cbiAgICAgICogc3VibWlzc2lvbiBldmVudC5cbiAgICAgICogKlxuICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgKiAqXG4gICAgICAqIEluIHRoaXMgZXhhbXBsZSwgd2UgY3JlYXRlIGZvcm0gY29udHJvbHMgZm9yIGZpcnN0IG5hbWUgYW5kIGxhc3QgbmFtZS5cbiAgICAgICogKlxuICAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybUdyb3VwL3NpbXBsZV9mb3JtX2dyb3VwX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAgKiAqXG4gICAgICAqICoqbnBtIHBhY2thZ2UqKjogYEBhbmd1bGFyL2Zvcm1zYFxuICAgICAgKiAqXG4gICAgICAqICoqTmdNb2R1bGUqKjoge0BsaW5rIFJlYWN0aXZlRm9ybXNNb2R1bGV9XG4gICAgICAqICpcbiAgICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBGb3JtR3JvdXBEaXJlY3RpdmUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkMTEoRm9ybUdyb3VwRGlyZWN0aXZlLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBfdmFsaWRhdG9yc1xuICAgICAgICAgKiBAcGFyYW0gez99IF9hc3luY1ZhbGlkYXRvcnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEZvcm1Hcm91cERpcmVjdGl2ZShfdmFsaWRhdG9ycywgX2FzeW5jVmFsaWRhdG9ycykge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0b3JzID0gX3ZhbGlkYXRvcnM7XG4gICAgICAgICAgICB0aGlzLl9hc3luY1ZhbGlkYXRvcnMgPSBfYXN5bmNWYWxpZGF0b3JzO1xuICAgICAgICAgICAgdGhpcy5fc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLm5nU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tGb3JtUHJlc2VudCgpO1xuICAgICAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Zvcm0nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbGlkYXRvcnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEb21WYWx1ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJlZ2lzdHJhdGlvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUsIFwic3VibWl0dGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdWJtaXR0ZWQ7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJmb3JtRGlyZWN0aXZlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiY29udHJvbFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5mb3JtOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuYWRkQ29udHJvbCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGN0cmwgPSB0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKTtcbiAgICAgICAgICAgIHNldFVwQ29udHJvbChjdHJsLCBkaXIpO1xuICAgICAgICAgICAgY3RybC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlcy5wdXNoKGRpcik7XG4gICAgICAgICAgICByZXR1cm4gY3RybDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLmdldENvbnRyb2wgPSBmdW5jdGlvbiAoZGlyKSB7IHJldHVybiAodGhpcy5mb3JtLmdldChkaXIucGF0aCkpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUucmVtb3ZlQ29udHJvbCA9IGZ1bmN0aW9uIChkaXIpIHsgTGlzdFdyYXBwZXIucmVtb3ZlKHRoaXMuZGlyZWN0aXZlcywgZGlyKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLmFkZEZvcm1Hcm91cCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGN0cmwgPSB0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKTtcbiAgICAgICAgICAgIHNldFVwRm9ybUNvbnRhaW5lcihjdHJsLCBkaXIpO1xuICAgICAgICAgICAgY3RybC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLnJlbW92ZUZvcm1Hcm91cCA9IGZ1bmN0aW9uIChkaXIpIHsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLmdldEZvcm1Hcm91cCA9IGZ1bmN0aW9uIChkaXIpIHsgcmV0dXJuICh0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5hZGRGb3JtQXJyYXkgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjdHJsID0gdGhpcy5mb3JtLmdldChkaXIucGF0aCk7XG4gICAgICAgICAgICBzZXRVcEZvcm1Db250YWluZXIoY3RybCwgZGlyKTtcbiAgICAgICAgICAgIGN0cmwudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5yZW1vdmVGb3JtQXJyYXkgPSBmdW5jdGlvbiAoZGlyKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRGb3JtQXJyYXkgPSBmdW5jdGlvbiAoZGlyKSB7IHJldHVybiAodGhpcy5mb3JtLmdldChkaXIucGF0aCkpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS51cGRhdGVNb2RlbCA9IGZ1bmN0aW9uIChkaXIsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjdHJsID0gKHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKTtcbiAgICAgICAgICAgIGN0cmwuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSAkZXZlbnRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uZ1N1Ym1pdC5lbWl0KCRldmVudCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5vblJlc2V0ID0gZnVuY3Rpb24gKCkgeyB0aGlzLnJlc2V0Rm9ybSgpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/PX0gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUucmVzZXRGb3JtID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9IHVuZGVmaW5lZDsgfVxuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX3VwZGF0ZURvbVZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBuZXdDdHJsID0gX3RoaXMuZm9ybS5nZXQoZGlyLnBhdGgpO1xuICAgICAgICAgICAgICAgIGlmIChkaXIuX2NvbnRyb2wgIT09IG5ld0N0cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW5VcENvbnRyb2woZGlyLl9jb250cm9sLCBkaXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Q3RybClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVwQ29udHJvbChuZXdDdHJsLCBkaXIpO1xuICAgICAgICAgICAgICAgICAgICBkaXIuX2NvbnRyb2wgPSBuZXdDdHJsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5mb3JtLl91cGRhdGVUcmVlVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX3VwZGF0ZVJlZ2lzdHJhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5mb3JtLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fdXBkYXRlRG9tVmFsdWUoKTsgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fb2xkRm9ybSlcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRGb3JtLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgdGhpcy5fb2xkRm9ybSA9IHRoaXMuZm9ybTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl91cGRhdGVWYWxpZGF0b3JzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc3luYyA9IGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3ZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgdGhpcy5mb3JtLnZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZShbdGhpcy5mb3JtLnZhbGlkYXRvciwgc3luY10pO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gYXN5bmMgPSBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX2FzeW5jVmFsaWRhdG9ycyk7XG4gICAgICAgICAgICB0aGlzLmZvcm0uYXN5bmNWYWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyhbdGhpcy5mb3JtLmFzeW5jVmFsaWRhdG9yLCBhc3luY10pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX2NoZWNrRm9ybVByZXNlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgICAgIFJlYWN0aXZlRXJyb3JzLm1pc3NpbmdGb3JtRXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW2Zvcm1Hcm91cF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbZm9ybURpcmVjdGl2ZVByb3ZpZGVyJDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnKHN1Ym1pdCknOiAnb25TdWJtaXQoJGV2ZW50KScsICcocmVzZXQpJzogJ29uUmVzZXQoKScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydEFzOiAnbmdGb3JtJ1xuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ2Zvcm0nOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Zvcm1Hcm91cCcsXSB9LF0sXG4gICAgICAgICAgICAnbmdTdWJtaXQnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk91dHB1dCB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBGb3JtR3JvdXBEaXJlY3RpdmU7XG4gICAgfShDb250cm9sQ29udGFpbmVyKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQxMiA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIGZvcm1Hcm91cE5hbWVQcm92aWRlciA9IHtcbiAgICAgICAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBGb3JtR3JvdXBOYW1lOyB9KVxuICAgIH07XG4gICAgLyoqXG4gICAgICogICpcbiAgICAgICogKlxuICAgICAgKiBUaGlzIGRpcmVjdGl2ZSBjYW4gb25seSBiZSB1c2VkIHdpdGggYSBwYXJlbnQge0BsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0gKHNlbGVjdG9yOlxuICAgICAgKiBgW2Zvcm1Hcm91cF1gKS5cbiAgICAgICogKlxuICAgICAgKiBJdCBhY2NlcHRzIHRoZSBzdHJpbmcgbmFtZSBvZiB0aGUgbmVzdGVkIHtAbGluayBGb3JtR3JvdXB9IHlvdSB3YW50IHRvIGxpbmssIGFuZFxuICAgICAgKiB3aWxsIGxvb2sgZm9yIGEge0BsaW5rIEZvcm1Hcm91cH0gcmVnaXN0ZXJlZCB3aXRoIHRoYXQgbmFtZSBpbiB0aGUgcGFyZW50XG4gICAgICAqIHtAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIHlvdSBwYXNzZWQgaW50byB7QGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfS5cbiAgICAgICogKlxuICAgICAgKiBOZXN0ZWQgZm9ybSBncm91cHMgY2FuIGNvbWUgaW4gaGFuZHkgd2hlbiB5b3Ugd2FudCB0byB2YWxpZGF0ZSBhIHN1Yi1ncm91cCBvZiBhXG4gICAgICAqIGZvcm0gc2VwYXJhdGVseSBmcm9tIHRoZSByZXN0IG9yIHdoZW4geW91J2QgbGlrZSB0byBncm91cCB0aGUgdmFsdWVzIG9mIGNlcnRhaW5cbiAgICAgICogY29udHJvbHMgaW50byB0aGVpciBvd24gbmVzdGVkIG9iamVjdC5cbiAgICAgICogKlxuICAgICAgKiAqKkFjY2VzcyB0aGUgZ3JvdXAqKjogWW91IGNhbiBhY2Nlc3MgdGhlIGFzc29jaWF0ZWQge0BsaW5rIEZvcm1Hcm91cH0gdXNpbmcgdGhlXG4gICAgICAqIHtAbGluayBBYnN0cmFjdENvbnRyb2wuZ2V0fSBtZXRob2QuIEV4OiBgdGhpcy5mb3JtLmdldCgnbmFtZScpYC5cbiAgICAgICogKlxuICAgICAgKiBZb3UgY2FuIGFsc28gYWNjZXNzIGluZGl2aWR1YWwgY29udHJvbHMgd2l0aGluIHRoZSBncm91cCB1c2luZyBkb3Qgc3ludGF4LlxuICAgICAgKiBFeDogYHRoaXMuZm9ybS5nZXQoJ25hbWUuZmlyc3QnKWBcbiAgICAgICogKlxuICAgICAgKiAqKkdldCB0aGUgdmFsdWUqKjogdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgYWx3YXlzIHN5bmNlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZVxuICAgICAgKiB7QGxpbmsgRm9ybUdyb3VwfS4gU2VlIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBwcm9wZXJ0aWVzIGluIHtAbGluayBBYnN0cmFjdENvbnRyb2x9LlxuICAgICAgKiAqXG4gICAgICAqICoqU2V0IHRoZSB2YWx1ZSoqOiBZb3UgY2FuIHNldCBhbiBpbml0aWFsIHZhbHVlIGZvciBlYWNoIGNoaWxkIGNvbnRyb2wgd2hlbiBpbnN0YW50aWF0aW5nXG4gICAgICAqIHRoZSB7QGxpbmsgRm9ybUdyb3VwfSwgb3IgeW91IGNhbiBzZXQgaXQgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZ1xuICAgICAgKiB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnNldFZhbHVlfSBvciB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnBhdGNoVmFsdWV9LlxuICAgICAgKiAqXG4gICAgICAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZ3JvdXAsIHlvdSBjYW5cbiAgICAgICogc3Vic2NyaWJlIHRvIHRoZSB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnZhbHVlQ2hhbmdlc30gZXZlbnQuICBZb3UgY2FuIGFsc28gbGlzdGVuIHRvXG4gICAgICAqIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzQ2hhbmdlc30gdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgaXNcbiAgICAgICogcmUtY2FsY3VsYXRlZC5cbiAgICAgICogKlxuICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgKiAqXG4gICAgICAqIHtAZXhhbXBsZSBmb3Jtcy90cy9uZXN0ZWRGb3JtR3JvdXAvbmVzdGVkX2Zvcm1fZ3JvdXBfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICAqICpcbiAgICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgICogKlxuICAgICAgKiAqICoqTmdNb2R1bGUqKjogYFJlYWN0aXZlRm9ybXNNb2R1bGVgXG4gICAgICAqICpcbiAgICAgKi9cbiAgICB2YXIgRm9ybUdyb3VwTmFtZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQxMihGb3JtR3JvdXBOYW1lLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBwYXJlbnRcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICAgICAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBGb3JtR3JvdXBOYW1lKHBhcmVudCwgdmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzKSB7XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzO1xuICAgICAgICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwTmFtZS5wcm90b3R5cGUuX2NoZWNrUGFyZW50VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfaGFzSW52YWxpZFBhcmVudCh0aGlzLl9wYXJlbnQpKSB7XG4gICAgICAgICAgICAgICAgUmVhY3RpdmVFcnJvcnMuZ3JvdXBQYXJlbnRFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUdyb3VwTmFtZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdbZm9ybUdyb3VwTmFtZV0nLCBwcm92aWRlcnM6IFtmb3JtR3JvdXBOYW1lUHJvdmlkZXJdIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgRm9ybUdyb3VwTmFtZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSG9zdCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2tpcFNlbGYgfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIEZvcm1Hcm91cE5hbWUucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbmFtZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnZm9ybUdyb3VwTmFtZScsXSB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBGb3JtR3JvdXBOYW1lO1xuICAgIH0oQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUpKTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBmb3JtQXJyYXlOYW1lUHJvdmlkZXIgPSB7XG4gICAgICAgIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gRm9ybUFycmF5TmFtZTsgfSlcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICAqXG4gICAgICAqICpcbiAgICAgICogVGhpcyBkaXJlY3RpdmUgaXMgZGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIGEgcGFyZW50IHtAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9IChzZWxlY3RvcjpcbiAgICAgICogYFtmb3JtR3JvdXBdYCkuXG4gICAgICAqICpcbiAgICAgICogSXQgYWNjZXB0cyB0aGUgc3RyaW5nIG5hbWUgb2YgdGhlIG5lc3RlZCB7QGxpbmsgRm9ybUFycmF5fSB5b3Ugd2FudCB0byBsaW5rLCBhbmRcbiAgICAgICogd2lsbCBsb29rIGZvciBhIHtAbGluayBGb3JtQXJyYXl9IHJlZ2lzdGVyZWQgd2l0aCB0aGF0IG5hbWUgaW4gdGhlIHBhcmVudFxuICAgICAgKiB7QGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSB5b3UgcGFzc2VkIGludG8ge0BsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0uXG4gICAgICAqICpcbiAgICAgICogTmVzdGVkIGZvcm0gYXJyYXlzIGNhbiBjb21lIGluIGhhbmR5IHdoZW4geW91IGhhdmUgYSBncm91cCBvZiBmb3JtIGNvbnRyb2xzIGJ1dFxuICAgICAgKiB5b3UncmUgbm90IHN1cmUgaG93IG1hbnkgdGhlcmUgd2lsbCBiZS4gRm9ybSBhcnJheXMgYWxsb3cgeW91IHRvIGNyZWF0ZSBuZXdcbiAgICAgICogZm9ybSBjb250cm9scyBkeW5hbWljYWxseS5cbiAgICAgICogKlxuICAgICAgKiAqKkFjY2VzcyB0aGUgYXJyYXkqKjogWW91IGNhbiBhY2Nlc3MgdGhlIGFzc29jaWF0ZWQge0BsaW5rIEZvcm1BcnJheX0gdXNpbmcgdGhlXG4gICAgICAqIHtAbGluayBBYnN0cmFjdENvbnRyb2wuZ2V0fSBtZXRob2Qgb24gdGhlIHBhcmVudCB7QGxpbmsgRm9ybUdyb3VwfS5cbiAgICAgICogRXg6IGB0aGlzLmZvcm0uZ2V0KCdjaXRpZXMnKWAuXG4gICAgICAqICpcbiAgICAgICogKipHZXQgdGhlIHZhbHVlKio6IHRoZSBgdmFsdWVgIHByb3BlcnR5IGlzIGFsd2F5cyBzeW5jZWQgYW5kIGF2YWlsYWJsZSBvbiB0aGVcbiAgICAgICoge0BsaW5rIEZvcm1BcnJheX0uIFNlZSBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgcHJvcGVydGllcyBpbiB7QGxpbmsgQWJzdHJhY3RDb250cm9sfS5cbiAgICAgICogKlxuICAgICAgKiAqKlNldCB0aGUgdmFsdWUqKjogWW91IGNhbiBzZXQgYW4gaW5pdGlhbCB2YWx1ZSBmb3IgZWFjaCBjaGlsZCBjb250cm9sIHdoZW4gaW5zdGFudGlhdGluZ1xuICAgICAgKiB0aGUge0BsaW5rIEZvcm1BcnJheX0sIG9yIHlvdSBjYW4gc2V0IHRoZSB2YWx1ZSBwcm9ncmFtbWF0aWNhbGx5IGxhdGVyIHVzaW5nIHRoZVxuICAgICAgKiB7QGxpbmsgRm9ybUFycmF5fSdzIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc2V0VmFsdWV9IG9yIHtAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX1cbiAgICAgICogbWV0aG9kcy5cbiAgICAgICogKlxuICAgICAgKiAqKkxpc3RlbiB0byB2YWx1ZSoqOiBJZiB5b3Ugd2FudCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIGFycmF5LCB5b3UgY2FuXG4gICAgICAqIHN1YnNjcmliZSB0byB0aGUge0BsaW5rIEZvcm1BcnJheX0ncyB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnZhbHVlQ2hhbmdlc30gZXZlbnQuICBZb3UgY2FuIGFsc29cbiAgICAgICogbGlzdGVuIHRvIGl0cyB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnN0YXR1c0NoYW5nZXN9IGV2ZW50IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb25cbiAgICAgICogc3RhdHVzIGlzIHJlLWNhbGN1bGF0ZWQuXG4gICAgICAqICpcbiAgICAgICogKipBZGQgbmV3IGNvbnRyb2xzKio6IFlvdSBjYW4gYWRkIG5ldyBjb250cm9scyB0byB0aGUge0BsaW5rIEZvcm1BcnJheX0gZHluYW1pY2FsbHkgYnlcbiAgICAgICogY2FsbGluZyBpdHMge0BsaW5rIEZvcm1BcnJheS5wdXNofSBtZXRob2QuXG4gICAgICAqIEV4OiBgdGhpcy5mb3JtLmdldCgnY2l0aWVzJykucHVzaChuZXcgRm9ybUNvbnRyb2woKSk7YFxuICAgICAgKiAqXG4gICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAqICpcbiAgICAgICoge0BleGFtcGxlIGZvcm1zL3RzL25lc3RlZEZvcm1BcnJheS9uZXN0ZWRfZm9ybV9hcnJheV9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgICogKlxuICAgICAgKiAqICoqbnBtIHBhY2thZ2UqKjogYEBhbmd1bGFyL2Zvcm1zYFxuICAgICAgKiAqXG4gICAgICAqICogKipOZ01vZHVsZSoqOiBgUmVhY3RpdmVGb3Jtc01vZHVsZWBcbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBGb3JtQXJyYXlOYW1lID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDEyKEZvcm1BcnJheU5hbWUsIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEZvcm1BcnJheU5hbWUocGFyZW50LCB2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdG9ycyA9IHZhbGlkYXRvcnM7XG4gICAgICAgICAgICB0aGlzLl9hc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXlOYW1lLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrUGFyZW50VHlwZSgpO1xuICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLmFkZEZvcm1BcnJheSh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXlOYW1lLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1EaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlRm9ybUFycmF5KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUFycmF5TmFtZS5wcm90b3R5cGUsIFwiY29udHJvbFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5mb3JtRGlyZWN0aXZlLmdldEZvcm1BcnJheSh0aGlzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQXJyYXlOYW1lLnByb3RvdHlwZSwgXCJmb3JtRGlyZWN0aXZlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudCA/ICh0aGlzLl9wYXJlbnQuZm9ybURpcmVjdGl2ZSkgOiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQXJyYXlOYW1lLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb250cm9sUGF0aCh0aGlzLm5hbWUsIHRoaXMuX3BhcmVudCk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUFycmF5TmFtZS5wcm90b3R5cGUsIFwidmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl92YWxpZGF0b3JzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQXJyYXlOYW1lLnByb3RvdHlwZSwgXCJhc3luY1ZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9hc3luY1ZhbGlkYXRvcnMpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXlOYW1lLnByb3RvdHlwZS5fY2hlY2tQYXJlbnRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF9oYXNJbnZhbGlkUGFyZW50KHRoaXMuX3BhcmVudCkpIHtcbiAgICAgICAgICAgICAgICBSZWFjdGl2ZUVycm9ycy5hcnJheVBhcmVudEV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtQXJyYXlOYW1lLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ1tmb3JtQXJyYXlOYW1lXScsIHByb3ZpZGVyczogW2Zvcm1BcnJheU5hbWVQcm92aWRlcl0gfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBGb3JtQXJyYXlOYW1lLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ib3N0IH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ta2lwU2VsZiB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgRm9ybUFycmF5TmFtZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICduYW1lJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWydmb3JtQXJyYXlOYW1lJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1BcnJheU5hbWU7XG4gICAgfShDb250cm9sQ29udGFpbmVyKSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYXJlbnRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9oYXNJbnZhbGlkUGFyZW50KHBhcmVudCkge1xuICAgICAgICByZXR1cm4gIShwYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBOYW1lKSAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cERpcmVjdGl2ZSkgJiZcbiAgICAgICAgICAgICEocGFyZW50IGluc3RhbmNlb2YgRm9ybUFycmF5TmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkMTAgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9sTmFtZUJpbmRpbmcgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5nQ29udHJvbCxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBGb3JtQ29udHJvbE5hbWU7IH0pXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiAgZWxlbWVudCBieSBuYW1lLlxuICAgICAgKiAqXG4gICAgICAqIEluIG90aGVyIHdvcmRzLCB0aGlzIGRpcmVjdGl2ZSBlbnN1cmVzIHRoYXQgYW55IHZhbHVlcyB3cml0dGVuIHRvIHRoZSB7QGxpbmsgRm9ybUNvbnRyb2x9XG4gICAgICAqIGluc3RhbmNlIHByb2dyYW1tYXRpY2FsbHkgd2lsbCBiZSB3cml0dGVuIHRvIHRoZSBET00gZWxlbWVudCAobW9kZWwgLT4gdmlldykuIENvbnZlcnNlbHksXG4gICAgICAqIGFueSB2YWx1ZXMgd3JpdHRlbiB0byB0aGUgRE9NIGVsZW1lbnQgdGhyb3VnaCB1c2VyIGlucHV0IHdpbGwgYmUgcmVmbGVjdGVkIGluIHRoZVxuICAgICAgKiB7QGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlICh2aWV3IC0+IG1vZGVsKS5cbiAgICAgICogKlxuICAgICAgKiAqXG4gICAgICAqIFRoaXMgZGlyZWN0aXZlIGlzIGRlc2lnbmVkIHRvIGJlIHVzZWQgd2l0aCBhIHBhcmVudCB7QGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfSAoc2VsZWN0b3I6XG4gICAgICAqIGBbZm9ybUdyb3VwXWApLlxuICAgICAgKiAqXG4gICAgICAqIEl0IGFjY2VwdHMgdGhlIHN0cmluZyBuYW1lIG9mIHRoZSB7QGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlIHlvdSB3YW50IHRvXG4gICAgICAqIGxpbmssIGFuZCB3aWxsIGxvb2sgZm9yIGEge0BsaW5rIEZvcm1Db250cm9sfSByZWdpc3RlcmVkIHdpdGggdGhhdCBuYW1lIGluIHRoZVxuICAgICAgKiBjbG9zZXN0IHtAbGluayBGb3JtR3JvdXB9IG9yIHtAbGluayBGb3JtQXJyYXl9IGFib3ZlIGl0LlxuICAgICAgKiAqXG4gICAgICAqICoqQWNjZXNzIHRoZSBjb250cm9sKio6IFlvdSBjYW4gYWNjZXNzIHRoZSB7QGxpbmsgRm9ybUNvbnRyb2x9IGFzc29jaWF0ZWQgd2l0aFxuICAgICAgKiB0aGlzIGRpcmVjdGl2ZSBieSB1c2luZyB0aGUge0BsaW5rIEFic3RyYWN0Q29udHJvbC5nZXR9IG1ldGhvZC5cbiAgICAgICogRXg6IGB0aGlzLmZvcm0uZ2V0KCdmaXJzdCcpO2BcbiAgICAgICogKlxuICAgICAgKiAqKkdldCB2YWx1ZSoqOiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyBhbHdheXMgc3luY2VkIGFuZCBhdmFpbGFibGUgb24gdGhlIHtAbGluayBGb3JtQ29udHJvbH0uXG4gICAgICAqIFNlZSBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgcHJvcGVydGllcyBpbiB7QGxpbmsgQWJzdHJhY3RDb250cm9sfS5cbiAgICAgICogKlxuICAgICAgKiAqKlNldCB2YWx1ZSoqOiBZb3UgY2FuIHNldCBhbiBpbml0aWFsIHZhbHVlIGZvciB0aGUgY29udHJvbCB3aGVuIGluc3RhbnRpYXRpbmcgdGhlXG4gICAgICAqIHtAbGluayBGb3JtQ29udHJvbH0sIG9yIHlvdSBjYW4gc2V0IGl0IHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmdcbiAgICAgICoge0BsaW5rIEFic3RyYWN0Q29udHJvbC5zZXRWYWx1ZX0gb3Ige0BsaW5rIEFic3RyYWN0Q29udHJvbC5wYXRjaFZhbHVlfS5cbiAgICAgICogKlxuICAgICAgKiAqKkxpc3RlbiB0byB2YWx1ZSoqOiBJZiB5b3Ugd2FudCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wsIHlvdSBjYW5cbiAgICAgICogc3Vic2NyaWJlIHRvIHRoZSB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnZhbHVlQ2hhbmdlc30gZXZlbnQuICBZb3UgY2FuIGFsc28gbGlzdGVuIHRvXG4gICAgICAqIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzQ2hhbmdlc30gdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgaXNcbiAgICAgICogcmUtY2FsY3VsYXRlZC5cbiAgICAgICogKlxuICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgKiAqXG4gICAgICAqIEluIHRoaXMgZXhhbXBsZSwgd2UgY3JlYXRlIGZvcm0gY29udHJvbHMgZm9yIGZpcnN0IG5hbWUgYW5kIGxhc3QgbmFtZS5cbiAgICAgICogKlxuICAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybUdyb3VwL3NpbXBsZV9mb3JtX2dyb3VwX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAgKiAqXG4gICAgICAqIFRvIHNlZSBgZm9ybUNvbnRyb2xOYW1lYCBleGFtcGxlcyB3aXRoIGRpZmZlcmVudCBmb3JtIGNvbnRyb2wgdHlwZXMsIHNlZTpcbiAgICAgICogKlxuICAgICAgKiAqIFJhZGlvIGJ1dHRvbnM6IHtAbGluayBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yfVxuICAgICAgKiAqIFNlbGVjdHM6IHtAbGluayBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn1cbiAgICAgICogKlxuICAgICAgKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgICogKlxuICAgICAgKiAqKk5nTW9kdWxlKio6IHtAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfVxuICAgICAgKiAqXG4gICAgICAqIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgRm9ybUNvbnRyb2xOYW1lID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDEwKEZvcm1Db250cm9sTmFtZSwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAgICAgKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlQWNjZXNzb3JzXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBGb3JtQ29udHJvbE5hbWUocGFyZW50LCB2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnMsIHZhbHVlQWNjZXNzb3JzKSB7XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX2FkZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMuX3Jhd1ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yID0gc2VsZWN0VmFsdWVBY2Nlc3Nvcih0aGlzLCB2YWx1ZUFjY2Vzc29ycyk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUsIFwiaXNEaXNhYmxlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoaXNEaXNhYmxlZCkgeyBSZWFjdGl2ZUVycm9ycy5kaXNhYmxlZEF0dHJXYXJuaW5nKCk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fYWRkZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0VXBDb250cm9sKCk7XG4gICAgICAgICAgICBpZiAoaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdGhpcy52aWV3TW9kZWwpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwgPSB0aGlzLm1vZGVsO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS51cGRhdGVNb2RlbCh0aGlzLCB0aGlzLm1vZGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybURpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZW1vdmVDb250cm9sKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBuZXdWYWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS52aWV3VG9Nb2RlbFVwZGF0ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlLmVtaXQobmV3VmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb250cm9sUGF0aCh0aGlzLm5hbWUsIHRoaXMuX3BhcmVudCk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZSwgXCJmb3JtRGlyZWN0aXZlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wYXJlbnQgPyB0aGlzLl9wYXJlbnQuZm9ybURpcmVjdGl2ZSA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZSwgXCJ2YWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3Jhd1ZhbGlkYXRvcnMpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUsIFwiYXN5bmNWYWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRyb2w7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUuX2NoZWNrUGFyZW50VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cE5hbWUpICYmXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50IGluc3RhbmNlb2YgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBSZWFjdGl2ZUVycm9ycy5uZ01vZGVsR3JvdXBFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgRm9ybUdyb3VwTmFtZSkgJiYgISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBEaXJlY3RpdmUpICYmXG4gICAgICAgICAgICAgICAgISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBGb3JtQXJyYXlOYW1lKSkge1xuICAgICAgICAgICAgICAgIFJlYWN0aXZlRXJyb3JzLmNvbnRyb2xQYXJlbnRFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLl9zZXRVcENvbnRyb2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGVja1BhcmVudFR5cGUoKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRyb2wgPSB0aGlzLmZvcm1EaXJlY3RpdmUuYWRkQ29udHJvbCh0aGlzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2wuZGlzYWJsZWQgJiYgdGhpcy52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlQWNjZXNzb3Iuc2V0RGlzYWJsZWRTdGF0ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2FkZGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ1tmb3JtQ29udHJvbE5hbWVdJywgcHJvdmlkZXJzOiBbY29udHJvbE5hbWVCaW5kaW5nXSB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIEZvcm1Db250cm9sTmFtZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSG9zdCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2tpcFNlbGYgfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxVRV9BQ0NFU1NPUixdIH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICBGb3JtQ29udHJvbE5hbWUucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbmFtZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnZm9ybUNvbnRyb2xOYW1lJyxdIH0sXSxcbiAgICAgICAgICAgICdtb2RlbCc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnbmdNb2RlbCcsXSB9LF0sXG4gICAgICAgICAgICAndXBkYXRlJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PdXRwdXQsIGFyZ3M6IFsnbmdNb2RlbENoYW5nZScsXSB9LF0sXG4gICAgICAgICAgICAnaXNEaXNhYmxlZCc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnZGlzYWJsZWQnLF0gfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUNvbnRyb2xOYW1lO1xuICAgIH0oTmdDb250cm9sKSk7XG5cbiAgICB2YXIgX19leHRlbmRzJDEzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gUkVRVUlSRURfVkFMSURBVE9SID0ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFJlcXVpcmVkVmFsaWRhdG9yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIENIRUNLQk9YX1JFUVVJUkVEX1ZBTElEQVRPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICBBIERpcmVjdGl2ZSB0aGF0IGFkZHMgdGhlIGByZXF1aXJlZGAgdmFsaWRhdG9yIHRvIGFueSBjb250cm9scyBtYXJrZWQgd2l0aCB0aGVcbiAgICAgICogYHJlcXVpcmVkYCBhdHRyaWJ1dGUsIHZpYSB0aGUge0BsaW5rIE5HX1ZBTElEQVRPUlN9IGJpbmRpbmcuXG4gICAgICAqICpcbiAgICAgICogIyMjIEV4YW1wbGVcbiAgICAgICogKlxuICAgICAgKiBgYGBcbiAgICAgICogPGlucHV0IG5hbWU9XCJmdWxsTmFtZVwiIG5nTW9kZWwgcmVxdWlyZWQ+XG4gICAgICAqIGBgYFxuICAgICAgKiAqXG4gICAgICovXG4gICAgdmFyIFJlcXVpcmVkVmFsaWRhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gUmVxdWlyZWRWYWxpZGF0b3IoKSB7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlcXVpcmVkVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJyZXF1aXJlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVxdWlyZWQgPSB2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSBmYWxzZSAmJiBcIlwiICsgdmFsdWUgIT09ICdmYWxzZSc7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJlcXVpcmVkVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1aXJlZCA/IFZhbGlkYXRvcnMucmVxdWlyZWQoYykgOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmVxdWlyZWRWYWxpZGF0b3IucHJvdG90eXBlLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfTtcbiAgICAgICAgUmVxdWlyZWRWYWxpZGF0b3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJzpub3QoW3R5cGU9Y2hlY2tib3hdKVtyZXF1aXJlZF1bZm9ybUNvbnRyb2xOYW1lXSw6bm90KFt0eXBlPWNoZWNrYm94XSlbcmVxdWlyZWRdW2Zvcm1Db250cm9sXSw6bm90KFt0eXBlPWNoZWNrYm94XSlbcmVxdWlyZWRdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW1JFUVVJUkVEX1ZBTElEQVRPUl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICdbYXR0ci5yZXF1aXJlZF0nOiAncmVxdWlyZWQgPyBcIlwiIDogbnVsbCcgfVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIFJlcXVpcmVkVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgICAgIFJlcXVpcmVkVmFsaWRhdG9yLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ3JlcXVpcmVkJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSZXF1aXJlZFZhbGlkYXRvcjtcbiAgICB9KCkpO1xuICAgIC8qKlxuICAgICAqICBBIERpcmVjdGl2ZSB0aGF0IGFkZHMgdGhlIGByZXF1aXJlZGAgdmFsaWRhdG9yIHRvIGNoZWNrYm94IGNvbnRyb2xzIG1hcmtlZCB3aXRoIHRoZVxuICAgICAgKiBgcmVxdWlyZWRgIGF0dHJpYnV0ZSwgdmlhIHRoZSB7QGxpbmsgTkdfVkFMSURBVE9SU30gYmluZGluZy5cbiAgICAgICogKlxuICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgKiAqXG4gICAgICAqIGBgYFxuICAgICAgKiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFjdGl2ZVwiIG5nTW9kZWwgcmVxdWlyZWQ+XG4gICAgICAqIGBgYFxuICAgICAgKiAqXG4gICAgICovXG4gICAgdmFyIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkMTMoQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvciwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvcigpIHtcbiAgICAgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVkID8gVmFsaWRhdG9ycy5yZXF1aXJlZFRydWUoYykgOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFt0eXBlPWNoZWNrYm94XVtyZXF1aXJlZF1bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPWNoZWNrYm94XVtyZXF1aXJlZF1bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9Y2hlY2tib3hdW3JlcXVpcmVkXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtDSEVDS0JPWF9SRVFVSVJFRF9WQUxJREFUT1JdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnW2F0dHIucmVxdWlyZWRdJzogJ3JlcXVpcmVkID8gXCJcIiA6IG51bGwnIH1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgICAgIHJldHVybiBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yO1xuICAgIH0oUmVxdWlyZWRWYWxpZGF0b3IpKTtcbiAgICAvKipcbiAgICAgKiBQcm92aWRlciB3aGljaCBhZGRzIHtAbGluayBNaW5MZW5ndGhWYWxpZGF0b3J9IHRvIHtAbGluayBOR19WQUxJREFUT1JTfS5cbiAgICAgKlxuICAgICAqICMjIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiB7QGV4YW1wbGUgY29tbW9uL2Zvcm1zL3RzL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyByZWdpb249J21pbid9XG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gTUlOX0xFTkdUSF9WQUxJREFUT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gTWluTGVuZ3RoVmFsaWRhdG9yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICBBIGRpcmVjdGl2ZSB3aGljaCBpbnN0YWxscyB0aGUge0BsaW5rIE1pbkxlbmd0aFZhbGlkYXRvcn0gZm9yIGFueSBgZm9ybUNvbnRyb2xOYW1lYCxcbiAgICAgICogYGZvcm1Db250cm9sYCwgb3IgY29udHJvbCB3aXRoIGBuZ01vZGVsYCB0aGF0IGFsc28gaGFzIGEgYG1pbmxlbmd0aGAgYXR0cmlidXRlLlxuICAgICAgKiAqXG4gICAgICovXG4gICAgdmFyIE1pbkxlbmd0aFZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIE1pbkxlbmd0aFZhbGlkYXRvcigpIHtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGlmICgnbWlubGVuZ3RoJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1pbmxlbmd0aCA9PSBudWxsID8gbnVsbCA6IHRoaXMuX3ZhbGlkYXRvcihjKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE1pbkxlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE1pbkxlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZhbGlkYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRvciA9IFZhbGlkYXRvcnMubWluTGVuZ3RoKHBhcnNlSW50KHRoaXMubWlubGVuZ3RoLCAxMCkpO1xuICAgICAgICB9O1xuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1ttaW5sZW5ndGhdW2Zvcm1Db250cm9sTmFtZV0sW21pbmxlbmd0aF1bZm9ybUNvbnRyb2xdLFttaW5sZW5ndGhdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW01JTl9MRU5HVEhfVkFMSURBVE9SXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJ1thdHRyLm1pbmxlbmd0aF0nOiAnbWlubGVuZ3RoID8gbWlubGVuZ3RoIDogbnVsbCcgfVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE1pbkxlbmd0aFZhbGlkYXRvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbWlubGVuZ3RoJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBNaW5MZW5ndGhWYWxpZGF0b3I7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiBQcm92aWRlciB3aGljaCBhZGRzIHtAbGluayBNYXhMZW5ndGhWYWxpZGF0b3J9IHRvIHtAbGluayBOR19WQUxJREFUT1JTfS5cbiAgICAgKlxuICAgICAqICMjIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiB7QGV4YW1wbGUgY29tbW9uL2Zvcm1zL3RzL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyByZWdpb249J21heCd9XG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gTUFYX0xFTkdUSF9WQUxJREFUT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gTWF4TGVuZ3RoVmFsaWRhdG9yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICBBIGRpcmVjdGl2ZSB3aGljaCBpbnN0YWxscyB0aGUge0BsaW5rIE1heExlbmd0aFZhbGlkYXRvcn0gZm9yIGFueSBgZm9ybUNvbnRyb2xOYW1lLFxuICAgICAgKiBgZm9ybUNvbnRyb2xgLFxuICAgICAgKiBvciBjb250cm9sIHdpdGggYG5nTW9kZWxgIHRoYXQgYWxzbyBoYXMgYSBgbWF4bGVuZ3RoYCBhdHRyaWJ1dGUuXG4gICAgICAqICpcbiAgICAgKi9cbiAgICB2YXIgTWF4TGVuZ3RoVmFsaWRhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gTWF4TGVuZ3RoVmFsaWRhdG9yKCkge1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE1heExlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgaWYgKCdtYXhsZW5ndGgnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fb25DaGFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE1heExlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF4bGVuZ3RoICE9IG51bGwgPyB0aGlzLl92YWxpZGF0b3IoYykgOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTWF4TGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTWF4TGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5fY3JlYXRlVmFsaWRhdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdG9yID0gVmFsaWRhdG9ycy5tYXhMZW5ndGgocGFyc2VJbnQodGhpcy5tYXhsZW5ndGgsIDEwKSk7XG4gICAgICAgIH07XG4gICAgICAgIE1heExlbmd0aFZhbGlkYXRvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW21heGxlbmd0aF1bZm9ybUNvbnRyb2xOYW1lXSxbbWF4bGVuZ3RoXVtmb3JtQ29udHJvbF0sW21heGxlbmd0aF1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbTUFYX0xFTkdUSF9WQUxJREFUT1JdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnW2F0dHIubWF4bGVuZ3RoXSc6ICdtYXhsZW5ndGggPyBtYXhsZW5ndGggOiBudWxsJyB9XG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTWF4TGVuZ3RoVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgICAgIE1heExlbmd0aFZhbGlkYXRvci5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICdtYXhsZW5ndGgnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0IH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE1heExlbmd0aFZhbGlkYXRvcjtcbiAgICB9KCkpO1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIFBBVFRFUk5fVkFMSURBVE9SID0ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFBhdHRlcm5WYWxpZGF0b3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogIEEgRGlyZWN0aXZlIHRoYXQgYWRkcyB0aGUgYHBhdHRlcm5gIHZhbGlkYXRvciB0byBhbnkgY29udHJvbHMgbWFya2VkIHdpdGggdGhlXG4gICAgICAqIGBwYXR0ZXJuYCBhdHRyaWJ1dGUsIHZpYSB0aGUge0BsaW5rIE5HX1ZBTElEQVRPUlN9IGJpbmRpbmcuIFVzZXMgYXR0cmlidXRlIHZhbHVlXG4gICAgICAqIGFzIHRoZSByZWdleCB0byB2YWxpZGF0ZSBDb250cm9sIHZhbHVlIGFnYWluc3QuICBGb2xsb3dzIHBhdHRlcm4gYXR0cmlidXRlXG4gICAgICAqIHNlbWFudGljczsgaS5lLiByZWdleCBtdXN0IG1hdGNoIGVudGlyZSBDb250cm9sIHZhbHVlLlxuICAgICAgKiAqXG4gICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAqICpcbiAgICAgICogYGBgXG4gICAgICAqIDxpbnB1dCBbbmFtZV09XCJmdWxsTmFtZVwiIHBhdHRlcm49XCJbYS16QS1aIF0qXCIgbmdNb2RlbD5cbiAgICAgICogYGBgXG4gICAgICovXG4gICAgdmFyIFBhdHRlcm5WYWxpZGF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBQYXR0ZXJuVmFsaWRhdG9yKCkge1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFBhdHRlcm5WYWxpZGF0b3IucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGlmICgncGF0dGVybicgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vbkNoYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUGF0dGVyblZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoYykgeyByZXR1cm4gdGhpcy5fdmFsaWRhdG9yKGMpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUGF0dGVyblZhbGlkYXRvci5wcm90b3R5cGUucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFBhdHRlcm5WYWxpZGF0b3IucHJvdG90eXBlLl9jcmVhdGVWYWxpZGF0b3IgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX3ZhbGlkYXRvciA9IFZhbGlkYXRvcnMucGF0dGVybih0aGlzLnBhdHRlcm4pOyB9O1xuICAgICAgICBQYXR0ZXJuVmFsaWRhdG9yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbcGF0dGVybl1bZm9ybUNvbnRyb2xOYW1lXSxbcGF0dGVybl1bZm9ybUNvbnRyb2xdLFtwYXR0ZXJuXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtQQVRURVJOX1ZBTElEQVRPUl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICdbYXR0ci5wYXR0ZXJuXSc6ICdwYXR0ZXJuID8gcGF0dGVybiA6IG51bGwnIH1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBQYXR0ZXJuVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgICAgIFBhdHRlcm5WYWxpZGF0b3IucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAncGF0dGVybic6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQgfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUGF0dGVyblZhbGlkYXRvcjtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogICpcbiAgICAgICogSXQgaXMgZXNzZW50aWFsbHkgc3ludGFjdGljIHN1Z2FyIHRoYXQgc2hvcnRlbnMgdGhlIGBuZXcgRm9ybUdyb3VwKClgLFxuICAgICAgKiBgbmV3IEZvcm1Db250cm9sKClgLCBhbmQgYG5ldyBGb3JtQXJyYXkoKWAgYm9pbGVycGxhdGUgdGhhdCBjYW4gYnVpbGQgdXAgaW4gbGFyZ2VyXG4gICAgICAqIGZvcm1zLlxuICAgICAgKiAqXG4gICAgICAqICpcbiAgICAgICogVG8gdXNlLCBpbmplY3QgYEZvcm1CdWlsZGVyYCBpbnRvIHlvdXIgY29tcG9uZW50IGNsYXNzLiBZb3UgY2FuIHRoZW4gY2FsbCBpdHMgbWV0aG9kc1xuICAgICAgKiBkaXJlY3RseS5cbiAgICAgICogKlxuICAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvZm9ybUJ1aWxkZXIvZm9ybV9idWlsZGVyX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAgKiAqXG4gICAgICAqICogKipucG0gcGFja2FnZSoqOiBgQGFuZ3VsYXIvZm9ybXNgXG4gICAgICAqICpcbiAgICAgICogKiAqKk5nTW9kdWxlKio6IHtAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfVxuICAgICAgKiAqXG4gICAgICovXG4gICAgdmFyIEZvcm1CdWlsZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gRm9ybUJ1aWxkZXIoKSB7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqICBDb25zdHJ1Y3QgYSBuZXcge0BsaW5rIEZvcm1Hcm91cH0gd2l0aCB0aGUgZ2l2ZW4gbWFwIG9mIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAgKiBWYWxpZCBrZXlzIGZvciB0aGUgYGV4dHJhYCBwYXJhbWV0ZXIgbWFwIGFyZSBgdmFsaWRhdG9yYCBhbmQgYGFzeW5jVmFsaWRhdG9yYC5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIFNlZSB0aGUge0BsaW5rIEZvcm1Hcm91cH0gY29uc3RydWN0b3IgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sc0NvbmZpZ1xuICAgICAgICAgKiBAcGFyYW0gez89fSBleHRyYVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUJ1aWxkZXIucHJvdG90eXBlLmdyb3VwID0gZnVuY3Rpb24gKGNvbnRyb2xzQ29uZmlnLCBleHRyYSkge1xuICAgICAgICAgICAgaWYgKGV4dHJhID09PSB2b2lkIDApIHsgZXh0cmEgPSBudWxsOyB9XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9scyA9IHRoaXMuX3JlZHVjZUNvbnRyb2xzKGNvbnRyb2xzQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbGlkYXRvciA9IGlzUHJlc2VudChleHRyYSkgPyBleHRyYVsndmFsaWRhdG9yJ10gOiBudWxsO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gYXN5bmNWYWxpZGF0b3IgPSBpc1ByZXNlbnQoZXh0cmEpID8gZXh0cmFbJ2FzeW5jVmFsaWRhdG9yJ10gOiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBGb3JtR3JvdXAoY29udHJvbHMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIENvbnN0cnVjdCBhIG5ldyB7QGxpbmsgRm9ybUNvbnRyb2x9IHdpdGggdGhlIGdpdmVuIGBmb3JtU3RhdGVgLGB2YWxpZGF0b3JgLCBhbmRcbiAgICAgICAgICAqIGBhc3luY1ZhbGlkYXRvcmAuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBgZm9ybVN0YXRlYCBjYW4gZWl0aGVyIGJlIGEgc3RhbmRhbG9uZSB2YWx1ZSBmb3IgdGhlIGZvcm0gY29udHJvbCBvciBhbiBvYmplY3RcbiAgICAgICAgICAqIHRoYXQgY29udGFpbnMgYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkIHN0YXR1cy5cbiAgICAgICAgICAqICpcbiAgICAgICAgICogQHBhcmFtIHs/fSBmb3JtU3RhdGVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gdmFsaWRhdG9yXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGFzeW5jVmFsaWRhdG9yXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQnVpbGRlci5wcm90b3R5cGUuY29udHJvbCA9IGZ1bmN0aW9uIChmb3JtU3RhdGUsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgPT09IHZvaWQgMCkgeyB2YWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3IgPT09IHZvaWQgMCkgeyBhc3luY1ZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgRm9ybUNvbnRyb2woZm9ybVN0YXRlLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBDb25zdHJ1Y3QgYSB7QGxpbmsgRm9ybUFycmF5fSBmcm9tIHRoZSBnaXZlbiBgY29udHJvbHNDb25maWdgIGFycmF5IG9mXG4gICAgICAgICAgKiBjb25maWd1cmF0aW9uLCB3aXRoIHRoZSBnaXZlbiBvcHRpb25hbCBgdmFsaWRhdG9yYCBhbmQgYGFzeW5jVmFsaWRhdG9yYC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sc0NvbmZpZ1xuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWxpZGF0b3JcbiAgICAgICAgICogQHBhcmFtIHs/PX0gYXN5bmNWYWxpZGF0b3JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1CdWlsZGVyLnByb3RvdHlwZS5hcnJheSA9IGZ1bmN0aW9uIChjb250cm9sc0NvbmZpZywgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgPT09IHZvaWQgMCkgeyB2YWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3IgPT09IHZvaWQgMCkgeyBhc3luY1ZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNvbnRyb2xzID0gY29udHJvbHNDb25maWcubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBfdGhpcy5fY3JlYXRlQ29udHJvbChjKTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvcm1BcnJheShjb250cm9scywgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xzQ29uZmlnXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQnVpbGRlci5wcm90b3R5cGUuX3JlZHVjZUNvbnRyb2xzID0gZnVuY3Rpb24gKGNvbnRyb2xzQ29uZmlnKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udHJvbHMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbnRyb2xzQ29uZmlnKS5mb3JFYWNoKGZ1bmN0aW9uIChjb250cm9sTmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzW2NvbnRyb2xOYW1lXSA9IF90aGlzLl9jcmVhdGVDb250cm9sKGNvbnRyb2xzQ29uZmlnW2NvbnRyb2xOYW1lXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9scztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbENvbmZpZ1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUJ1aWxkZXIucHJvdG90eXBlLl9jcmVhdGVDb250cm9sID0gZnVuY3Rpb24gKGNvbnRyb2xDb25maWcpIHtcbiAgICAgICAgICAgIGlmIChjb250cm9sQ29uZmlnIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgfHwgY29udHJvbENvbmZpZyBpbnN0YW5jZW9mIEZvcm1Hcm91cCB8fFxuICAgICAgICAgICAgICAgIGNvbnRyb2xDb25maWcgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbENvbmZpZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29udHJvbENvbmZpZykpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZSA9IGNvbnRyb2xDb25maWdbMF07XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdmFsaWRhdG9yID0gY29udHJvbENvbmZpZy5sZW5ndGggPiAxID8gY29udHJvbENvbmZpZ1sxXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gYXN5bmNWYWxpZGF0b3IgPSBjb250cm9sQ29uZmlnLmxlbmd0aCA+IDIgPyBjb250cm9sQ29uZmlnWzJdIDogbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sKHZhbHVlLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1CdWlsZGVyLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0YWJsZSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgRm9ybUJ1aWxkZXIuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1CdWlsZGVyO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gVkVSU0lPTiA9IG5ldyBfYW5ndWxhcl9jb3JlLlZlcnNpb24oJzIuMy4xJyk7XG5cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBTSEFSRURfRk9STV9ESVJFQ1RJVkVTID0gW1xuICAgICAgICBOZ1NlbGVjdE9wdGlvbixcbiAgICAgICAgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbixcbiAgICAgICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIE51bWJlclZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFJhbmdlVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIE5nQ29udHJvbFN0YXR1cyxcbiAgICAgICAgTmdDb250cm9sU3RhdHVzR3JvdXAsXG4gICAgICAgIFJlcXVpcmVkVmFsaWRhdG9yLFxuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IsXG4gICAgICAgIE1heExlbmd0aFZhbGlkYXRvcixcbiAgICAgICAgUGF0dGVyblZhbGlkYXRvcixcbiAgICAgICAgQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvcixcbiAgICBdO1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIFRFTVBMQVRFX0RSSVZFTl9ESVJFQ1RJVkVTID0gW05nTW9kZWwsIE5nTW9kZWxHcm91cCwgTmdGb3JtXTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBSRUFDVElWRV9EUklWRU5fRElSRUNUSVZFUyA9IFtGb3JtQ29udHJvbERpcmVjdGl2ZSwgRm9ybUdyb3VwRGlyZWN0aXZlLCBGb3JtQ29udHJvbE5hbWUsIEZvcm1Hcm91cE5hbWUsIEZvcm1BcnJheU5hbWVdO1xuICAgIC8qKlxuICAgICAqICBJbnRlcm5hbCBtb2R1bGUgdXNlZCBmb3Igc2hhcmluZyBkaXJlY3RpdmVzIGJldHdlZW4gRm9ybXNNb2R1bGUgYW5kIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICAgKi9cbiAgICB2YXIgSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIEludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUoKSB7XG4gICAgICAgIH1cbiAgICAgICAgSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk5nTW9kdWxlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBTSEFSRURfRk9STV9ESVJFQ1RJVkVTLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogU0hBUkVEX0ZPUk1fRElSRUNUSVZFUyxcbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgICAgIHJldHVybiBJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiAgVGhlIG5nIG1vZHVsZSBmb3IgZm9ybXMuXG4gICAgICovXG4gICAgdmFyIEZvcm1zTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gRm9ybXNNb2R1bGUoKSB7XG4gICAgICAgIH1cbiAgICAgICAgRm9ybXNNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5OZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogVEVNUExBVEVfRFJJVkVOX0RJUkVDVElWRVMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtSYWRpb0NvbnRyb2xSZWdpc3RyeV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBbSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZSwgVEVNUExBVEVfRFJJVkVOX0RJUkVDVElWRVNdXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgRm9ybXNNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1zTW9kdWxlO1xuICAgIH0oKSk7XG4gICAgLyoqXG4gICAgICogIFRoZSBuZyBtb2R1bGUgZm9yIHJlYWN0aXZlIGZvcm1zLlxuICAgICAqL1xuICAgIHZhciBSZWFjdGl2ZUZvcm1zTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gUmVhY3RpdmVGb3Jtc01vZHVsZSgpIHtcbiAgICAgICAgfVxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuTmdNb2R1bGUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtSRUFDVElWRV9EUklWRU5fRElSRUNUSVZFU10sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtGb3JtQnVpbGRlciwgUmFkaW9Db250cm9sUmVnaXN0cnldLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogW0ludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUsIFJFQUNUSVZFX0RSSVZFTl9ESVJFQ1RJVkVTXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICAgICAgcmV0dXJuIFJlYWN0aXZlRm9ybXNNb2R1bGU7XG4gICAgfSgpKTtcblxuICAgIGV4cG9ydHMuQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlID0gQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlO1xuICAgIGV4cG9ydHMuQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUgPSBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZTtcbiAgICBleHBvcnRzLkNoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IgPSBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuICAgIGV4cG9ydHMuQ29udHJvbENvbnRhaW5lciA9IENvbnRyb2xDb250YWluZXI7XG4gICAgZXhwb3J0cy5OR19WQUxVRV9BQ0NFU1NPUiA9IE5HX1ZBTFVFX0FDQ0VTU09SO1xuICAgIGV4cG9ydHMuRGVmYXVsdFZhbHVlQWNjZXNzb3IgPSBEZWZhdWx0VmFsdWVBY2Nlc3NvcjtcbiAgICBleHBvcnRzLk5nQ29udHJvbCA9IE5nQ29udHJvbDtcbiAgICBleHBvcnRzLk5nQ29udHJvbFN0YXR1cyA9IE5nQ29udHJvbFN0YXR1cztcbiAgICBleHBvcnRzLk5nQ29udHJvbFN0YXR1c0dyb3VwID0gTmdDb250cm9sU3RhdHVzR3JvdXA7XG4gICAgZXhwb3J0cy5OZ0Zvcm0gPSBOZ0Zvcm07XG4gICAgZXhwb3J0cy5OZ01vZGVsID0gTmdNb2RlbDtcbiAgICBleHBvcnRzLk5nTW9kZWxHcm91cCA9IE5nTW9kZWxHcm91cDtcbiAgICBleHBvcnRzLlJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IgPSBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuICAgIGV4cG9ydHMuRm9ybUNvbnRyb2xEaXJlY3RpdmUgPSBGb3JtQ29udHJvbERpcmVjdGl2ZTtcbiAgICBleHBvcnRzLkZvcm1Db250cm9sTmFtZSA9IEZvcm1Db250cm9sTmFtZTtcbiAgICBleHBvcnRzLkZvcm1Hcm91cERpcmVjdGl2ZSA9IEZvcm1Hcm91cERpcmVjdGl2ZTtcbiAgICBleHBvcnRzLkZvcm1BcnJheU5hbWUgPSBGb3JtQXJyYXlOYW1lO1xuICAgIGV4cG9ydHMuRm9ybUdyb3VwTmFtZSA9IEZvcm1Hcm91cE5hbWU7XG4gICAgZXhwb3J0cy5OZ1NlbGVjdE9wdGlvbiA9IE5nU2VsZWN0T3B0aW9uO1xuICAgIGV4cG9ydHMuU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IgPSBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgICBleHBvcnRzLlNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IgPSBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuICAgIGV4cG9ydHMuQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvciA9IENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3I7XG4gICAgZXhwb3J0cy5NYXhMZW5ndGhWYWxpZGF0b3IgPSBNYXhMZW5ndGhWYWxpZGF0b3I7XG4gICAgZXhwb3J0cy5NaW5MZW5ndGhWYWxpZGF0b3IgPSBNaW5MZW5ndGhWYWxpZGF0b3I7XG4gICAgZXhwb3J0cy5QYXR0ZXJuVmFsaWRhdG9yID0gUGF0dGVyblZhbGlkYXRvcjtcbiAgICBleHBvcnRzLlJlcXVpcmVkVmFsaWRhdG9yID0gUmVxdWlyZWRWYWxpZGF0b3I7XG4gICAgZXhwb3J0cy5Gb3JtQnVpbGRlciA9IEZvcm1CdWlsZGVyO1xuICAgIGV4cG9ydHMuQWJzdHJhY3RDb250cm9sID0gQWJzdHJhY3RDb250cm9sO1xuICAgIGV4cG9ydHMuRm9ybUFycmF5ID0gRm9ybUFycmF5O1xuICAgIGV4cG9ydHMuRm9ybUNvbnRyb2wgPSBGb3JtQ29udHJvbDtcbiAgICBleHBvcnRzLkZvcm1Hcm91cCA9IEZvcm1Hcm91cDtcbiAgICBleHBvcnRzLk5HX0FTWU5DX1ZBTElEQVRPUlMgPSBOR19BU1lOQ19WQUxJREFUT1JTO1xuICAgIGV4cG9ydHMuTkdfVkFMSURBVE9SUyA9IE5HX1ZBTElEQVRPUlM7XG4gICAgZXhwb3J0cy5WYWxpZGF0b3JzID0gVmFsaWRhdG9ycztcbiAgICBleHBvcnRzLlZFUlNJT04gPSBWRVJTSU9OO1xuICAgIGV4cG9ydHMuRm9ybXNNb2R1bGUgPSBGb3Jtc01vZHVsZTtcbiAgICBleHBvcnRzLlJlYWN0aXZlRm9ybXNNb2R1bGUgPSBSZWFjdGl2ZUZvcm1zTW9kdWxlO1xuXG59KSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L0Bhbmd1bGFyL2Zvcm1zL2J1bmRsZXMvZm9ybXMudW1kLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxudmFyIG1lbnVfMSA9IHJlcXVpcmUoXCIuL3NyYy9tZW51L21lbnVcIik7XG52YXIgbWVzc2FnZV8xID0gcmVxdWlyZShcIi4vc3JjL21lc3NhZ2UvbWVzc2FnZVwiKTtcbnZhciB0b29sdGlwXzEgPSByZXF1aXJlKFwiLi9zcmMvcG9wdXAvdG9vbHRpcFwiKTtcbnZhciBwb3B1cF8xID0gcmVxdWlyZShcIi4vc3JjL3BvcHVwL3BvcHVwXCIpO1xudmFyIG1vZGFsXzEgPSByZXF1aXJlKFwiLi9zcmMvbW9kYWwvbW9kYWxcIik7XG52YXIgc2VnbWVudF8xID0gcmVxdWlyZShcIi4vc3JjL3NlZ21lbnQvc2VnbWVudFwiKTtcbnZhciBsaXN0XzEgPSByZXF1aXJlKFwiLi9zcmMvbGlzdC9saXN0XCIpO1xudmFyIGJ1dHRvbl8xID0gcmVxdWlyZShcIi4vc3JjL2J1dHRvbi9idXR0b25cIik7XG52YXIgaXRlbV8xID0gcmVxdWlyZShcIi4vc3JjL2l0ZW0vaXRlbVwiKTtcbnZhciB2aXNpYmlsaXR5XzEgPSByZXF1aXJlKFwiLi9zcmMvdmlzaWJpbGl0eS92aXNpYmlsaXR5XCIpO1xudmFyIGRyb3Bkb3duXzEgPSByZXF1aXJlKFwiLi9zcmMvZHJvcGRvd24vZHJvcGRvd25cIik7XG52YXIgc2VsZWN0XzEgPSByZXF1aXJlKFwiLi9zcmMvc2VsZWN0L3NlbGVjdFwiKTtcbnZhciBzZWFyY2hfMSA9IHJlcXVpcmUoXCIuL3NyYy9zZWFyY2gvc2VhcmNoXCIpO1xudmFyIGxvYWRlcl8xID0gcmVxdWlyZShcIi4vc3JjL2xvYWRlci9sb2FkZXJcIik7XG52YXIgY2FyZF8xID0gcmVxdWlyZShcIi4vc3JjL2NhcmQvY2FyZFwiKTtcbnZhciBpbnB1dF8xID0gcmVxdWlyZShcIi4vc3JjL2lucHV0L2lucHV0XCIpO1xudmFyIHNpZGViYXJfMSA9IHJlcXVpcmUoXCIuL3NyYy9zaWRlYmFyL3NpZGViYXJcIik7XG52YXIgdGFiXzEgPSByZXF1aXJlKFwiLi9zcmMvdGFiL3RhYlwiKTtcbnZhciBmbGFnXzEgPSByZXF1aXJlKFwiLi9zcmMvZmxhZy9mbGFnXCIpO1xudmFyIGNvbnRleHRtZW51XzEgPSByZXF1aXJlKFwiLi9zcmMvY29udGV4dG1lbnUvY29udGV4dG1lbnVcIik7XG52YXIgcHJvZ3Jlc3NfMSA9IHJlcXVpcmUoXCIuL3NyYy9wcm9ncmVzcy9wcm9ncmVzc1wiKTtcbnZhciBkaW1tZXJfMSA9IHJlcXVpcmUoXCIuL3NyYy9kaW1tZXIvZGltbWVyXCIpO1xudmFyIHRyYW5zaXRpb25fMSA9IHJlcXVpcmUoXCIuL3NyYy90cmFuc2l0aW9uL3RyYW5zaXRpb25cIik7XG52YXIgc2hhcGVfMSA9IHJlcXVpcmUoXCIuL3NyYy9zaGFwZS9zaGFwZVwiKTtcbnZhciBhY2NvcmRpb25fMSA9IHJlcXVpcmUoXCIuL3NyYy9hY2NvcmRpb24vYWNjb3JkaW9uXCIpO1xudmFyIHJhdGluZ18xID0gcmVxdWlyZShcIi4vc3JjL3JhdGluZy9yYXRpbmdcIik7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcmMvbWVudS9tZW51XCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NyYy9jb250ZXh0bWVudS9jb250ZXh0bWVudVwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcmMvbWVzc2FnZS9tZXNzYWdlXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NyYy9wb3B1cC90b29sdGlwXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NyYy9wb3B1cC9wb3B1cFwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcmMvdmlzaWJpbGl0eS92aXNpYmlsaXR5XCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NyYy9tb2RhbC9tb2RhbFwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcmMvc2VnbWVudC9zZWdtZW50XCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NyYy9yYXRpbmcvcmF0aW5nXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NyYy9saXN0L2xpc3RcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vc3JjL2J1dHRvbi9idXR0b25cIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vc3JjL3NlYXJjaC9zZWFyY2hcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vc3JjL2l0ZW0vaXRlbVwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcmMvZHJvcGRvd24vZHJvcGRvd25cIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vc3JjL3NlbGVjdC9zZWxlY3RcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vc3JjL2xvYWRlci9sb2FkZXJcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vc3JjL2NhcmQvY2FyZFwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcmMvaW5wdXQvaW5wdXRcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vc3JjL3NpZGViYXIvc2lkZWJhclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcmMvdGFiL3RhYlwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcmMvZmxhZy9mbGFnXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NyYy9wcm9ncmVzcy9wcm9ncmVzc1wiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcmMvZGltbWVyL2RpbW1lclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcmMvdHJhbnNpdGlvbi90cmFuc2l0aW9uXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NyYy9zaGFwZS9zaGFwZVwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcmMvYWNjb3JkaW9uL2FjY29yZGlvblwiKSk7XG5leHBvcnRzLlNFTUFOVElDX0NPTVBPTkVOVFMgPSBbXG4gICAgY2FyZF8xLlNlbWFudGljQ2FyZENvbXBvbmVudCxcbiAgICBjYXJkXzEuU2VtYW50aWNDYXJkc0NvbXBvbmVudCxcbiAgICBjb250ZXh0bWVudV8xLlNlbWFudGljQ29udGV4dE1lbnVDb21wb25lbnQsXG4gICAgaW5wdXRfMS5TZW1hbnRpY0lucHV0Q29tcG9uZW50LFxuICAgIGlucHV0XzEuU2VtYW50aWNUZXh0YXJlYUNvbXBvbmVudCxcbiAgICBpbnB1dF8xLlNlbWFudGljQ2hlY2tib3hDb21wb25lbnQsXG4gICAgbWVudV8xLlNlbWFudGljTWVudUNvbXBvbmVudCxcbiAgICBtZXNzYWdlXzEuU2VtYW50aWNNZXNzYWdlQ29tcG9uZW50LFxuICAgIHNlZ21lbnRfMS5TZW1hbnRpY1NlZ21lbnRDb21wb25lbnQsXG4gICAgZGltbWVyXzEuU2VtYW50aWNEaW1tZXJDb21wb25lbnQsXG4gICAgdHJhbnNpdGlvbl8xLlNlbWFudGljVHJhbnNpdGlvbkNvbXBvbmVudCxcbiAgICBzaGFwZV8xLlNlbWFudGljU2hhcGVDb21wb25lbnQsXG4gICAgcG9wdXBfMS5TZW1hbnRpY1BvcHVwQ29tcG9uZW50LFxuICAgIGRyb3Bkb3duXzEuU2VtYW50aWNEcm9wZG93bkNvbXBvbmVudCxcbiAgICBsaXN0XzEuU2VtYW50aWNMaXN0Q29tcG9uZW50LFxuICAgIHNlbGVjdF8xLlNlbWFudGljU2VsZWN0Q29tcG9uZW50LFxuICAgIGZsYWdfMS5TZW1hbnRpY0ZsYWdDb21wb25lbnQsXG4gICAgc2VhcmNoXzEuU2VtYW50aWNTZWFyY2hDb21wb25lbnQsXG4gICAgaXRlbV8xLlNlbWFudGljSXRlbUNvbXBvbmVudCxcbiAgICBzaWRlYmFyXzEuU2VtYW50aWNTaWRlYmFyQ29tcG9uZW50LFxuICAgIHByb2dyZXNzXzEuU2VtYW50aWNQcm9ncmVzc0NvbXBvbmVudCxcbiAgICBtb2RhbF8xLlNlbWFudGljTW9kYWxDb21wb25lbnQsXG4gICAgdGFiXzEuU2VtYW50aWNUYWJzQ29tcG9uZW50LFxuICAgIHRhYl8xLlNlbWFudGljVGFiQ29tcG9uZW50LFxuICAgIGJ1dHRvbl8xLlNlbWFudGljQnV0dG9uQ29tcG9uZW50LFxuICAgIGxvYWRlcl8xLlNlbWFudGljTG9hZGVyQ29tcG9uZW50LFxuICAgIGFjY29yZGlvbl8xLlNlbWFudGljQWNjb3JkaW9uQ29tcG9uZW50LFxuICAgIGFjY29yZGlvbl8xLlNlbWFudGljQWNjb3JkaW9uSXRlbUNvbXBvbmVudCxcbiAgICByYXRpbmdfMS5TZW1hbnRpY1JhdGluZ0NvbXBvbmVudFxuXTtcbmV4cG9ydHMuU0VNQU5USUNfRElSRUNUSVZFUyA9IFtcbiAgICB0b29sdGlwXzEuU01Ub29sdGlwRGlyZWN0aXZlLFxuICAgIHZpc2liaWxpdHlfMS5TTVZpc2liaWxpdHlEaXJlY3RpdmUsXG4gICAgdmlzaWJpbGl0eV8xLlNNRGV2aWNlVmlzaWJpbGl0eURpcmVjdGl2ZSxcbiAgICBtb2RhbF8xLlNNTW9kYWxUYWdzRGlyZWN0aXZlLFxuXTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcbnZhciBjb21tb25fMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIik7XG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcbnZhciBOZ1NlbWFudGljTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOZ1NlbWFudGljTW9kdWxlKCkge1xuICAgIH1cbiAgICByZXR1cm4gTmdTZW1hbnRpY01vZHVsZTtcbn0oKSk7XG5OZ1NlbWFudGljTW9kdWxlID0gX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLk5nTW9kdWxlKHtcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbZXhwb3J0cy5TRU1BTlRJQ19ESVJFQ1RJVkVTLCBleHBvcnRzLlNFTUFOVElDX0NPTVBPTkVOVFNdLFxuICAgICAgICBleHBvcnRzOiBbZXhwb3J0cy5TRU1BTlRJQ19DT01QT05FTlRTLCBleHBvcnRzLlNFTUFOVElDX0RJUkVDVElWRVNdLFxuICAgICAgICBpbXBvcnRzOiBbY29tbW9uXzEuQ29tbW9uTW9kdWxlLCBmb3Jtc18xLkZvcm1zTW9kdWxlLCBmb3Jtc18xLlJlYWN0aXZlRm9ybXNNb2R1bGVdXG4gICAgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgTmdTZW1hbnRpY01vZHVsZSk7XG5leHBvcnRzLk5nU2VtYW50aWNNb2R1bGUgPSBOZ1NlbWFudGljTW9kdWxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25nLXNlbWFudGljL25nLXNlbWFudGljLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgU2VtYW50aWNNZW51Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZW1hbnRpY01lbnVDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMubG9nb0NsYXNzID0gXCJsb2dvXCI7XG4gICAgfVxuICAgIFNlbWFudGljTWVudUNvbXBvbmVudC5wcm90b3R5cGUubmdBZnRlclZpZXdJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBBcnJheS5mcm9tKHRoaXMuaW5uZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2RlcylcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIGVsZW1lbnQubm9kZU5hbWUgPT09IFwiU00tTUVOVVwiOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZWxlbWVudCkgeyByZXR1cm4gZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwidWlcIik7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNlbWFudGljTWVudUNvbXBvbmVudDtcbn0oKSk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJsb2dvXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJjbGFzc1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFNlbWFudGljTWVudUNvbXBvbmVudC5wcm90b3R5cGUsIFwibG9nb0NsYXNzXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJ0aXRsZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLlZpZXdDaGlsZChcImlubmVyRWxlbWVudFwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgY29yZV8xLkVsZW1lbnRSZWYpXG5dLCBTZW1hbnRpY01lbnVDb21wb25lbnQucHJvdG90eXBlLCBcImlubmVyRWxlbWVudFwiLCB2b2lkIDApO1xuU2VtYW50aWNNZW51Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XG4gICAgICAgIGNoYW5nZURldGVjdGlvbjogY29yZV8xLkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgICAgc2VsZWN0b3I6IFwic20tbWVudVwiLFxuICAgICAgICB0ZW1wbGF0ZTogXCI8ZGl2IGNsYXNzPVxcXCJ1aSBtZW51IHt7Y2xhc3N9fVxcXCIgI2lubmVyRWxlbWVudD5cXG48YSBocmVmPVxcXCIjL1xcXCIgKm5nSWY9XFxcImxvZ29cXFwiIGNsYXNzPVxcXCJoZWFkZXIgaXRlbVxcXCI+XFxuICAgIDxpbWcgY2xhc3M9XFxcInt7bG9nb0NsYXNzfX1cXFwiIGFsdD1cXFwie3t0aXRsZX19XFxcIiBzcmM9XFxcInt7bG9nb319XFxcIj5cXG48L2E+XFxuXFxuPGEgaHJlZj1cXFwiIy9cXFwiICpuZ0lmPVxcXCJ0aXRsZSAmJiAhbG9nb1xcXCIgY2xhc3M9XFxcImhlYWRlciBpdGVtXFxcIj5cXG4gICAge3t0aXRsZX19XFxuPC9hPlxcblxcbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cXG48L2Rpdj5cXG5cIlxuICAgIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIFNlbWFudGljTWVudUNvbXBvbmVudCk7XG5leHBvcnRzLlNlbWFudGljTWVudUNvbXBvbmVudCA9IFNlbWFudGljTWVudUNvbXBvbmVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uZy1zZW1hbnRpYy9zcmMvbWVudS9tZW51LmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgU2VtYW50aWNNZXNzYWdlQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZW1hbnRpY01lc3NhZ2VDb21wb25lbnQocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIH1cbiAgICBTZW1hbnRpY01lc3NhZ2VDb21wb25lbnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmRldGFjaFZpZXcoW3RoaXMubWVzc2FnZS5uYXRpdmVFbGVtZW50XSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2VtYW50aWNNZXNzYWdlQ29tcG9uZW50O1xufSgpKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTZW1hbnRpY01lc3NhZ2VDb21wb25lbnQucHJvdG90eXBlLCBcImljb25cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTZW1hbnRpY01lc3NhZ2VDb21wb25lbnQucHJvdG90eXBlLCBcImNsYXNzXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuVmlld0NoaWxkKFwibWVzc2FnZVwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgY29yZV8xLkVsZW1lbnRSZWYpXG5dLCBTZW1hbnRpY01lc3NhZ2VDb21wb25lbnQucHJvdG90eXBlLCBcIm1lc3NhZ2VcIiwgdm9pZCAwKTtcblNlbWFudGljTWVzc2FnZUNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNvcmVfMS5DaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICAgIGVuY2Fwc3VsYXRpb246IGNvcmVfMS5WaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgICAgICBzZWxlY3RvcjogXCJzbS1tZXNzYWdlXCIsXG4gICAgICAgIHN0eWxlczogW1wic20tbWVzc2FnZSB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IDFlbSAwOyB9IG1lc3NhZ2UtaGVhZGVyIHtkaXNwbGF5OiBibG9ja31cIl0sXG4gICAgICAgIHRlbXBsYXRlOiBcIjxkaXYgY2xhc3M9XFxcInVpIG1lc3NhZ2Uge3tjbGFzc319XFxcIiBbbmdDbGFzc109XFxcInsnaWNvbic6IGljb259XFxcIiAjbWVzc2FnZT5cXG48aSBjbGFzcz1cXFwiY2xvc2UgaWNvblxcXCIgKGNsaWNrKT1cXFwiY2xvc2UoKVxcXCI+PC9pPlxcbjxpICpuZ0lmPVxcXCJpY29uXFxcIiBjbGFzcz1cXFwiaWNvbiB7e2ljb259fVxcXCI+PC9pPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVxcXCJtZXNzYWdlLWhlYWRlclxcXCI+PC9uZy1jb250ZW50PlxcbiAgICA8L2Rpdj5cXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVxcXCJtZXNzYWdlLWNvbnRlbnRcXFwiPjwvbmctY29udGVudD5cXG4gIDwvZGl2PlxcbjwvZGl2PlwiXG4gICAgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtjb3JlXzEuUmVuZGVyZXJdKVxuXSwgU2VtYW50aWNNZXNzYWdlQ29tcG9uZW50KTtcbmV4cG9ydHMuU2VtYW50aWNNZXNzYWdlQ29tcG9uZW50ID0gU2VtYW50aWNNZXNzYWdlQ29tcG9uZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25nLXNlbWFudGljL3NyYy9tZXNzYWdlL21lc3NhZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcbnZhciBTTVRvb2x0aXBEaXJlY3RpdmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNNVG9vbHRpcERpcmVjdGl2ZShlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIFNNVG9vbHRpcERpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wb3NpdGlvblwiLCB0aGlzLnNtRGlyUG9zaXRpb24gfHwgXCJ0b3AgY2VudGVyXCIpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdG9vbHRpcFwiLCB0aGlzLnNtRGlyVG9vbHRpcCk7XG4gICAgfTtcbiAgICByZXR1cm4gU01Ub29sdGlwRGlyZWN0aXZlO1xufSgpKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTTVRvb2x0aXBEaXJlY3RpdmUucHJvdG90eXBlLCBcInNtRGlyVG9vbHRpcFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFNNVG9vbHRpcERpcmVjdGl2ZS5wcm90b3R5cGUsIFwic21EaXJQb3NpdGlvblwiLCB2b2lkIDApO1xuU01Ub29sdGlwRGlyZWN0aXZlID0gX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLkRpcmVjdGl2ZSh7XG4gICAgICAgIHNlbGVjdG9yOiBcIltzbURpclRvb2x0aXBdXCJcbiAgICB9KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2NvcmVfMS5WaWV3Q29udGFpbmVyUmVmXSlcbl0sIFNNVG9vbHRpcERpcmVjdGl2ZSk7XG5leHBvcnRzLlNNVG9vbHRpcERpcmVjdGl2ZSA9IFNNVG9vbHRpcERpcmVjdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uZy1zZW1hbnRpYy9zcmMvcG9wdXAvdG9vbHRpcC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xudmFyIFNlbWFudGljUG9wdXBDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlbWFudGljUG9wdXBDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICBTZW1hbnRpY1BvcHVwQ29tcG9uZW50LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGRhdGEgPT09IHZvaWQgMCkgeyBkYXRhID0ge307IH1cbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50LnRhcmdldDtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgY2xvc2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhc3RSZXNvcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgb246IFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgICBvbkhpZGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhpZGUoKTsgfSxcbiAgICAgICAgICAgICAgICBwb3B1cDogdGhpcy5wb3B1cC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSBjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sIGRhdGEpO1xuICAgICAgICAgICAgalF1ZXJ5KHRoaXMuZWxlbWVudClcbiAgICAgICAgICAgICAgICAucG9wdXAob3B0aW9ucylcbiAgICAgICAgICAgICAgICAucG9wdXAoXCJzaG93XCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTZW1hbnRpY1BvcHVwQ29tcG9uZW50LnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlICYmIHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBqUXVlcnkodGhpcy5lbGVtZW50KVxuICAgICAgICAgICAgICAgIC5wb3B1cChcImhpZGVcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTZW1hbnRpY1BvcHVwQ29tcG9uZW50O1xufSgpKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5WaWV3Q2hpbGQoXCJwb3B1cFwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgY29yZV8xLkVsZW1lbnRSZWYpXG5dLCBTZW1hbnRpY1BvcHVwQ29tcG9uZW50LnByb3RvdHlwZSwgXCJwb3B1cFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFNlbWFudGljUG9wdXBDb21wb25lbnQucHJvdG90eXBlLCBcImNsYXNzXCIsIHZvaWQgMCk7XG5TZW1hbnRpY1BvcHVwQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XG4gICAgICAgIGNoYW5nZURldGVjdGlvbjogY29yZV8xLkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgICAgc2VsZWN0b3I6IFwic20tcG9wdXBcIixcbiAgICAgICAgdGVtcGxhdGU6IFwiPGRpdiBjbGFzcz1cXFwidWkgcG9wdXAgdmVyeSB3aWRlIHt7Y2xhc3N9fVxcXCIgI3BvcHVwPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCJcbiAgICB9KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBTZW1hbnRpY1BvcHVwQ29tcG9uZW50KTtcbmV4cG9ydHMuU2VtYW50aWNQb3B1cENvbXBvbmVudCA9IFNlbWFudGljUG9wdXBDb21wb25lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmctc2VtYW50aWMvc3JjL3BvcHVwL3BvcHVwLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgU2VtYW50aWNNb2RhbENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VtYW50aWNNb2RhbENvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5vbk1vZGFsU2hvdyA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub25Nb2RhbEhpZGUgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgIH1cbiAgICBTZW1hbnRpY01vZGFsQ29tcG9uZW50LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMubW9kYWwubmF0aXZlRWxlbWVudClcbiAgICAgICAgICAgIC5tb2RhbChkYXRhIHx8IHt9KVxuICAgICAgICAgICAgLm1vZGFsKFwidG9nZ2xlXCIpO1xuICAgICAgICB0aGlzLm9uTW9kYWxTaG93Lm5leHQodHJ1ZSk7XG4gICAgfTtcbiAgICBTZW1hbnRpY01vZGFsQ29tcG9uZW50LnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBqUXVlcnkodGhpcy5tb2RhbC5uYXRpdmVFbGVtZW50KVxuICAgICAgICAgICAgLm1vZGFsKFwiaGlkZVwiKTtcbiAgICAgICAgdGhpcy5vbk1vZGFsSGlkZS5lbWl0KHRydWUpO1xuICAgIH07XG4gICAgU2VtYW50aWNNb2RhbENvbXBvbmVudC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLm1vZGFsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMubW9kYWwubmF0aXZlRWxlbWVudCk7XG4gICAgfTtcbiAgICByZXR1cm4gU2VtYW50aWNNb2RhbENvbXBvbmVudDtcbn0oKSk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNNb2RhbENvbXBvbmVudC5wcm90b3R5cGUsIFwiY2xhc3NcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTZW1hbnRpY01vZGFsQ29tcG9uZW50LnByb3RvdHlwZSwgXCJ0aXRsZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFNlbWFudGljTW9kYWxDb21wb25lbnQucHJvdG90eXBlLCBcImljb25cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5WaWV3Q2hpbGQoXCJtb2RhbFwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgY29yZV8xLkVsZW1lbnRSZWYpXG5dLCBTZW1hbnRpY01vZGFsQ29tcG9uZW50LnByb3RvdHlwZSwgXCJtb2RhbFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLk91dHB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBjb3JlXzEuRXZlbnRFbWl0dGVyKVxuXSwgU2VtYW50aWNNb2RhbENvbXBvbmVudC5wcm90b3R5cGUsIFwib25Nb2RhbFNob3dcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5PdXRwdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgY29yZV8xLkV2ZW50RW1pdHRlcilcbl0sIFNlbWFudGljTW9kYWxDb21wb25lbnQucHJvdG90eXBlLCBcIm9uTW9kYWxIaWRlXCIsIHZvaWQgMCk7XG5TZW1hbnRpY01vZGFsQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XG4gICAgICAgIGNoYW5nZURldGVjdGlvbjogY29yZV8xLkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgICAgc2VsZWN0b3I6IFwic20tbW9kYWxcIixcbiAgICAgICAgdGVtcGxhdGU6IFwiPGRpdiBjbGFzcz1cXFwidWkgbW9kYWwge3tjbGFzc319XFxcIiAjbW9kYWw+XFxuICAgIDxpIGNsYXNzPVxcXCJjbG9zZSBpY29uXFxcIj48L2k+XFxuICAgIDxkaXYgW25nQ2xhc3NdPVxcXCJ7J2ljb24nOiBpY29ufVxcXCIgY2xhc3M9XFxcInVpIGhlYWRlclxcXCI+XFxuICAgICAgICA8aSAqbmdJZj1cXFwiaWNvblxcXCIgY2xhc3M9XFxcImljb24ge3tpY29ufX1cXFwiPjwvaT5cXG4gICAgICAgIHt7dGl0bGV9fVxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPjwvbmctY29udGVudD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFjdGlvbnNcXFwiPlxcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVxcXCJtb2RhbC1hY3Rpb25zXFxcIj48L25nLWNvbnRlbnQ+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiXG4gICAgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgU2VtYW50aWNNb2RhbENvbXBvbmVudCk7XG5leHBvcnRzLlNlbWFudGljTW9kYWxDb21wb25lbnQgPSBTZW1hbnRpY01vZGFsQ29tcG9uZW50O1xudmFyIFNNTW9kYWxUYWdzRGlyZWN0aXZlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTTU1vZGFsVGFnc0RpcmVjdGl2ZSgpIHtcbiAgICB9XG4gICAgcmV0dXJuIFNNTW9kYWxUYWdzRGlyZWN0aXZlO1xufSgpKTtcblNNTW9kYWxUYWdzRGlyZWN0aXZlID0gX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLkRpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbW9kYWwtY29udGVudCwgbW9kYWwtYWN0aW9ucycgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgU01Nb2RhbFRhZ3NEaXJlY3RpdmUpO1xuZXhwb3J0cy5TTU1vZGFsVGFnc0RpcmVjdGl2ZSA9IFNNTW9kYWxUYWdzRGlyZWN0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25nLXNlbWFudGljL3NyYy9tb2RhbC9tb2RhbC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xudmFyIFNlbWFudGljU2VnbWVudENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VtYW50aWNTZWdtZW50Q29tcG9uZW50KCkge1xuICAgIH1cbiAgICByZXR1cm4gU2VtYW50aWNTZWdtZW50Q29tcG9uZW50O1xufSgpKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dChcImNsYXNzXCIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTZW1hbnRpY1NlZ21lbnRDb21wb25lbnQucHJvdG90eXBlLCBcImNsYXNzXCIsIHZvaWQgMCk7XG5TZW1hbnRpY1NlZ21lbnRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcbiAgICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBjb3JlXzEuQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgICBzZWxlY3RvcjogXCJzbS1zZWdtZW50XCIsXG4gICAgICAgIHRlbXBsYXRlOiBcIjxkaXYgY2xhc3M9XFxcInVpIHNlZ21lbnQge3tjbGFzc319XFxcIj5cXG4gIDxwPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3A+XFxuPC9kaXY+XCJcbiAgICB9KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBTZW1hbnRpY1NlZ21lbnRDb21wb25lbnQpO1xuZXhwb3J0cy5TZW1hbnRpY1NlZ21lbnRDb21wb25lbnQgPSBTZW1hbnRpY1NlZ21lbnRDb21wb25lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmctc2VtYW50aWMvc3JjL3NlZ21lbnQvc2VnbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xudmFyIFNlbWFudGljTGlzdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VtYW50aWNMaXN0Q29tcG9uZW50KCkge1xuICAgIH1cbiAgICBTZW1hbnRpY0xpc3RDb21wb25lbnQucHJvdG90eXBlLm5nQWZ0ZXJWaWV3SW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmlubmVyRWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMpXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7IHJldHVybiBlbGVtZW50Lm5vZGVOYW1lID09PSBcIlNNLUxJU1RcIjsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInVpXCIpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTZW1hbnRpY0xpc3RDb21wb25lbnQ7XG59KCkpO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFNlbWFudGljTGlzdENvbXBvbmVudC5wcm90b3R5cGUsIFwiY2xhc3NcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5WaWV3Q2hpbGQoXCJpbm5lckVsZW1lbnRcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FbGVtZW50UmVmKVxuXSwgU2VtYW50aWNMaXN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJpbm5lckVsZW1lbnRcIiwgdm9pZCAwKTtcblNlbWFudGljTGlzdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNvcmVfMS5DaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICAgIHNlbGVjdG9yOiBcInNtLWxpc3RcIixcbiAgICAgICAgdGVtcGxhdGU6IFwiXFxuPGRpdiBjbGFzcz1cXFwidWkgbGlzdCB7e2NsYXNzfX1cXFwiICNpbm5lckVsZW1lbnQ+XFxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxcbjwvZGl2PlxcblwiXG4gICAgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgU2VtYW50aWNMaXN0Q29tcG9uZW50KTtcbmV4cG9ydHMuU2VtYW50aWNMaXN0Q29tcG9uZW50ID0gU2VtYW50aWNMaXN0Q29tcG9uZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25nLXNlbWFudGljL3NyYy9saXN0L2xpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcbnZhciBTZW1hbnRpY0J1dHRvbkNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VtYW50aWNCdXR0b25Db21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIFNlbWFudGljQnV0dG9uQ29tcG9uZW50O1xufSgpKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dChcImNsYXNzXCIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTZW1hbnRpY0J1dHRvbkNvbXBvbmVudC5wcm90b3R5cGUsIFwiY2xhc3NcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dChcImljb25cIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFNlbWFudGljQnV0dG9uQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpY29uXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoXCJkaXNhYmxlZFwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbl0sIFNlbWFudGljQnV0dG9uQ29tcG9uZW50LnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB2b2lkIDApO1xuU2VtYW50aWNCdXR0b25Db21wb25lbnQgPSBfX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcbiAgICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBjb3JlXzEuQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgICBzZWxlY3RvcjogXCJzbS1idXR0b25cIixcbiAgICAgICAgdGVtcGxhdGU6IFwiPGJ1dHRvbiBbbmdDbGFzc109XFxcIntpY29uOiBpY29ufVxcXCIgW2F0dHIuZGlzYWJsZWRdPVxcXCJkaXNhYmxlZCA/IHRydWUgOiBudWxsXFxcIiBjbGFzcz1cXFwidWkge3tjbGFzc319IGJ1dHRvblxcXCI+XFxuICA8aSAqbmdJZj1cXFwiaWNvblxcXCIgY2xhc3M9XFxcInt7aWNvbn19IGljb25cXFwiPjwvaT5cXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxcbjwvYnV0dG9uPlwiXG4gICAgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgU2VtYW50aWNCdXR0b25Db21wb25lbnQpO1xuZXhwb3J0cy5TZW1hbnRpY0J1dHRvbkNvbXBvbmVudCA9IFNlbWFudGljQnV0dG9uQ29tcG9uZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25nLXNlbWFudGljL3NyYy9idXR0b24vYnV0dG9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgU2VtYW50aWNJdGVtQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZW1hbnRpY0l0ZW1Db21wb25lbnQoKSB7XG4gICAgfVxuICAgIFNlbWFudGljSXRlbUNvbXBvbmVudC5wcm90b3R5cGUubmdBZnRlclZpZXdJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlubmVySXRlbUVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIFNlbWFudGljSXRlbUNvbXBvbmVudDtcbn0oKSk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNJdGVtQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpY29uXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNJdGVtQ29tcG9uZW50LnByb3RvdHlwZSwgXCJoZWFkZXJcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTZW1hbnRpY0l0ZW1Db21wb25lbnQucHJvdG90eXBlLCBcImltYWdlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuVmlld0NoaWxkKFwiaW5uZXJJdGVtRWxlbWVudFwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgY29yZV8xLkVsZW1lbnRSZWYpXG5dLCBTZW1hbnRpY0l0ZW1Db21wb25lbnQucHJvdG90eXBlLCBcImlubmVySXRlbUVsZW1lbnRcIiwgdm9pZCAwKTtcblNlbWFudGljSXRlbUNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNvcmVfMS5DaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICAgIHNlbGVjdG9yOiBcImFbc20taXRlbV0sIHNtLWl0ZW1cIixcbiAgICAgICAgdGVtcGxhdGU6IFwiPGkgKm5nSWY9XFxcImljb25cXFwiIGNsYXNzPVxcXCJ7e2ljb259fSBpY29uXFxcIj48L2k+XFxuPGltZyAqbmdJZj1cXFwiaW1hZ2VcXFwiIGNsYXNzPVxcXCJ1aSBhdmF0YXIgaW1hZ2VcXFwiIHNyYz1cXFwie3tpbWFnZX19XFxcIj5cXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIiAjaW5uZXJJdGVtRWxlbWVudD5cXG4gIDxkaXYgKm5nSWY9XFxcImhlYWRlclxcXCIgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgIHt7aGVhZGVyfX1cXG4gIDwvZGl2PlxcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxcbjwvZGl2PlwiXG4gICAgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgU2VtYW50aWNJdGVtQ29tcG9uZW50KTtcbmV4cG9ydHMuU2VtYW50aWNJdGVtQ29tcG9uZW50ID0gU2VtYW50aWNJdGVtQ29tcG9uZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25nLXNlbWFudGljL3NyYy9pdGVtL2l0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcbnZhciBTTVZpc2liaWxpdHlEaXJlY3RpdmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNNVmlzaWJpbGl0eURpcmVjdGl2ZShlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMub25Ub3BWaXNpYmxlID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vblRvcFBhc3NlZCA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub25VcGRhdGUgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgIH1cbiAgICBTTVZpc2liaWxpdHlEaXJlY3RpdmUucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LmVsZW1lbnQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgalF1ZXJ5KHRoaXMuZWxlbWVudC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICAgICAgICAgICAgLnZpc2liaWxpdHkoe1xuICAgICAgICAgICAgICAgIG9uVG9wUGFzc2VkOiBmdW5jdGlvbiAoY2FsY3VsYXRpb25zKSB7IHJldHVybiBfdGhpcy5vblRvcFBhc3NlZC5lbWl0KGNhbGN1bGF0aW9ucyk7IH0sXG4gICAgICAgICAgICAgICAgb25Ub3BWaXNpYmxlOiBmdW5jdGlvbiAoY2FsY3VsYXRpb25zKSB7IHJldHVybiBfdGhpcy5vblRvcFZpc2libGUuZW1pdChjYWxjdWxhdGlvbnMpOyB9LFxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiAoY2FsY3VsYXRpb25zKSB7IHJldHVybiBfdGhpcy5vblVwZGF0ZS5lbWl0KGNhbGN1bGF0aW9ucyk7IH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNNVmlzaWJpbGl0eURpcmVjdGl2ZTtcbn0oKSk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuXSwgU01WaXNpYmlsaXR5RGlyZWN0aXZlLnByb3RvdHlwZSwgXCJzbURpclZpc2liaWxpdHlcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5PdXRwdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgY29yZV8xLkV2ZW50RW1pdHRlcilcbl0sIFNNVmlzaWJpbGl0eURpcmVjdGl2ZS5wcm90b3R5cGUsIFwib25Ub3BWaXNpYmxlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuT3V0cHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FdmVudEVtaXR0ZXIpXG5dLCBTTVZpc2liaWxpdHlEaXJlY3RpdmUucHJvdG90eXBlLCBcIm9uVG9wUGFzc2VkXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuT3V0cHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FdmVudEVtaXR0ZXIpXG5dLCBTTVZpc2liaWxpdHlEaXJlY3RpdmUucHJvdG90eXBlLCBcIm9uVXBkYXRlXCIsIHZvaWQgMCk7XG5TTVZpc2liaWxpdHlEaXJlY3RpdmUgPSBfX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuRGlyZWN0aXZlKHtcbiAgICAgICAgc2VsZWN0b3I6IFwiW3NtRGlyVmlzaWJpbGl0eV1cIlxuICAgIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbY29yZV8xLlZpZXdDb250YWluZXJSZWZdKVxuXSwgU01WaXNpYmlsaXR5RGlyZWN0aXZlKTtcbmV4cG9ydHMuU01WaXNpYmlsaXR5RGlyZWN0aXZlID0gU01WaXNpYmlsaXR5RGlyZWN0aXZlO1xudmFyIFNNRGV2aWNlVmlzaWJpbGl0eURpcmVjdGl2ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU01EZXZpY2VWaXNpYmlsaXR5RGlyZWN0aXZlKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgU01EZXZpY2VWaXNpYmlsaXR5RGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgKF9hID0gdGhpcy5lbGVtZW50LmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QpLmFkZC5hcHBseShfYSwgdGhpcy5zbURldmljZVZpc2liaWxpdHkuc3BsaXQoXCIgXCIpKTtcbiAgICAgICAgdmFyIF9hO1xuICAgIH07XG4gICAgcmV0dXJuIFNNRGV2aWNlVmlzaWJpbGl0eURpcmVjdGl2ZTtcbn0oKSk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU01EZXZpY2VWaXNpYmlsaXR5RGlyZWN0aXZlLnByb3RvdHlwZSwgXCJzbURldmljZVZpc2liaWxpdHlcIiwgdm9pZCAwKTtcblNNRGV2aWNlVmlzaWJpbGl0eURpcmVjdGl2ZSA9IF9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5EaXJlY3RpdmUoe1xuICAgICAgICBzZWxlY3RvcjogXCJbc21EZXZpY2VWaXNpYmlsaXR5XVwiXG4gICAgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtjb3JlXzEuVmlld0NvbnRhaW5lclJlZl0pXG5dLCBTTURldmljZVZpc2liaWxpdHlEaXJlY3RpdmUpO1xuZXhwb3J0cy5TTURldmljZVZpc2liaWxpdHlEaXJlY3RpdmUgPSBTTURldmljZVZpc2liaWxpdHlEaXJlY3RpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmctc2VtYW50aWMvc3JjL3Zpc2liaWxpdHkvdmlzaWJpbGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xudmFyIFNlbWFudGljRHJvcGRvd25Db21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlbWFudGljRHJvcGRvd25Db21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICB9XG4gICAgU2VtYW50aWNEcm9wZG93bkNvbXBvbmVudC5wcm90b3R5cGUubmdBZnRlclZpZXdJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSwgYSwgYikge1xuICAgICAgICAgICAgICAgIGlmIChiICE9IG51bGwgJiYgYi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub25DaGFuZ2UuZW1pdChiWzBdLmlubmVyVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICBqUXVlcnkodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50KVxuICAgICAgICAgICAgLmRyb3Bkb3duKG9wdGlvbnMpO1xuICAgIH07XG4gICAgcmV0dXJuIFNlbWFudGljRHJvcGRvd25Db21wb25lbnQ7XG59KCkpO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFNlbWFudGljRHJvcGRvd25Db21wb25lbnQucHJvdG90eXBlLCBcImNsYXNzXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNEcm9wZG93bkNvbXBvbmVudC5wcm90b3R5cGUsIFwidGl0bGVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTZW1hbnRpY0Ryb3Bkb3duQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpY29uXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpXG5dLCBTZW1hbnRpY0Ryb3Bkb3duQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpdGVtc1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbl0sIFNlbWFudGljRHJvcGRvd25Db21wb25lbnQucHJvdG90eXBlLCBcIm9wdGlvbnNcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5PdXRwdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgY29yZV8xLkV2ZW50RW1pdHRlcilcbl0sIFNlbWFudGljRHJvcGRvd25Db21wb25lbnQucHJvdG90eXBlLCBcIm9uQ2hhbmdlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuVmlld0NoaWxkKFwiZHJvcGRvd25cIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FbGVtZW50UmVmKVxuXSwgU2VtYW50aWNEcm9wZG93bkNvbXBvbmVudC5wcm90b3R5cGUsIFwiZHJvcGRvd25cIiwgdm9pZCAwKTtcblNlbWFudGljRHJvcGRvd25Db21wb25lbnQgPSBfX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcbiAgICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBjb3JlXzEuQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgICBzZWxlY3RvcjogXCJzbS1kcm9wZG93blwiLFxuICAgICAgICB0ZW1wbGF0ZTogXCJcXG4gICAgPGRpdiBjbGFzcz1cXFwidWkge3tjbGFzc319IGRyb3Bkb3duIGl0ZW1cXFwiICNkcm9wZG93bj5cXG4gICAgICAgIDxpICpuZ0lmPVxcXCJpY29uXFxcIiBjbGFzcz1cXFwie3tpY29ufX0gaWNvblxcXCI+PC9pPlxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwidGl0bGVcXFwiIGNsYXNzPVxcXCJ0ZXh0XFxcIj57e3RpdGxlfX08L2Rpdj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJkcm9wZG93biBpY29uXFxcIj48L2k+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZW51XFxcIj5cXG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXCJcbiAgICB9KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBTZW1hbnRpY0Ryb3Bkb3duQ29tcG9uZW50KTtcbmV4cG9ydHMuU2VtYW50aWNEcm9wZG93bkNvbXBvbmVudCA9IFNlbWFudGljRHJvcGRvd25Db21wb25lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmctc2VtYW50aWMvc3JjL2Ryb3Bkb3duL2Ryb3Bkb3duLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcbnZhciBTZW1hbnRpY1NlbGVjdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VtYW50aWNTZWxlY3RDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbCA9IG5ldyBmb3Jtc18xLkZvcm1Db250cm9sKCk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm1vZGVsQ2hhbmdlID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMubXVsdGlwbGUgPSBmYWxzZTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbWFudGljU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoX3RoaXMuc2VsZWN0Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSkuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShfdGhpcy5zZWxlY3QubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICA7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbWFudGljU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJtb2RlbFwiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoX3RoaXMuc2VsZWN0Lm5hdGl2ZUVsZW1lbnQpLmRyb3Bkb3duKFwic2V0IHNlbGVjdGVkXCIsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTZW1hbnRpY1NlbGVjdENvbXBvbmVudC5wcm90b3R5cGUubmdBZnRlclZpZXdJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY2xhc3MgPT09IFwic3RyaW5nXCIgJiYgdGhpcy5jbGFzcy5zZWFyY2goXCJtdWx0aXBsZVwiKSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWxDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMub25DaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25IaWRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTsgfVxuICAgICAgICB9LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICBqUXVlcnkodGhpcy5zZWxlY3QubmF0aXZlRWxlbWVudClcbiAgICAgICAgICAgIC5kcm9wZG93bihvcHRpb25zKTtcbiAgICB9O1xuICAgIHJldHVybiBTZW1hbnRpY1NlbGVjdENvbXBvbmVudDtcbn0oKSk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgZm9ybXNfMS5Gb3JtQ29udHJvbClcbl0sIFNlbWFudGljU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLCBcImNsYXNzXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLCBcImxhYmVsXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoXCJkaXNhYmxlZFwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtCb29sZWFuXSlcbl0sIFNlbWFudGljU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBTZW1hbnRpY1NlbGVjdENvbXBvbmVudC5wcm90b3R5cGUsIFwib3B0aW9uc1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFNlbWFudGljU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJwbGFjZWhvbGRlclwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLk91dHB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBjb3JlXzEuRXZlbnRFbWl0dGVyKVxuXSwgU2VtYW50aWNTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLCBcIm1vZGVsQ2hhbmdlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuT3V0cHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FdmVudEVtaXR0ZXIpXG5dLCBTZW1hbnRpY1NlbGVjdENvbXBvbmVudC5wcm90b3R5cGUsIFwib25DaGFuZ2VcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5WaWV3Q2hpbGQoXCJzZWxlY3RcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FbGVtZW50UmVmKVxuXSwgU2VtYW50aWNTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLCBcInNlbGVjdFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KFwibW9kZWxcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3RdKVxuXSwgU2VtYW50aWNTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLCBcIm1vZGVsXCIsIG51bGwpO1xuU2VtYW50aWNTZWxlY3RDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcbiAgICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBjb3JlXzEuQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgICBzZWxlY3RvcjogXCJzbS1zZWxlY3RcIixcbiAgICAgICAgdGVtcGxhdGU6IFwiPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiIFtuZ0NsYXNzXT1cXFwie2Vycm9yOiAoIWNvbnRyb2w/LnZhbGlkICYmIGNvbnRyb2w/LnRvdWNoZWQpIH1cXFwiPlxcbiAgPGxhYmVsICpuZ0lmPVxcXCJsYWJlbFxcXCI+e3tsYWJlbH19PC9sYWJlbD5cXG48c2VsZWN0IFtmb3JtQ29udHJvbF09XFxcImNvbnRyb2xcXFwiIGNsYXNzPVxcXCJ1aSB7e2NsYXNzfX0gZHJvcGRvd25cXFwiICAjc2VsZWN0PlxcbiAgICA8b3B0aW9uIHZhbHVlPVxcXCJcXFwiPnt7cGxhY2Vob2xkZXJ9fTwvb3B0aW9uPlxcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxuPC9zZWxlY3Q+XFxuPC9kaXY+XCJcbiAgICB9KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBTZW1hbnRpY1NlbGVjdENvbXBvbmVudCk7XG5leHBvcnRzLlNlbWFudGljU2VsZWN0Q29tcG9uZW50ID0gU2VtYW50aWNTZWxlY3RDb21wb25lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmctc2VtYW50aWMvc3JjL3NlbGVjdC9zZWxlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2RlYm91bmNlVGltZVwiKTtcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZFwiKTtcbnZhciBTZW1hbnRpY1NlYXJjaENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VtYW50aWNTZWFyY2hDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuZGVib3VuY2UgPSAwO1xuICAgICAgICB0aGlzLm9uU2VhcmNoID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5zZWFyY2hDb250cm9sID0gbmV3IGZvcm1zXzEuRm9ybUNvbnRyb2woKTtcbiAgICB9XG4gICAgU2VtYW50aWNTZWFyY2hDb21wb25lbnQucHJvdG90eXBlLm5nQWZ0ZXJWaWV3SW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zZWFyY2hDb250cm9sXG4gICAgICAgICAgICAudmFsdWVDaGFuZ2VzXG4gICAgICAgICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgICAgICAgLmRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMub25TZWFyY2guZW1pdChkYXRhKTsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2VtYW50aWNTZWFyY2hDb21wb25lbnQ7XG59KCkpO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFNlbWFudGljU2VhcmNoQ29tcG9uZW50LnByb3RvdHlwZSwgXCJjbGFzc1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG5dLCBTZW1hbnRpY1NlYXJjaENvbXBvbmVudC5wcm90b3R5cGUsIFwiaWNvblwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG5dLCBTZW1hbnRpY1NlYXJjaENvbXBvbmVudC5wcm90b3R5cGUsIFwibG9hZGluZ1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcbl0sIFNlbWFudGljU2VhcmNoQ29tcG9uZW50LnByb3RvdHlwZSwgXCJkZWJvdW5jZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFNlbWFudGljU2VhcmNoQ29tcG9uZW50LnByb3RvdHlwZSwgXCJwbGFjZWhvbGRlclwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLk91dHB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBjb3JlXzEuRXZlbnRFbWl0dGVyKVxuXSwgU2VtYW50aWNTZWFyY2hDb21wb25lbnQucHJvdG90eXBlLCBcIm9uU2VhcmNoXCIsIHZvaWQgMCk7XG5TZW1hbnRpY1NlYXJjaENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNvcmVfMS5DaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICAgIHNlbGVjdG9yOiBcInNtLXNlYXJjaFwiLFxuICAgICAgICB0ZW1wbGF0ZTogXCI8ZGl2IGNsYXNzPVxcXCJ1aSBzZWFyY2hcXFwiIFtuZ0NsYXNzXT1cXFwieydsb2FkaW5nJzogbG9hZGluZ31cXFwiPlxcbiA8ZGl2IGNsYXNzPVxcXCJ1aSBpY29uIGlucHV0IHt7Y2xhc3N9fSBcXFwiPlxcbiAgPGlucHV0IGNsYXNzPVxcXCJwcm9tcHRcXFwiIFtmb3JtQ29udHJvbF09XFxcInNlYXJjaENvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIFthdHRyLnBsYWNlaG9sZGVyXT1cXFwicGxhY2Vob2xkZXJcXFwiPlxcbiAgPGkgKm5nSWY9XFxcImljb25cXFwiIGNsYXNzPVxcXCJzZWFyY2ggaWNvblxcXCI+PC9pPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJyZXN1bHRzXFxcIj48L2Rpdj5cXG48L2Rpdj5cIlxuICAgIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIFNlbWFudGljU2VhcmNoQ29tcG9uZW50KTtcbmV4cG9ydHMuU2VtYW50aWNTZWFyY2hDb21wb25lbnQgPSBTZW1hbnRpY1NlYXJjaENvbXBvbmVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uZy1zZW1hbnRpYy9zcmMvc2VhcmNoL3NlYXJjaC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xudmFyIFNlbWFudGljTG9hZGVyQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZW1hbnRpY0xvYWRlckNvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gU2VtYW50aWNMb2FkZXJDb21wb25lbnQ7XG59KCkpO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KFwiY2xhc3NcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFNlbWFudGljTG9hZGVyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJjbGFzc1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KFwidGV4dFwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNMb2FkZXJDb21wb25lbnQucHJvdG90eXBlLCBcInRleHRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dChcImNvbXBsZXRlXCIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuXSwgU2VtYW50aWNMb2FkZXJDb21wb25lbnQucHJvdG90eXBlLCBcImNvbXBsZXRlXCIsIHZvaWQgMCk7XG5TZW1hbnRpY0xvYWRlckNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNvcmVfMS5DaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICAgIHNlbGVjdG9yOiBcInNtLWxvYWRlclwiLFxuICAgICAgICB0ZW1wbGF0ZTogXCI8ZGl2ICpuZ0lmPVxcXCIhY29tcGxldGVcXFwiIGNsYXNzPVxcXCJ1aSBhY3RpdmUgZGltbWVyIHt7Y2xhc3N9fVxcXCI+XFxuICAgIDxkaXYgW25nQ2xhc3NdPVxcXCJ7dGV4dDogdGV4dH1cXFwiIGNsYXNzPVxcXCJ1aSBsb2FkZXJcXFwiPnt7dGV4dH19PC9kaXY+XFxuICA8L2Rpdj5cIlxuICAgIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIFNlbWFudGljTG9hZGVyQ29tcG9uZW50KTtcbmV4cG9ydHMuU2VtYW50aWNMb2FkZXJDb21wb25lbnQgPSBTZW1hbnRpY0xvYWRlckNvbXBvbmVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uZy1zZW1hbnRpYy9zcmMvbG9hZGVyL2xvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xudmFyIFNlbWFudGljQ2FyZENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VtYW50aWNDYXJkQ29tcG9uZW50KCkge1xuICAgIH1cbiAgICByZXR1cm4gU2VtYW50aWNDYXJkQ29tcG9uZW50O1xufSgpKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTZW1hbnRpY0NhcmRDb21wb25lbnQucHJvdG90eXBlLCBcImNsYXNzXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNDYXJkQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpbWFnZVwiLCB2b2lkIDApO1xuU2VtYW50aWNDYXJkQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XG4gICAgICAgIGNoYW5nZURldGVjdGlvbjogY29yZV8xLkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgICAgc2VsZWN0b3I6IFwic20tY2FyZFwiLFxuICAgICAgICB0ZW1wbGF0ZTogXCI8ZGl2IGNsYXNzPVxcXCJ1aSB7e2NsYXNzfX1cXFwiPlxcbjxkaXYgY2xhc3M9XFxcImltYWdlXFxcIiAqbmdJZj1cXFwiaW1hZ2VcXFwiPlxcbiAgICA8aW1nIHNyYz1cXFwie3tpbWFnZX19XFxcIj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cXFwiY2FyZC10aXRsZVxcXCI+PC9uZy1jb250ZW50PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtZXRhXFxcIj5cXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XFxcImNhcmQtc3VidGl0bGVcXFwiPjwvbmctY29udGVudD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XFxcImNhcmQtY29udGVudFxcXCI+PC9uZy1jb250ZW50PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiZXh0cmEgY29udGVudFxcXCI+XFxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cXFwiY2FyZC1leHRyYVxcXCI+PC9uZy1jb250ZW50PlxcbiAgPC9kaXY+XFxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxuPC9kaXY+XCJcbiAgICB9KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBTZW1hbnRpY0NhcmRDb21wb25lbnQpO1xuZXhwb3J0cy5TZW1hbnRpY0NhcmRDb21wb25lbnQgPSBTZW1hbnRpY0NhcmRDb21wb25lbnQ7XG52YXIgU2VtYW50aWNDYXJkc0NvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VtYW50aWNDYXJkc0NvbXBvbmVudCgpIHtcbiAgICB9XG4gICAgcmV0dXJuIFNlbWFudGljQ2FyZHNDb21wb25lbnQ7XG59KCkpO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFNlbWFudGljQ2FyZHNDb21wb25lbnQucHJvdG90eXBlLCBcImNsYXNzXCIsIHZvaWQgMCk7XG5TZW1hbnRpY0NhcmRzQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XG4gICAgICAgIGNoYW5nZURldGVjdGlvbjogY29yZV8xLkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgICAgc2VsZWN0b3I6IFwic20tY2FyZHNcIixcbiAgICAgICAgdGVtcGxhdGU6IFwiPGRpdiBjbGFzcz1cXFwidWkgY2FyZHMge3tjbGFzc319XFxcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XCJcbiAgICB9KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBTZW1hbnRpY0NhcmRzQ29tcG9uZW50KTtcbmV4cG9ydHMuU2VtYW50aWNDYXJkc0NvbXBvbmVudCA9IFNlbWFudGljQ2FyZHNDb21wb25lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmctc2VtYW50aWMvc3JjL2NhcmQvY2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xudmFyIGZvcm1zXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG52YXIgU2VtYW50aWNJbnB1dENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VtYW50aWNJbnB1dENvbXBvbmVudCh2aWV3UmVmKSB7XG4gICAgICAgIHRoaXMudmlld1JlZiA9IHZpZXdSZWY7XG4gICAgICAgIHRoaXMudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICB0aGlzLmNvbnRyb2wgPSBuZXcgZm9ybXNfMS5Gb3JtQ29udHJvbCgpO1xuICAgICAgICB0aGlzLm1vZGVsQ2hhbmdlID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5pc0luc2lkZUZvcm0gPSBmYWxzZTtcbiAgICB9XG4gICAgU2VtYW50aWNJbnB1dENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmluRm9ybSh0aGlzLnZpZXdSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcImZvcm1cIikpIHtcbiAgICAgICAgICAgIHRoaXMuaXNJbnNpZGVGb3JtID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2VtYW50aWNJbnB1dENvbXBvbmVudC5wcm90b3R5cGUuaW5Gb3JtID0gZnVuY3Rpb24gKGVsLCBjbGFzc25hbWUpIHtcbiAgICAgICAgaWYgKGVsLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGlmIChlbC5wYXJlbnROb2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IGNsYXNzbmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhZWwucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluRm9ybShlbC5wYXJlbnROb2RlLCBjbGFzc25hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU2VtYW50aWNJbnB1dENvbXBvbmVudDtcbn0oKSk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNJbnB1dENvbXBvbmVudC5wcm90b3R5cGUsIFwibGFiZWxcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTZW1hbnRpY0lucHV0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJjbGFzc1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFNlbWFudGljSW5wdXRDb21wb25lbnQucHJvdG90eXBlLCBcImljb25cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTZW1hbnRpY0lucHV0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJ0eXBlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNJbnB1dENvbXBvbmVudC5wcm90b3R5cGUsIFwicGxhY2Vob2xkZXJcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBTZW1hbnRpY0lucHV0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJtb2RlbFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGZvcm1zXzEuRm9ybUNvbnRyb2wpXG5dLCBTZW1hbnRpY0lucHV0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuT3V0cHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FdmVudEVtaXR0ZXIpXG5dLCBTZW1hbnRpY0lucHV0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJtb2RlbENoYW5nZVwiLCB2b2lkIDApO1xuU2VtYW50aWNJbnB1dENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICBzZWxlY3RvcjogXCJzbS1pbnB1dFwiLFxuICAgICAgICB0ZW1wbGF0ZTogXCI8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCIgW25nQ2xhc3NdPVxcXCJ7ZXJyb3I6ICghY29udHJvbC52YWxpZCAmJiBjb250cm9sLmRpcnR5ICYmIGlzSW5zaWRlRm9ybSkgfVxcXCI+XFxuICA8bGFiZWwgKm5nSWY9XFxcImxhYmVsICYmIGlzSW5zaWRlRm9ybVxcXCI+e3tsYWJlbH19PC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFxcInVpIGlucHV0IHt7Y2xhc3N9fVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2ljb24nOiBpY29uLCAnZXJyb3InOiAoIWNvbnRyb2wudmFsaWQgJiYgY29udHJvbC5kaXJ0eSAmJiFpc0luc2lkZUZvcm0pfVxcXCI+XFxuICA8bGFiZWwgKm5nSWY9XFxcImxhYmVsICYmICFpc0luc2lkZUZvcm1cXFwiIGNsYXNzPVxcXCJ1aSBsYWJlbFxcXCI+e3tsYWJlbH19PC9sYWJlbD5cXG4gIDxpbnB1dCBbdHlwZV09XFxcInR5cGVcXFwiIFtmb3JtQ29udHJvbF09XFxcImNvbnRyb2xcXFwiIChrZXl1cCk9XFxcIm1vZGVsQ2hhbmdlLmVtaXQoaW5wdXQudmFsdWUpXFxcIiAjaW5wdXQgcGxhY2Vob2xkZXI9XFxcInt7cGxhY2Vob2xkZXJ9fVxcXCI+XFxuICA8aSAqbmdJZj1cXFwiaWNvblxcXCIgY2xhc3M9XFxcInt7aWNvbn19IGljb25cXFwiPjwvaT5cXG48L2Rpdj5cXG48L2Rpdj5cIlxuICAgIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbY29yZV8xLlZpZXdDb250YWluZXJSZWZdKVxuXSwgU2VtYW50aWNJbnB1dENvbXBvbmVudCk7XG5leHBvcnRzLlNlbWFudGljSW5wdXRDb21wb25lbnQgPSBTZW1hbnRpY0lucHV0Q29tcG9uZW50O1xudmFyIFNlbWFudGljQ2hlY2tib3hDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlbWFudGljQ2hlY2tib3hDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbCA9IG5ldyBmb3Jtc18xLkZvcm1Db250cm9sKCk7XG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICB0aGlzLmNsYXNzVHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbWFudGljQ2hlY2tib3hDb21wb25lbnQucHJvdG90eXBlLCBcInR5cGVcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhICE9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzVHlwZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09IFwicmFkaW9cIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0VHlwZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU2VtYW50aWNDaGVja2JveENvbXBvbmVudDtcbn0oKSk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgZm9ybXNfMS5Gb3JtQ29udHJvbClcbl0sIFNlbWFudGljQ2hlY2tib3hDb21wb25lbnQucHJvdG90eXBlLCBcImNvbnRyb2xcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTZW1hbnRpY0NoZWNrYm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJsYWJlbFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG5dLCBTZW1hbnRpY0NoZWNrYm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbl0sIFNlbWFudGljQ2hlY2tib3hDb21wb25lbnQucHJvdG90eXBlLCBcInZhbHVlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNDaGVja2JveENvbXBvbmVudC5wcm90b3R5cGUsIFwibmFtZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KFwidHlwZVwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW1N0cmluZ10pXG5dLCBTZW1hbnRpY0NoZWNrYm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJ0eXBlXCIsIG51bGwpO1xuU2VtYW50aWNDaGVja2JveENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNvcmVfMS5DaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICAgIHNlbGVjdG9yOiBcInNtLWNoZWNrYm94XCIsXG4gICAgICAgIHRlbXBsYXRlOiBcIjxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIiBbbmdDbGFzc109XFxcIntlcnJvcjogKCFjb250cm9sLnZhbHVlICYmIGNvbnRyb2w/LnZhbGlkYXRvcikgfVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInVpIHt7Y2xhc3NUeXBlfX0gY2hlY2tib3hcXFwiPlxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgXFxuICAgICAgW2F0dHIudmFsdWVdPVxcXCJ2YWx1ZVxcXCJcXG4gICAgICBbYXR0ci50eXBlXT1cXFwiaW5wdXRUeXBlXFxcIiB0YWJpbmRleD1cXFwiMFxcXCIgW2F0dHIubmFtZV09XFxcIm5hbWVcXFwiIFtmb3JtQ29udHJvbF09XFxcImNvbnRyb2xcXFwiIFthdHRyLmRpc2FibGVkXT1cXFwiZGlzYWJsZWRcXFwiPlxcbiAgICAgIDxsYWJlbCAqbmdJZj1cXFwibGFiZWxcXFwiPnt7bGFiZWx9fTwvbGFiZWw+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XCJcbiAgICB9KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBTZW1hbnRpY0NoZWNrYm94Q29tcG9uZW50KTtcbmV4cG9ydHMuU2VtYW50aWNDaGVja2JveENvbXBvbmVudCA9IFNlbWFudGljQ2hlY2tib3hDb21wb25lbnQ7XG52YXIgU2VtYW50aWNUZXh0YXJlYUNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VtYW50aWNUZXh0YXJlYUNvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5jb250cm9sID0gbmV3IGZvcm1zXzEuRm9ybUNvbnRyb2woKTtcbiAgICB9XG4gICAgcmV0dXJuIFNlbWFudGljVGV4dGFyZWFDb21wb25lbnQ7XG59KCkpO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGZvcm1zXzEuRm9ybUNvbnRyb2wpXG5dLCBTZW1hbnRpY1RleHRhcmVhQ29tcG9uZW50LnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNUZXh0YXJlYUNvbXBvbmVudC5wcm90b3R5cGUsIFwibGFiZWxcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTZW1hbnRpY1RleHRhcmVhQ29tcG9uZW50LnByb3RvdHlwZSwgXCJyb3dzXCIsIHZvaWQgMCk7XG5TZW1hbnRpY1RleHRhcmVhQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XG4gICAgICAgIGNoYW5nZURldGVjdGlvbjogY29yZV8xLkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgICAgc2VsZWN0b3I6IFwic20tdGV4dGFyZWFcIixcbiAgICAgICAgdGVtcGxhdGU6IFwiPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiIFtuZ0NsYXNzXT1cXFwie2Vycm9yOiAoIWNvbnRyb2wudmFsaWQgJiYgY29udHJvbC5kaXJ0eSkgfVxcXCI+XFxuICAgIDxsYWJlbCAqbmdJZj1cXFwibGFiZWxcXFwiPnt7bGFiZWx9fTwvbGFiZWw+XFxuICAgIDx0ZXh0YXJlYSByb3dzPVxcXCJ7e3Jvd3N9fVxcXCIgW2Zvcm1Db250cm9sXT1cXFwiY29udHJvbFxcXCI+PC90ZXh0YXJlYT5cXG4gIDwvZGl2PlwiXG4gICAgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgU2VtYW50aWNUZXh0YXJlYUNvbXBvbmVudCk7XG5leHBvcnRzLlNlbWFudGljVGV4dGFyZWFDb21wb25lbnQgPSBTZW1hbnRpY1RleHRhcmVhQ29tcG9uZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25nLXNlbWFudGljL3NyYy9pbnB1dC9pbnB1dC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xualF1ZXJ5LmZuLmZpeFNpZGViYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFsbE1vZHVsZXMgPSBqUXVlcnkodGhpcyk7XG4gICAgYWxsTW9kdWxlc1xuICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHsgcHVzaGVyOiBcIi5wdXNoZXJcIiB9LCBtb2R1bGUgPSBqUXVlcnkodGhpcyksIGNvbnRleHQgPSBqUXVlcnkoXCJib2R5XCIpO1xuICAgICAgICBpZiAobW9kdWxlLm5leHRBbGwoc2VsZWN0b3IucHVzaGVyKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIG1vZHVsZS5kZXRhY2goKS5wcmVwZW5kVG8oY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbn07XG52YXIgU2VtYW50aWNTaWRlYmFyQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZW1hbnRpY1NpZGViYXJDb21wb25lbnQocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIH1cbiAgICBTZW1hbnRpY1NpZGViYXJDb21wb25lbnQucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBqUXVlcnkodGhpcy5zaWRlYmFyLm5hdGl2ZUVsZW1lbnQpXG4gICAgICAgICAgICAuc2lkZWJhcihvcHRpb25zIHx8IHt9KVxuICAgICAgICAgICAgLnNpZGViYXIoXCJ0b2dnbGVcIik7XG4gICAgfTtcbiAgICBTZW1hbnRpY1NpZGViYXJDb21wb25lbnQucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpRdWVyeSh0aGlzLnNpZGViYXIubmF0aXZlRWxlbWVudClcbiAgICAgICAgICAgIC5zaWRlYmFyKFwiaGlkZVwiKTtcbiAgICB9O1xuICAgIFNlbWFudGljU2lkZWJhckNvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpRdWVyeSh0aGlzLnNpZGViYXIubmF0aXZlRWxlbWVudClcbiAgICAgICAgICAgIC5maXhTaWRlYmFyKCk7XG4gICAgfTtcbiAgICBTZW1hbnRpY1NpZGViYXJDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmRldGFjaFZpZXcoW3RoaXMuc2lkZWJhci5uYXRpdmVFbGVtZW50XSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2VtYW50aWNTaWRlYmFyQ29tcG9uZW50O1xufSgpKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTZW1hbnRpY1NpZGViYXJDb21wb25lbnQucHJvdG90eXBlLCBcImNsYXNzXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuVmlld0NoaWxkKFwic2lkZWJhclwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgY29yZV8xLkVsZW1lbnRSZWYpXG5dLCBTZW1hbnRpY1NpZGViYXJDb21wb25lbnQucHJvdG90eXBlLCBcInNpZGViYXJcIiwgdm9pZCAwKTtcblNlbWFudGljU2lkZWJhckNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNvcmVfMS5DaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICAgIHNlbGVjdG9yOiBcInNtLXNpZGViYXJcIixcbiAgICAgICAgdGVtcGxhdGU6IFwiPGRpdiBjbGFzcz1cXFwidWkgc2lkZWJhciB7e2NsYXNzfX1cXFwiICNzaWRlYmFyPlxcbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cXG48L2Rpdj5cIlxuICAgIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbY29yZV8xLlJlbmRlcmVyXSlcbl0sIFNlbWFudGljU2lkZWJhckNvbXBvbmVudCk7XG5leHBvcnRzLlNlbWFudGljU2lkZWJhckNvbXBvbmVudCA9IFNlbWFudGljU2lkZWJhckNvbXBvbmVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uZy1zZW1hbnRpYy9zcmMvc2lkZWJhci9zaWRlYmFyLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgU2VtYW50aWNUYWJDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlbWFudGljVGFiQ29tcG9uZW50KCkge1xuICAgIH1cbiAgICBTZW1hbnRpY1RhYkNvbXBvbmVudC5wcm90b3R5cGUubmdBZnRlclZpZXdJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRhYkVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidWlcIiwgXCJ0YWJcIiwgXCJib3R0b21cIiwgXCJhdHRhY2hlZFwiLCBcInNlZ21lbnRcIik7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy50YWJFbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNlbWFudGljVGFiQ29tcG9uZW50O1xufSgpKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXG5dLCBTZW1hbnRpY1RhYkNvbXBvbmVudC5wcm90b3R5cGUsIFwidGFiXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNUYWJDb21wb25lbnQucHJvdG90eXBlLCBcInRpdGxlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbl0sIFNlbWFudGljVGFiQ29tcG9uZW50LnByb3RvdHlwZSwgXCJhY3RpdmVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5WaWV3Q2hpbGQoXCJ0YWJcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FbGVtZW50UmVmKVxuXSwgU2VtYW50aWNUYWJDb21wb25lbnQucHJvdG90eXBlLCBcInRhYkVsXCIsIHZvaWQgMCk7XG5TZW1hbnRpY1RhYkNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICBzZWxlY3RvcjogXCJzbS10YWJcIixcbiAgICAgICAgdGVtcGxhdGU6IFwiXFxuPGRpdiAjdGFiPlxcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxuPC9kaXY+ICBcIlxuICAgIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIFNlbWFudGljVGFiQ29tcG9uZW50KTtcbmV4cG9ydHMuU2VtYW50aWNUYWJDb21wb25lbnQgPSBTZW1hbnRpY1RhYkNvbXBvbmVudDtcbnZhciBTZW1hbnRpY1RhYnNDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlbWFudGljVGFic0NvbXBvbmVudChlbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBTZW1hbnRpY1RhYnNDb21wb25lbnQucHJvdG90eXBlLm5nQWZ0ZXJWaWV3SW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5pbml0SXRlbXNJbmRpY2VzKCk7XG4gICAgICAgIHRoaXMuaW5pdFRhYnMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVUYWJDb250ZW50SW5kaWNlcygpO1xuICAgICAgICB0aGlzLnRhYnNcbiAgICAgICAgICAgIC5jaGFuZ2VzXG4gICAgICAgICAgICAuZGVib3VuY2VUaW1lKDEwMClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaW5pdEl0ZW1zSW5kaWNlcygpO1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlVGFiQ29udGVudEluZGljZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTZW1hbnRpY1RhYnNDb21wb25lbnQucHJvdG90eXBlLmluaXRJdGVtc0luZGljZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEFycmF5XG4gICAgICAgICAgICAuZnJvbSh0aGlzLm1lbnUubmF0aXZlRWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaXRlbVwiKSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGFiXCIsIFwidGFiLVwiICsgaW5kZXgpO1xuICAgICAgICAgICAgalF1ZXJ5KGVsZW1lbnQpLmRhdGEoXCJ0YWJcIiwgXCJ0YWItXCIgKyBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2VtYW50aWNUYWJzQ29tcG9uZW50LnByb3RvdHlwZS51cGRhdGVUYWJDb250ZW50SW5kaWNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50YWJzXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjbXAsIGluZGV4KSB7XG4gICAgICAgICAgICBjbXAudGFiRWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGFiXCIsIFwidGFiLVwiICsgaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmluaXRUYWJzKCk7XG4gICAgfTtcbiAgICBTZW1hbnRpY1RhYnNDb21wb25lbnQucHJvdG90eXBlLmluaXRUYWJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGNoaWxkcmVuT25seTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgICAgIH0sIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHZhciB0YWIgPSBqUXVlcnkodGhpcy5tZW51Lm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW1cIikpXG4gICAgICAgICAgICAudGFiKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGlmICghdGhpcy5tZW51Lm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW0gYWN0aXZlXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGFiLnRhYihcImNoYW5nZSB0YWJcIiwgXCJ0YWItMFwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNlbWFudGljVGFic0NvbXBvbmVudDtcbn0oKSk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuQ29udGVudENoaWxkcmVuKFNlbWFudGljVGFiQ29tcG9uZW50KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgY29yZV8xLlF1ZXJ5TGlzdClcbl0sIFNlbWFudGljVGFic0NvbXBvbmVudC5wcm90b3R5cGUsIFwidGFic1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLlZpZXdDaGlsZChcIm1lbnVcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FbGVtZW50UmVmKVxuXSwgU2VtYW50aWNUYWJzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJtZW51XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoXCJvcHRpb25zXCIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBTZW1hbnRpY1RhYnNDb21wb25lbnQucHJvdG90eXBlLCBcIm9wdGlvbnNcIiwgdm9pZCAwKTtcblNlbWFudGljVGFic0NvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICBzZWxlY3RvcjogXCJzbS10YWJzXCIsXG4gICAgICAgIHRlbXBsYXRlOiBcIjxkaXYgY2xhc3M9XFxcInVpIHRvcCBhdHRhY2hlZCB0YWJ1bGFyIG1lbnVcXFwiICNtZW51PlxcbiAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIFtuZ0NsYXNzXT1cXFwieydhY3RpdmUnOiB0YWIuYWN0aXZlfVxcXCIgKm5nRm9yPVxcXCJsZXQgdGFiIG9mIHRhYnNcXFwiPnt7dGFiLnRpdGxlfX08L2E+XFxuPC9kaXY+XFxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxcblwiXG4gICAgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtjb3JlXzEuRWxlbWVudFJlZl0pXG5dLCBTZW1hbnRpY1RhYnNDb21wb25lbnQpO1xuZXhwb3J0cy5TZW1hbnRpY1RhYnNDb21wb25lbnQgPSBTZW1hbnRpY1RhYnNDb21wb25lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmctc2VtYW50aWMvc3JjL3RhYi90YWIuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcbnZhciBTZW1hbnRpY0ZsYWdDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlbWFudGljRmxhZ0NvbXBvbmVudCgpIHtcbiAgICB9XG4gICAgcmV0dXJuIFNlbWFudGljRmxhZ0NvbXBvbmVudDtcbn0oKSk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoXCJmbGFnXCIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTZW1hbnRpY0ZsYWdDb21wb25lbnQucHJvdG90eXBlLCBcImZsYWdcIiwgdm9pZCAwKTtcblNlbWFudGljRmxhZ0NvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNvcmVfMS5DaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICAgIHNlbGVjdG9yOiBcInNtLWZsYWdcIixcbiAgICAgICAgdGVtcGxhdGU6IFwiPGkgY2xhc3M9XFxcInt7ZmxhZ319IGZsYWdcXFwiPjwvaT5cIlxuICAgIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIFNlbWFudGljRmxhZ0NvbXBvbmVudCk7XG5leHBvcnRzLlNlbWFudGljRmxhZ0NvbXBvbmVudCA9IFNlbWFudGljRmxhZ0NvbXBvbmVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uZy1zZW1hbnRpYy9zcmMvZmxhZy9mbGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgU2VtYW50aWNDb250ZXh0TWVudUNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VtYW50aWNDb250ZXh0TWVudUNvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZW1hbnRpY0NvbnRleHRNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJwb3NpdGlvblwiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFNlbWFudGljQ29udGV4dE1lbnVDb21wb25lbnQucHJvdG90eXBlLmNsaWNrZWRPdXRzaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICB9O1xuICAgIHJldHVybiBTZW1hbnRpY0NvbnRleHRNZW51Q29tcG9uZW50O1xufSgpKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbl0sIFNlbWFudGljQ29udGV4dE1lbnVDb21wb25lbnQucHJvdG90eXBlLCBcIml0ZW1zXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoXCJwb3NpdGlvblwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdF0pXG5dLCBTZW1hbnRpY0NvbnRleHRNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJwb3NpdGlvblwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5Ib3N0TGlzdGVuZXIoXCJkb2N1bWVudDpjbGlja1wiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgRnVuY3Rpb24pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpyZXR1cm50eXBlXCIsIHZvaWQgMClcbl0sIFNlbWFudGljQ29udGV4dE1lbnVDb21wb25lbnQucHJvdG90eXBlLCBcImNsaWNrZWRPdXRzaWRlXCIsIG51bGwpO1xuU2VtYW50aWNDb250ZXh0TWVudUNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNvcmVfMS5DaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICAgIHNlbGVjdG9yOiBcInNtLWNvbnRleHRtZW51XCIsXG4gICAgICAgIHN0eWxlczogW1wiLnNtLWNvbnRleHRtZW51IHsgcG9zaXRpb246IGZpeGVkOyB6LWluZGV4OiAxMDAwOyB9XCJdLFxuICAgICAgICB0ZW1wbGF0ZTogXCI8ZGl2IFxcbltzdHlsZS5sZWZ0LnB4XT1cXFwiX3Bvc2l0aW9uPy54XFxcIiBbc3R5bGUudG9wLnB4XT1cXFwiX3Bvc2l0aW9uPy55XFxcIlxcbltuZ0NsYXNzXT1cXFwieydhY3RpdmUgdmlzaWJsZSc6IHNob3d9XFxcIiBjbGFzcz1cXFwidWkgZHJvcGRvd24gc20tY29udGV4dG1lbnVcXFwiPlxcbiA8ZGl2IFxcbiBbbmdDbGFzc109XFxcInsndmlzaWJsZSBhbmltYXRpbmcgc2xpZGUgZG93biBpbic6IHNob3csICdoaWRkZW4nOiAhc2hvd31cXFwiICBjbGFzcz1cXFwidWkgbWVudSB0cmFuc2l0aW9uXFxcIj5cXG4gPGEgKGNsaWNrKT1cXFwibWVudS5hY3Rpb24oKVxcXCIgKm5nRm9yPVxcXCJsZXQgbWVudSBvZiBpdGVtc1xcXCIgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiA8aSBjbGFzcz1cXFwie3ttZW51Lmljb259fSBpY29uXFxcIj48L2k+XFxuIHt7bWVudS50aXRsZX19XFxuIDwvYT5cXG4gPC9kaXY+XFxuIDwvZGl2PlxcblwiXG4gICAgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgU2VtYW50aWNDb250ZXh0TWVudUNvbXBvbmVudCk7XG5leHBvcnRzLlNlbWFudGljQ29udGV4dE1lbnVDb21wb25lbnQgPSBTZW1hbnRpY0NvbnRleHRNZW51Q29tcG9uZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25nLXNlbWFudGljL3NyYy9jb250ZXh0bWVudS9jb250ZXh0bWVudS5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xudmFyIFNlbWFudGljUHJvZ3Jlc3NDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlbWFudGljUHJvZ3Jlc3NDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzID0gMDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbWFudGljUHJvZ3Jlc3NDb21wb25lbnQucHJvdG90eXBlLCBcInByb2dyZXNzXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyZXNzID0gKHZhbHVlID49IDEwMCkgPyAxMDAgOiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFNlbWFudGljUHJvZ3Jlc3NDb21wb25lbnQ7XG59KCkpO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFNlbWFudGljUHJvZ3Jlc3NDb21wb25lbnQucHJvdG90eXBlLCBcImxhYmVsXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNQcm9ncmVzc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiY2xhc3NcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNlbWFudGljUHJvZ3Jlc3NDb21wb25lbnQucHJvdG90eXBlLCBcInByb2dyZXNzXCIsIG51bGwpO1xuU2VtYW50aWNQcm9ncmVzc0NvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNvcmVfMS5DaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICAgIHNlbGVjdG9yOiBcInNtLXByb2dyZXNzXCIsXG4gICAgICAgIHRlbXBsYXRlOiBcIjxkaXYgW25nQ2xhc3NdPVxcXCJ7J3N1Y2Nlc3MnOiBfcHJvZ3Jlc3MgPT09IDEwMH1cXFwiIGNsYXNzPVxcXCJ1aSB7e2NsYXNzfX0gcHJvZ3Jlc3NcXFwiIFthdHRyLmRhdGEtcGVyY2VudF09XFxcIl9wcm9ncmVzc1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJiYXJcXFwiIFtuZ1N0eWxlXT1cXFwieyd3aWR0aCc6IF9wcm9ncmVzcyArICclJ31cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzc1xcXCI+e3tfcHJvZ3Jlc3N9fSU8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwibGFiZWxcXFwiICpuZ0lmPVxcXCJsYWJlbFxcXCI+e3tsYWJlbH19PC9kaXY+XFxuPC9kaXY+XCJcbiAgICB9KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBTZW1hbnRpY1Byb2dyZXNzQ29tcG9uZW50KTtcbmV4cG9ydHMuU2VtYW50aWNQcm9ncmVzc0NvbXBvbmVudCA9IFNlbWFudGljUHJvZ3Jlc3NDb21wb25lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmctc2VtYW50aWMvc3JjL3Byb2dyZXNzL3Byb2dyZXNzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgU2VtYW50aWNEaW1tZXJDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlbWFudGljRGltbWVyQ29tcG9uZW50KCkge1xuICAgIH1cbiAgICBTZW1hbnRpY0RpbW1lckNvbXBvbmVudC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGpRdWVyeSh0aGlzLmRpbW1lci5uYXRpdmVFbGVtZW50KVxuICAgICAgICAgICAgLmRpbW1lcihvcHRpb25zIHx8IHt9KVxuICAgICAgICAgICAgLmRpbW1lcihcInRvZ2dsZVwiKTtcbiAgICB9O1xuICAgIHJldHVybiBTZW1hbnRpY0RpbW1lckNvbXBvbmVudDtcbn0oKSk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuVmlld0NoaWxkKFwiZGltbWVyXCIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBjb3JlXzEuRWxlbWVudFJlZilcbl0sIFNlbWFudGljRGltbWVyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJkaW1tZXJcIiwgdm9pZCAwKTtcblNlbWFudGljRGltbWVyQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XG4gICAgICAgIGNoYW5nZURldGVjdGlvbjogY29yZV8xLkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgICAgc2VsZWN0b3I6IFwic20tZGltbWVyXCIsXG4gICAgICAgIHRlbXBsYXRlOiBcIjxkaXYgY2xhc3M9XFxcInVpIHBhZ2UgZGltbWVyXFxcIiAjZGltbWVyPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cXG4gIDwvZGl2PlxcbjwvZGl2PlwiXG4gICAgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgU2VtYW50aWNEaW1tZXJDb21wb25lbnQpO1xuZXhwb3J0cy5TZW1hbnRpY0RpbW1lckNvbXBvbmVudCA9IFNlbWFudGljRGltbWVyQ29tcG9uZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25nLXNlbWFudGljL3NyYy9kaW1tZXIvZGltbWVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgU2VtYW50aWNUcmFuc2l0aW9uQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZW1hbnRpY1RyYW5zaXRpb25Db21wb25lbnQoKSB7XG4gICAgfVxuICAgIFNlbWFudGljVHJhbnNpdGlvbkNvbXBvbmVudC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChhbmltYXRpb24pIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMudHJhbnNpdGlvbi5uYXRpdmVFbGVtZW50KVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oYW5pbWF0aW9uIHx8IFwiZmFkZSBvdXRcIik7XG4gICAgfTtcbiAgICByZXR1cm4gU2VtYW50aWNUcmFuc2l0aW9uQ29tcG9uZW50O1xufSgpKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5WaWV3Q2hpbGQoXCJ0cmFuc2l0aW9uXCIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBjb3JlXzEuRWxlbWVudFJlZilcbl0sIFNlbWFudGljVHJhbnNpdGlvbkNvbXBvbmVudC5wcm90b3R5cGUsIFwidHJhbnNpdGlvblwiLCB2b2lkIDApO1xuU2VtYW50aWNUcmFuc2l0aW9uQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XG4gICAgICAgIGNoYW5nZURldGVjdGlvbjogY29yZV8xLkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgICAgc2VsZWN0b3I6IFwic20tdHJhbnNpdGlvblwiLFxuICAgICAgICB0ZW1wbGF0ZTogXCJcXG4gICAgPGRpdiAjdHJhbnNpdGlvbj5cXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cXG4gICAgPC9kaXY+XFxuICAgIFwiXG4gICAgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgU2VtYW50aWNUcmFuc2l0aW9uQ29tcG9uZW50KTtcbmV4cG9ydHMuU2VtYW50aWNUcmFuc2l0aW9uQ29tcG9uZW50ID0gU2VtYW50aWNUcmFuc2l0aW9uQ29tcG9uZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25nLXNlbWFudGljL3NyYy90cmFuc2l0aW9uL3RyYW5zaXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcbnZhciBTZW1hbnRpY1NoYXBlQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZW1hbnRpY1NoYXBlQ29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5iZWZvcmVDaGFuZ2UgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICB9XG4gICAgU2VtYW50aWNTaGFwZUNvbXBvbmVudC5wcm90b3R5cGUubmdBZnRlclZpZXdJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGJlZm9yZUNoYW5nZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYmVmb3JlQ2hhbmdlLmVtaXQodHJ1ZSk7IH0sXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMub25DaGFuZ2UuZW1pdCh0cnVlKTsgfVxuICAgICAgICB9LCB0aGlzLm9wdGlvbnMpO1xuICAgIH07XG4gICAgU2VtYW50aWNTaGFwZUNvbXBvbmVudC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAwXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgalF1ZXJ5KHRoaXMuc2hhcGUubmF0aXZlRWxlbWVudClcbiAgICAgICAgICAgIC5zaGFwZSh0aGlzLm9wdGlvbnMpXG4gICAgICAgICAgICAuc2hhcGUoYXJncy5qb2luKFwiLFwiKSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2VtYW50aWNTaGFwZUNvbXBvbmVudDtcbn0oKSk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNTaGFwZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiY2xhc3NcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBTZW1hbnRpY1NoYXBlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJvcHRpb25zXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuT3V0cHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FdmVudEVtaXR0ZXIpXG5dLCBTZW1hbnRpY1NoYXBlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJiZWZvcmVDaGFuZ2VcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5PdXRwdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgY29yZV8xLkV2ZW50RW1pdHRlcilcbl0sIFNlbWFudGljU2hhcGVDb21wb25lbnQucHJvdG90eXBlLCBcIm9uQ2hhbmdlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuVmlld0NoaWxkKFwic2hhcGVcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FbGVtZW50UmVmKVxuXSwgU2VtYW50aWNTaGFwZUNvbXBvbmVudC5wcm90b3R5cGUsIFwic2hhcGVcIiwgdm9pZCAwKTtcblNlbWFudGljU2hhcGVDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcbiAgICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBjb3JlXzEuQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgICBzZWxlY3RvcjogXCJzbS1zaGFwZVwiLFxuICAgICAgICB0ZW1wbGF0ZTogXCJcXG4gICAgPGRpdiAjc2hhcGUgY2xhc3M9XFxcInVpIHNoYXBlIHt7Y2xhc3N9fVxcXCI+XFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxuICAgIDwvZGl2PlxcbiAgICBcIlxuICAgIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIFNlbWFudGljU2hhcGVDb21wb25lbnQpO1xuZXhwb3J0cy5TZW1hbnRpY1NoYXBlQ29tcG9uZW50ID0gU2VtYW50aWNTaGFwZUNvbXBvbmVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uZy1zZW1hbnRpYy9zcmMvc2hhcGUvc2hhcGUuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcbnZhciBTZW1hbnRpY0FjY29yZGlvbkNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VtYW50aWNBY2NvcmRpb25Db21wb25lbnQoKSB7XG4gICAgfVxuICAgIFNlbWFudGljQWNjb3JkaW9uQ29tcG9uZW50LnByb3RvdHlwZS5uZ0FmdGVyVmlld0luaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbkFjY29yZGlvbiA9IHRoaXMuaW5BY2NvcmRpb24odGhpcy5hY2NvcmRpb24ubmF0aXZlRWxlbWVudCwgXCJhY2NvcmRpb25cIik7XG4gICAgICAgIGlmIChpbkFjY29yZGlvbikge1xuICAgICAgICAgICAgdGhpcy5hY2NvcmRpb24ubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidWlcIik7XG4gICAgICAgICAgICBqUXVlcnkoaW5BY2NvcmRpb24pLmFjY29yZGlvbih0aGlzLm9wdGlvbnMgfHwge30pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgalF1ZXJ5KHRoaXMuYWNjb3JkaW9uLm5hdGl2ZUVsZW1lbnQpLmFjY29yZGlvbih0aGlzLm9wdGlvbnMgfHwge30pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTZW1hbnRpY0FjY29yZGlvbkNvbXBvbmVudC5wcm90b3R5cGUuaW5BY2NvcmRpb24gPSBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoZWwucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgaWYgKGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0ICYmIGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluQWNjb3JkaW9uKGVsLnBhcmVudE5vZGUsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTZW1hbnRpY0FjY29yZGlvbkNvbXBvbmVudDtcbn0oKSk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNBY2NvcmRpb25Db21wb25lbnQucHJvdG90eXBlLCBcImNsYXNzXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgU2VtYW50aWNBY2NvcmRpb25Db21wb25lbnQucHJvdG90eXBlLCBcIm9wdGlvbnNcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5WaWV3Q2hpbGQoXCJhY2NvcmRpb25cIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FbGVtZW50UmVmKVxuXSwgU2VtYW50aWNBY2NvcmRpb25Db21wb25lbnQucHJvdG90eXBlLCBcImFjY29yZGlvblwiLCB2b2lkIDApO1xuU2VtYW50aWNBY2NvcmRpb25Db21wb25lbnQgPSBfX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcbiAgICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBjb3JlXzEuQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgICBzZWxlY3RvcjogXCJzbS1hY2NvcmRpb25cIixcbiAgICAgICAgc3R5bGVzOiBbXCJzbS1hY2NvcmRpb24gc20tYWNjb3JkaW9uLWl0ZW06Zmlyc3QtY2hpbGQgLnRpdGxlIHsgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50OyB9XCJdLFxuICAgICAgICB0ZW1wbGF0ZTogXCJcXG48ZGl2IGNsYXNzPVxcXCJ1aSBhY2NvcmRpb24ge3tjbGFzc319XFxcIiAjYWNjb3JkaW9uPlxcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxuPC9kaXY+XFxuXCJcbiAgICB9KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBTZW1hbnRpY0FjY29yZGlvbkNvbXBvbmVudCk7XG5leHBvcnRzLlNlbWFudGljQWNjb3JkaW9uQ29tcG9uZW50ID0gU2VtYW50aWNBY2NvcmRpb25Db21wb25lbnQ7XG52YXIgU2VtYW50aWNBY2NvcmRpb25JdGVtQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZW1hbnRpY0FjY29yZGlvbkl0ZW1Db21wb25lbnQoKSB7XG4gICAgfVxuICAgIHJldHVybiBTZW1hbnRpY0FjY29yZGlvbkl0ZW1Db21wb25lbnQ7XG59KCkpO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbl0sIFNlbWFudGljQWNjb3JkaW9uSXRlbUNvbXBvbmVudC5wcm90b3R5cGUsIFwiY2xhc3NcIiwgdm9pZCAwKTtcblNlbWFudGljQWNjb3JkaW9uSXRlbUNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNvcmVfMS5DaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICAgIHNlbGVjdG9yOiBcInNtLWFjY29yZGlvbi1pdGVtXCIsXG4gICAgICAgIHRlbXBsYXRlOiBcIlxcbjxkaXYgY2xhc3M9XFxcInt7Y2xhc3N9fSB0aXRsZVxcXCI+XFxuICAgIDxpIGNsYXNzPVxcXCJkcm9wZG93biBpY29uXFxcIj48L2k+XFxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cXFwiYWNjb3JkaW9uLXRpdGxlXFxcIj48L25nLWNvbnRlbnQ+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwie3tjbGFzc319IGNvbnRlbnRcXFwiPlxcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XFxcImFjY29yZGlvbi1jb250ZW50XFxcIj48L25nLWNvbnRlbnQ+XFxuPC9kaXY+XFxuXCJcbiAgICB9KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBTZW1hbnRpY0FjY29yZGlvbkl0ZW1Db21wb25lbnQpO1xuZXhwb3J0cy5TZW1hbnRpY0FjY29yZGlvbkl0ZW1Db21wb25lbnQgPSBTZW1hbnRpY0FjY29yZGlvbkl0ZW1Db21wb25lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmctc2VtYW50aWMvc3JjL2FjY29yZGlvbi9hY2NvcmRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcbnZhciBTZW1hbnRpY1JhdGluZ0NvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VtYW50aWNSYXRpbmdDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMub25SYXRlID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICB9XG4gICAgU2VtYW50aWNSYXRpbmdDb21wb25lbnQucHJvdG90eXBlLm5nQWZ0ZXJWaWV3SW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgalF1ZXJ5KHRoaXMucmF0aW5nLm5hdGl2ZUVsZW1lbnQpXG4gICAgICAgICAgICAucmF0aW5nKHtcbiAgICAgICAgICAgIGluaXRpYWxSYXRpbmc6IHRoaXMuaW5pdGlhbFJhdGluZyB8fCAwLFxuICAgICAgICAgICAgbWF4UmF0aW5nOiB0aGlzLm1heFJhdGluZyB8fCA1LFxuICAgICAgICAgICAgb25SYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vblJhdGUuZW1pdCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNlbWFudGljUmF0aW5nQ29tcG9uZW50O1xufSgpKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBTZW1hbnRpY1JhdGluZ0NvbXBvbmVudC5wcm90b3R5cGUsIFwiY2xhc3NcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXG5dLCBTZW1hbnRpY1JhdGluZ0NvbXBvbmVudC5wcm90b3R5cGUsIFwiaW5pdGlhbFJhdGluZ1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY29yZV8xLklucHV0KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcbl0sIFNlbWFudGljUmF0aW5nQ29tcG9uZW50LnByb3RvdHlwZSwgXCJtYXhSYXRpbmdcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5PdXRwdXQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgY29yZV8xLkV2ZW50RW1pdHRlcilcbl0sIFNlbWFudGljUmF0aW5nQ29tcG9uZW50LnByb3RvdHlwZSwgXCJvblJhdGVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNvcmVfMS5WaWV3Q2hpbGQoXCJyYXRpbmdcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FbGVtZW50UmVmKVxuXSwgU2VtYW50aWNSYXRpbmdDb21wb25lbnQucHJvdG90eXBlLCBcInJhdGluZ1wiLCB2b2lkIDApO1xuU2VtYW50aWNSYXRpbmdDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcbiAgICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBjb3JlXzEuQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgICBzZWxlY3RvcjogXCJzbS1yYXRpbmdcIixcbiAgICAgICAgdGVtcGxhdGU6IFwiPGRpdiBjbGFzcz1cXFwidWkge3tjbGFzc319IHJhdGluZ1xcXCIgI3JhdGluZz48L2Rpdj5cIlxuICAgIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIFNlbWFudGljUmF0aW5nQ29tcG9uZW50KTtcbmV4cG9ydHMuU2VtYW50aWNSYXRpbmdDb21wb25lbnQgPSBTZW1hbnRpY1JhdGluZ0NvbXBvbmVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uZy1zZW1hbnRpYy9zcmMvcmF0aW5nL3JhdGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtDb21wb25lbnR9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBbQ29tcG9uZW50IGRlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7J215LWFwcCd9IHtzZWxlY3RvciBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdj4gICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XCJpbmRleFwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5pbmRleDwvYT4gICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XCJsb2dpblwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5sb2dpbjwvYT4gICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XCIvXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPmluZm88L2E+ICAgICAgICAgICAgICAgIDwvbmF2PiAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+ICAgICAgICBgfSB0ZW1wbGF0ZSBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19ICAgfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5AQ29tcG9uZW50KHtcbiAgICAgICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgICAgICB0ZW1wbGF0ZTogIGA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+YCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FwcC9zcmMvYXBwLmNvbXBvbmVudC50cyIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbG9naW4uaHRtbCcpLFxuICBzdHlsZXM6IFtyZXF1aXJlKCcuL2xvZ2luLnN0eWxlLmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG5cbiAgICB1c2VybmFtZTpzdHJpbmcgPSBcIlwiO1xuICAgIHBhc3N3b3JkOnN0cmluZyA9IFwiXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgbG9naW5IYW5kbGUoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudXNlcm5hbWUgPT0gJ2FkbWluJyAmJiB0aGlzLnBhc3N3b3JkID09IFwiMTIzNDU2XCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KHRydWUpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoZmFsc2UpO1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FwcC9zcmMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInVpIGdyaWQgZmx1aWQtaGVpZ2h0IGdyYWRpZW50XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2l4IHdpZGUgY2VudGVyZWQgY29sdW1uXFxcIj5cXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJ1aSBmbHVpZCBmb3JtIHNlZ21lbnQgbXQ4cmVtIGxvZ2luLXRyYW5zcGFyZW50XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcInVpIHNtYWxsIGNlbnRlcmVkIGNpcmN1bGFyIGltYWdlXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2J1aWxkL2Fzc2V0cy9hbmd1bGFyLnBuZ1wiKSArIFwiXFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD7otKblj7c8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1aSBsZWZ0IGljb24gaW5wdXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwi6LSm5Y+3XFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlcm5hbWVcXFwiIG5hbWU9XFxcIm5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJ1c2VyIGljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+5a+G56CBPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWkgbGVmdCBpY29uIGlucHV0XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCLlr4bnoIFcXFwiIFsobmdNb2RlbCldPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicHNkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibG9jayBpY29uXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1aSBjaGVja2JveFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIHRhYmluZGV4PVxcXCIwXFxcIiBjbGFzcz1cXFwiaGlkZGVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JIGFncmVlIHRvIHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9uczwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PiAtLT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwidWkgZmx1aWQgbGlua2VkaW4gYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJsb2dpbkhhbmRsZSgpXFxcIj5TdWJtaXQ8L2E+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgIDwvZGl2PlxcblxcbjwvZGl2PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3NyYy9sb2dpbi9sb2dpbi5odG1sXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJidWlsZC9hc3NldHMvYW5ndWxhci5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9idWlsZC9hc3NldHMvYW5ndWxhci5wbmdcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvc3JjL2xvZ2luL2xvZ2luLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT25Jbml0LFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIEFmdGVyQ29udGVudENoZWNrZWQsXG4gICAgVmlld0NoaWxkLFxuXG59ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9vdGVyQ29tcG9uZW50fSBmcm9tICcuLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2dsb2JhbHMvanF1ZXJ5L2luZGV4LmQudHNcIiAvPlxuXG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9pbmZvLmh0bWwnKSxcbiAgLy8gZGlyZWN0aXZlczogW0Zvb3RlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xuICAgIGluZm9EYXRhczphbnkgPSBbXTtcbiAgICBAVmlld0NoaWxkKCdpbmZvTW9kYWwnKVxuICAgIGluZm9Nb2RhbDphbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgICAgdGhpcy5odHRwXG4gICAgICAgICAgICAuZ2V0KCcuLi9hcHAvbW9ja0RhdGEvdGFibGVEYXRhcy5qc29uJylcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmluZm9EYXRhcyA9IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIG1vZGlmeUhhbmRsZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmluZm9Nb2RhbC5zaG93KHtpbnZlcnRlZDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIGhhbmRsZUdldERhdGEoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5odHRwXG4gICAgICAgICAgICAuZ2V0KCcuLi9hcHAvbW9ja0RhdGEvdGFibGVEYXRhcy5qc29uJylcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmluZm9EYXRhcyA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcblxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKTp2b2lkIHtcbiAgICAgICAgJCgndHIudHJhbnNpdGlvbi5oaWRkZW4nKS50cmFuc2l0aW9uKCdmbHkgbGVmdCcpO1xuICAgIH1cblxuICAgIGhhbmRsZVNhdmUgKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaW5mb0RhdGFzLnB1c2goe1wibmFtZVwiOlwiSm9obiBKZXNzZTFcIixcImRhdGVcIjpcIlNlcHRlbWJlciAxNCwgMjAxM1wiLFwiZW1haWxcIjpcImpobGlsazIyQHlhaG9vLmNvbVwiLFwibWFsZVwiOlwiWWVzXCJ9KVxuICAgIH1cbiAgICBoYW5kbGVMaWJyYXJ5U2F2ZSAoKTp2b2lkIHtcbiAgICAgICAgXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hcHAvc3JjL2luZm8vaW5mby5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuPGRpdiBjbGFzcz1cXFwidWkgbmctY29udGFpbmVyIHJvdyBncmFkaWVudFxcXCI+XFxuICAgIDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XFxuICAgIDxpbWcgY2xhc3M9XFxcInVpIHNtYWxsIGNlbnRlcmVkIGNpcmN1bGFyIGltYWdlXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2J1aWxkL2Fzc2V0cy9hbmd1bGFyLnBuZ1wiKSArIFwiXFxcIj5cXG4gICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJ1aSBsZWZ0IHRvcCBhdHRhY2hlZCBtZW51XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxlZnQgbWVudVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWkgaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1aSB0cmFuc3BhcmVudCBpY29uIGlucHV0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcInNlYXJjaCBsaW5rIGljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJwcm9tcHRcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2ggYW5pbWFscy4uLlxcXCI+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJpZ2h0IG1lbnVcXFwiPlxcbiAgICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwic2VhcmNoIGxpbmsgaWNvblxcXCI+PC9pPlxcbiAgICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PiAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwidWkgdG9wIGF0dGFjaGVkIG1lbnVcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIChjbGljayk9XFxcImluZm9Nb2RhbC5zaG93KHtpbnZlcnRlZDogdHJ1ZX0pXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiY29udGVudCBpY29uXFxcIj48L2k+XFxuICAgICAgICAgICAg5paw5aKe6K6+5aSHXFxuICAgICAgICA8L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCIgKGNsaWNrKT1cXFwibW9kaWZ5SGFuZGxlKClcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJwbHVzIGljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICDkv67mlLnorr7lpIdcXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiAoY2xpY2spPVxcXCJsaWJyYXJ5TW9kYWwuc2hvdyh7aW52ZXJ0ZWQ6IHRydWV9KVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImdyaWQgbGF5b3V0IGljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICDmlrDlop7lh7rlupNcXG4gICAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInVpIGF0dGFjaGVkIHNlZ21lbnRcXFwiPlxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ1aSBzdHJpcGVkIHRhYmxlXFxcIj5cXG4gICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD7orr7lpIfnvJbnoIE8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoPuiuvuWkh+WQjeensDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGg+6K6+5aSH5pWw6YePPC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD7lupPlrZjlj7c8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoPuS9v+eUqOeKtuaAgTwvdGg+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBpbmZvRGF0YSBvZiBpbmZvRGF0YXNcXFwiIGNsYXNzPVxcXCJ0cmFuc2l0aW9uIGhpZGRlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgcm91dGVyTGluaz1cXFwiL2RldGFpbGVkL3t7aW5mb0RhdGEuY29kZX19XFxcIj57e2luZm9EYXRhLmNvZGV9fTwvYT48L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7aW5mb0RhdGEubmFtZX19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e2luZm9EYXRhLm51bX19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e2luZm9EYXRhLmxpYnJhcnl9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tpbmZvRGF0YS5zdGF0dXN9fTwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ1aSBib3R0b20gYXR0YWNoZWQgbWVudVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyaWdodCBtZW51XFxcIj5cXG4gICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcInVpIHBhZ2luYXRpb24gbWVudVxcXCI+IC0tPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImFuZ2xlIGxlZnQgaWNvblxcXCI+PC9pPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgMVxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaXNhYmxlZCBpdGVtXFxcIj5cXG4gICAgICAgICAgICAuLi5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgMTBcXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDExXFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAxMlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJhbmdsZSByaWdodCBpY29uXFxcIj48L2k+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwhLS0gPC9kaXY+IC0tPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcbjxteS1mb290ZXI+PC9teS1mb290ZXI+XFxuXFxuPHNtLW1vZGFsIHRpdGxlPVxcXCJIZWxsbyBmcm9tIE1vZGFsXFxcIiBjbGFzcz1cXFwiXFxcIiBpY29uPVxcXCJob21lXFxcIiAjaW5mb01vZGFsPlxcbiAgICA8bW9kYWwtY29udGVudD5cXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJ1aSBmb3JtXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3VyIGZpZWxkc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgTmFtZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImZpcnN0LW5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaXJzdCBOYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+TGFzdCBOYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibGFzdC1uYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTGFzdCBOYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgTmFtZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImZpcnN0LW5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaXJzdCBOYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+TGFzdCBOYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibGFzdC1uYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTGFzdCBOYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHdvIGZpZWxkc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgTmFtZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImZpcnN0LW5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaXJzdCBOYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+TGFzdCBOYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibGFzdC1uYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTGFzdCBOYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuXFxuICAgICAgICA8L2Zvcm0+XFxuICAgIDwvbW9kYWwtY29udGVudD5cXG4gICAgPG1vZGFsLWFjdGlvbnM+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1aSBidXR0b25zXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1aSBidXR0b24gZ3JlZW5cXFwiIChjbGljayk9XFxcImhhbmRsZVNhdmUoKVxcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A75L+d5a2YJm5ic3A7Jm5ic3A7Jm5ic3A7PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWkgYnV0dG9uIHJlZFxcXCIgKGNsaWNrKT1cXFwiaW5mb01vZGFsLmhpZGUoKVxcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A75YWz6ZetJm5ic3A7Jm5ic3A7Jm5ic3A7PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9tb2RhbC1hY3Rpb25zPlxcbjwvc20tbW9kYWw+XFxuXFxuPHNtLW1vZGFsIHRpdGxlPVxcXCJIZWxsbyBmcm9tIE1vZGFsXFxcIiBjbGFzcz1cXFwiXFxcIiBpY29uPVxcXCJob21lXFxcIiAjbGlicmFyeU1vZGFsPlxcbiAgICA8bW9kYWwtY29udGVudD5cXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJ1aSBmb3JtXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3VyIGZpZWxkc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgTmFtZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImZpcnN0LW5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaXJzdCBOYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+TGFzdCBOYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibGFzdC1uYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTGFzdCBOYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgTmFtZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImZpcnN0LW5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaXJzdCBOYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+TGFzdCBOYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibGFzdC1uYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTGFzdCBOYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHdvIGZpZWxkc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgTmFtZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImZpcnN0LW5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaXJzdCBOYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+TGFzdCBOYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibGFzdC1uYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTGFzdCBOYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuXFxuICAgICAgICA8L2Zvcm0+XFxuICAgIDwvbW9kYWwtY29udGVudD5cXG4gICAgPG1vZGFsLWFjdGlvbnM+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1aSBidXR0b25zXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1aSBidXR0b24gZ3JlZW5cXFwiIChjbGljayk9XFxcImhhbmRsZUxpYnJhcnlTYXZlKClcXFwiPiZuYnNwOyZuYnNwOyZuYnNwO+S/neWtmCZuYnNwOyZuYnNwOyZuYnNwOzwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVpIGJ1dHRvbiByZWRcXFwiIChjbGljayk9XFxcImxpYnJhcnlNb2RhbC5oaWRlKClcXFwiPiZuYnNwOyZuYnNwOyZuYnNwO+WFs+mXrSZuYnNwOyZuYnNwOyZuYnNwOzwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvbW9kYWwtYWN0aW9ucz5cXG48L3NtLW1vZGFsPlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3NyYy9pbmZvL2luZm8uaHRtbFxuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEFmdGVyVmlld0NoZWNrZWQsXG59ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9vdGVyQ29tcG9uZW50fSBmcm9tICcuLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZGV0YWlsZWQuaHRtbCcpLFxuICAvLyBkaXJlY3RpdmVzOiBbRm9vdGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBEZXRhaWxlZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWR7XG4gICAgaW5mb0RhdGFzOmFueSA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgICAgICB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5nZXQoJy4uL2FwcC9tb2NrRGF0YS90YWJsZURhdGFzMi5qc29uJylcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvRGF0YXMgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgaGFuZGxlQ2hhbmdlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaW5mb0RhdGFzID0gW1xuICAgICAgICAgICAge1wibmFtZVwiOlwiSm9obiBKZXNzZVwiLFwiZGF0ZVwiOlwiU2VwdGVtYmVyIDE0LCAyMDEzXCIsXCJlbWFpbFwiOlwiamhsaWxrMjJAeWFob28uY29tXCIsXCJtYWxlXCI6XCJZZXNcIn0sXG4gICAgICAgICAgICB7XCJuYW1lXCI6XCJKb2huIEplc3NlXCIsXCJkYXRlXCI6XCJTZXB0ZW1iZXIgMTQsIDIwMTNcIixcImVtYWlsXCI6XCJqaGxpbGsyMkB5YWhvby5jb21cIixcIm1hbGVcIjpcIlllc1wifSxcbiAgICAgICAgICAgIHtcIm5hbWVcIjpcIkpvaG4gSmVzc2VcIixcImRhdGVcIjpcIlNlcHRlbWJlciAxNCwgMjAxM1wiLFwiZW1haWxcIjpcImpobGlsazIyQHlhaG9vLmNvbVwiLFwibWFsZVwiOlwiWWVzXCJ9LFxuICAgICAgICAgICAge1wibmFtZVwiOlwiSm9obiBKZXNzZVwiLFwiZGF0ZVwiOlwiU2VwdGVtYmVyIDE0LCAyMDEzXCIsXCJlbWFpbFwiOlwiamhsaWxrMjJAeWFob28uY29tXCIsXCJtYWxlXCI6XCJZZXNcIn1cbiAgICAgICAgXVxuICAgIH1cblxuICAgIGhhbmRsZUdldERhdGEoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5odHRwXG4gICAgICAgICAgICAuZ2V0KCcuLi9hcHAvbW9ja0RhdGEvdGFibGVEYXRhcy5qc29uJylcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvRGF0YXMgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKTp2b2lkIHtcbiAgICAgICAgJCgndHIudHJhbnNpdGlvbi5oaWRkZW4nKS50cmFuc2l0aW9uKCdmbHkgbGVmdCcpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hcHAvc3JjL2RldGFpbGVkL2RldGFpbGVkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ1aSBuZy1jb250YWluZXIgcm93IGdyYWRpZW50XFxcIj5cXG4gICAgPG15LWhlYWRlcj48L215LWhlYWRlcj5cXG4gICAgPGltZyBjbGFzcz1cXFwidWkgc21hbGwgY2VudGVyZWQgY2lyY3VsYXIgaW1hZ2VcXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYnVpbGQvYXNzZXRzL2FuZ3VsYXIucG5nXCIpICsgXCJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ1aSB0b3AgYXR0YWNoZWQgbWVudVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCIgcm91dGVyTGluaz1cXFwiL1xcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcInJlcGx5IGljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICDov5Tlm57pppbpobVcXG4gICAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInVpIGF0dGFjaGVkIHNlZ21lbnRcXFwiPlxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ1aSBzdHJpcGVkIHRhYmxlXFxcIj5cXG4gICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD7orr7lpIfnvJblj7c8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoPuiuvuWkh+WQjeensDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGg+5Y2V5Lu3PC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD7kv53nrqHkuro8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoPuiBlOezu+eUteivnTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGg+5YCf5Ye65pe26Ze0PC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD7kvpvotKfllYY8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoPuiBlOezu+eUteivnTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGg+5oql5bqfPC90aD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGluZm9EYXRhIG9mIGluZm9EYXRhc1xcXCIgY2xhc3M9XFxcInRyYW5zaXRpb24gaGlkZGVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48YSByb3V0ZXJMaW5rPVxcXCIvZGV0YWlsZWQve3tpbmZvRGF0YS5jb2RlfX1cXFwiPnt7aW5mb0RhdGEuY29kZX19PC9hPjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tpbmZvRGF0YS5uYW1lfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7aW5mb0RhdGEucHJpY2V9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tpbmZvRGF0YS5rZWVwZXJ9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tpbmZvRGF0YS5waG9uZX19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e2luZm9EYXRhLmRhdGV9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tpbmZvRGF0YS5zdXBwbGllcn19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e2luZm9EYXRhLnN1cHBsaWVyVGVsfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuXFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ1aSBib3R0b20gYXR0YWNoZWQgbWVudVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyaWdodCBtZW51XFxcIj5cXG4gICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcInVpIHBhZ2luYXRpb24gbWVudVxcXCI+IC0tPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImFuZ2xlIGxlZnQgaWNvblxcXCI+PC9pPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgMVxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaXNhYmxlZCBpdGVtXFxcIj5cXG4gICAgICAgICAgICAuLi5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgMTBcXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDExXFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAxMlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJhbmdsZSByaWdodCBpY29uXFxcIj48L2k+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwhLS0gPC9kaXY+IC0tPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcbjxteS1mb290ZXI+PC9teS1mb290ZXI+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvc3JjL2RldGFpbGVkL2RldGFpbGVkLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWZvb3RlcicsXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL2Zvb3Rlci5odG1sJyksXG4gIC8vIGRpcmVjdGl2ZXM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYXBwL3NyYy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ1aSBibGFjayBpbnZlcnRlZCB2ZXJ0aWNhbCBmb290ZXIgc2VnbWVudCBteS1mb290ZXJcXFwiPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwidWkgY2VudGVyIGFsaWduZWQgY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9idWlsZC9hc3NldHMvYW5ndWxhci5wbmdcIikgKyBcIlxcXCIgY2xhc3M9XFxcInVpIGNlbnRlcmVkIG1pbmkgaW1hZ2VcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidWkgaG9yaXpvbnRhbCBpbnZlcnRlZCBzbWFsbCBkaXZpZGVkIGxpbmsgbGlzdFxcXCI+XFxuICAgICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBocmVmPVxcXCJodHRwOi8vc2VtYW50aWMtdWkubWl0LWxpY2Vuc2Uub3JnL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkZyZWUgJmFtcDsgT3BlbiBTb3VyY2UgKE1JVCk8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvc3JjL2Zvb3Rlci9mb290ZXIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktaGVhZGVyJyxcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaGVhZGVyLmh0bWwnKSxcbiAgLy8gZGlyZWN0aXZlczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hcHAvc3JjL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzbS1tZW51IHRpdGxlPVxcXCJBbmd1bGFyMlxcXCIgY2xhc3M9XFxcImludmVydGVkXFxcIiBsb2dvPVxcXCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2ltYWdlcy9hdmF0YXIvc21hbGwvc3RldmllLmpwZ1xcXCI+XFxuICAgIDxhIHNtLWl0ZW0gKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBpdGVtc1xcXCIgW2ljb25dPVxcXCJpdGVtLmljb25cXFwiPnt7aXRlbT8udGl0bGV9fTwvYT5cXG5cXG4gICAgPHNtLW1lbnUgY2xhc3M9XFxcIm1lbnUgcmlnaHQgc2Vjb25kYXJ5XFxcIj5cXG4gICAgICAgIDxhIHNtLWl0ZW0gaHJlZj1cXFwiIy9lbGVtZW50cy9tZW51XFxcIiBpbWFnZT1cXFwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9pbWFnZXMvYXZhdGFyL3NtYWxsL3N0ZXZpZS5qcGdcXFwiPkVsbGlvdCBGdTwvYT5cXG4gICAgPC9zbS1tZW51Plxcbjwvc20tbWVudT5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9zcmMvaGVhZGVyL2hlYWRlci5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHtJbmZvQ29tcG9uZW50fSBmcm9tICcuLi9pbmZvL2luZm8uY29tcG9uZW50JztcbmltcG9ydCB7RGV0YWlsZWRDb21wb25lbnR9IGZyb20gJy4uL2RldGFpbGVkL2RldGFpbGVkLmNvbXBvbmVudCc7XG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2dsb2JhbHMvanF1ZXJ5L2luZGV4LmQudHNcIiAvPlxuY29uc3QgYXBwUm91dGVzOiBSb3V0ZXMgPSBbXG5cbiAgICAgICAgeyBwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogSW5mb0NvbXBvbmVudCB9LFxuICAgICAgICB7IHBhdGg6ICdkZXRhaWxlZC86aWQnLCBjb21wb25lbnQ6IERldGFpbGVkQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMseyB1c2VIYXNoOiB0cnVlIH0pXG4gIF0sXG5cbiAgZXhwb3J0czogW1xuICAgIFJvdXRlck1vZHVsZVxuICBdLFxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAkKCcubG9hZGluZy1kaW1tZXInKS5yZW1vdmVDbGFzcygndmlzaWJsZSBhY3RpdmUnKS5hZGRDbGFzcygnaGlkZGVuJykucmVtb3ZlQXR0cihcInN0eWxlXCIpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYXBwL3NyYy9hcHBSb3V0ZXIvYXBwUm91dGVyLm1vZHVsZS50cyJdLCJzb3VyY2VSb290IjoiIn0=