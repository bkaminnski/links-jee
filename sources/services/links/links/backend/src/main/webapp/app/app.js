/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "app";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LinksPage = __webpack_require__(14);

var _LinksPage2 = _interopRequireDefault(_LinksPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContentEvents = function () {
    function ContentEvents() {
        _classCallCheck(this, ContentEvents);
    }

    _createClass(ContentEvents, [{
        key: 'subscribeToRequested',
        value: function subscribeToRequested() {
            var _this = this;

            this.contentRequestedSubscriptionToken = PubSub.subscribe('uiEvent.content.requested.links', function (msg) {
                _this.publishAvailable();
            });
        }
    }, {
        key: 'publishAvailable',
        value: function publishAvailable() {
            PubSub.publish('uiEvent.content.available', React.createElement(_LinksPage2.default, null));
        }
    }]);

    return ContentEvents;
}();

exports.default = ContentEvents;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuItemsEvents = function () {
    function MenuItemsEvents() {
        _classCallCheck(this, MenuItemsEvents);
    }

    _createClass(MenuItemsEvents, [{
        key: 'subscribeToRequested',
        value: function subscribeToRequested() {
            var _this = this;

            this.menuItemRequestedSubscriptionToken = PubSub.subscribe('uiEvent.menuItems.requested', function (msg) {
                _this.publishAvailable();
            });
        }
    }, {
        key: 'publishAvailable',
        value: function publishAvailable() {
            PubSub.publish('uiEvent.menuItem.available', {
                code: 'links',
                label: 'Links',
                priority: 100
            });
        }
    }]);

    return MenuItemsEvents;
}();

exports.default = MenuItemsEvents;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MenuItemsEvents = __webpack_require__(3);

var _MenuItemsEvents2 = _interopRequireDefault(_MenuItemsEvents);

var _ContentEvents = __webpack_require__(2);

var _ContentEvents2 = _interopRequireDefault(_ContentEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentEvents = new _ContentEvents2.default();
contentEvents.subscribeToRequested();

var menuItemsEvents = new _MenuItemsEvents2.default();
menuItemsEvents.subscribeToRequested();
menuItemsEvents.publishAvailable();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AttributesStore = function () {
    function AttributesStore(formComponent) {
        _classCallCheck(this, AttributesStore);

        this.formComponent = formComponent;
        this.attributesComponents = {};
        this.keyPrefix = 0;
    }

    _createClass(AttributesStore, [{
        key: "initialState",
        value: function initialState() {
            this.keyPrefix++;
            return {
                attributes: {},
                allValid: false,
                keyPrefix: this.keyPrefix
            };
        }
    }, {
        key: "onChange",
        value: function onChange(attributeName, attributeValue, attributeValid) {
            var attributes = this.formComponent.state.attributes;
            attributes[attributeName].value = attributeValue;
            attributes[attributeName].valid = attributeValid;
            this.formComponent.setState({
                attributes: attributes,
                allValid: this.allAttributesAreValid()
            });
        }
    }, {
        key: "allAttributesAreValid",
        value: function allAttributesAreValid() {
            return !Object.values(this.formComponent.state.attributes).some(function (a) {
                return !a.valid;
            });
        }
    }, {
        key: "focusOnFirstInvalidAttributeComponent",
        value: function focusOnFirstInvalidAttributeComponent() {
            var _this = this;

            var attributes = this.formComponent.state.attributes;
            Object.keys(attributes).filter(function (a) {
                return !attributes[a].valid;
            }).map(function (a) {
                return _this.attributesComponents[a];
            }).some(function (ac) {
                ac.showErrorAndFocus();
                return true;
            });
        }
    }, {
        key: "addAttributeComponent",
        value: function addAttributeComponent(attributeName, attributeComponent) {
            this.attributesComponents[attributeName] = attributeComponent;
        }
    }]);

    return AttributesStore;
}();

exports.default = AttributesStore;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputGroup = function (_React$Component) {
    _inherits(InputGroup, _React$Component);

    function InputGroup() {
        _classCallCheck(this, InputGroup);

        var _this = _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).call(this));

        _this.onChange = _this.onChange.bind(_this);
        _this.shouldShowError = _this.shouldShowError.bind(_this);
        _this.state = {
            value: null,
            valid: false,
            touched: false
        };
        return _this;
    }

    _createClass(InputGroup, [{
        key: 'focus',
        value: function focus() {
            this.input.focus();
        }
    }, {
        key: 'showErrorAndFocus',
        value: function showErrorAndFocus() {
            var _this2 = this;

            this.setState({ touched: true }, function () {
                _this2.input.focus();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var inputGroupErrorClassName = this.shouldShowError() ? ' has-feedback has-error' : '';
            var ariaDescribedBy = this.props.id + this.shouldShowError() ? '-invalid-description' : '-label';
            var errorIcon = this.shouldShowError() ? _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove form-control-feedback', 'aria-hidden': 'true' }) : null;
            var errorDescription = this.shouldShowError() ? _react2.default.createElement(
                'span',
                { id: this.props.id + '-invalid-description', className: 'sr-only' },
                'Invalid ',
                this.props.label
            ) : null;

            return _react2.default.createElement(
                'div',
                { className: 'input-group bottom-buffer' + inputGroupErrorClassName },
                _react2.default.createElement(
                    'span',
                    { className: 'input-group-addon', id: this.props.id + '-label' },
                    this.props.label
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    ref: function ref(input) {
                        _this3.input = input;
                    },
                    onChange: this.onChange,
                    value: this.state.value == null ? this.props.initialValue : this.state.value,
                    className: 'form-control',
                    placeholder: this.props.placeholder,
                    'aria-describedby': ariaDescribedBy
                }),
                errorIcon,
                errorDescription
            );
        }
    }, {
        key: 'shouldShowError',
        value: function shouldShowError() {
            return !this.state.valid && this.state.touched;
        }
    }, {
        key: 'onChange',
        value: function onChange(e) {
            var _this4 = this;

            this.setState({ value: e.target.value, valid: this.props.validate(e), touched: true }, function () {
                _this4.props.onChange(_this4.props.attributeName, _this4.state.value, _this4.state.valid);
            });
        }
    }]);

    return InputGroup;
}(_react2.default.Component);

exports.default = InputGroup;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Url = __webpack_require__(9);

var _Url2 = _interopRequireDefault(_Url);

var _LinkCreationFormStore = __webpack_require__(8);

var _LinkCreationFormStore2 = _interopRequireDefault(_LinkCreationFormStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkCreationForm = function (_React$Component) {
    _inherits(LinkCreationForm, _React$Component);

    function LinkCreationForm() {
        _classCallCheck(this, LinkCreationForm);

        var _this = _possibleConstructorReturn(this, (LinkCreationForm.__proto__ || Object.getPrototypeOf(LinkCreationForm)).call(this));

        _this.store = new _LinkCreationFormStore2.default(_this);
        _this.onChange = _this.onChange.bind(_this);
        _this.onSubmit = _this.onSubmit.bind(_this);
        return _this;
    }

    _createClass(LinkCreationForm, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'bottom-buffer-double' },
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.onSubmit },
                    _react2.default.createElement(_Url2.default, {
                        id: this.state.keyPrefix + '-url',
                        key: this.state.keyPrefix + '-url',
                        ref: function ref(url) {
                            _this2.store.addAttributeComponent('url', url);
                        },
                        attributeName: 'url',
                        initialValue: '',
                        onChange: this.onChange
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'text-right', role: 'group', 'aria-label': 'Add' },
                        _react2.default.createElement(
                            'button',
                            { type: 'submit', className: 'btn btn-default' },
                            'Add'
                        )
                    )
                )
            );
        }
    }, {
        key: 'onChange',
        value: function onChange(attributeName, attributeValue, attributeValid) {
            this.store.onChange(attributeName, attributeValue, attributeValid);
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(e) {
            e.preventDefault();
            if (this.store.allAttributesAreValid()) {
                this.store.createLink();
            } else {
                this.store.focusOnFirstInvalidAttributeComponent();
            }
        }
    }]);

    return LinkCreationForm;
}(_react2.default.Component);

exports.default = LinkCreationForm;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AttributesStore = __webpack_require__(5);

var _AttributesStore2 = _interopRequireDefault(_AttributesStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkCreationFormStore = function () {
    function LinkCreationFormStore(formComponent) {
        _classCallCheck(this, LinkCreationFormStore);

        this.attributesStore = new _AttributesStore2.default(formComponent);
        this.formComponent = formComponent;
        this.formComponent.state = this.initialState();
    }

    _createClass(LinkCreationFormStore, [{
        key: 'initialState',
        value: function initialState() {
            var initialState = this.attributesStore.initialState();
            initialState.attributes = {
                url: {
                    value: '',
                    valid: false
                }
            };
            return initialState;
        }
    }, {
        key: 'createLink',
        value: function createLink() {
            var _this = this;

            uniqueIds.withNext(function (uniqueId) {
                var createLinkCommand = {
                    sharedId: uniqueId,
                    url: _this.formComponent.state.attributes.url.value
                };
                HttpClient.sendPost('/links/resources/links', createLinkCommand).then(function (response) {
                    if (response.status == 204) {
                        _this.reset();
                        PubSub.publish('uiEvent.linkCreation.linkWasCreated');
                    }
                });
            });
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.formComponent.setState(this.initialState());
        }
    }, {
        key: 'onChange',
        value: function onChange(attributeName, attributeValue, attributeValid) {
            this.attributesStore.onChange(attributeName, attributeValue, attributeValid);
        }
    }, {
        key: 'addAttributeComponent',
        value: function addAttributeComponent(attributeName, attributeComponent) {
            this.attributesStore.addAttributeComponent(attributeName, attributeComponent);
        }
    }, {
        key: 'allAttributesAreValid',
        value: function allAttributesAreValid() {
            return this.attributesStore.allAttributesAreValid();
        }
    }, {
        key: 'focusOnFirstInvalidAttributeComponent',
        value: function focusOnFirstInvalidAttributeComponent() {
            this.attributesStore.focusOnFirstInvalidAttributeComponent();
        }
    }]);

    return LinkCreationFormStore;
}();

exports.default = LinkCreationFormStore;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InputGroup = __webpack_require__(6);

var _InputGroup2 = _interopRequireDefault(_InputGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Url = function (_React$Component) {
    _inherits(Url, _React$Component);

    function Url() {
        _classCallCheck(this, Url);

        var _this = _possibleConstructorReturn(this, (Url.__proto__ || Object.getPrototypeOf(Url)).call(this));

        _this.validate = _this.validate.bind(_this);
        return _this;
    }

    _createClass(Url, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.inputGroup.focus();
        }
    }, {
        key: 'showErrorAndFocus',
        value: function showErrorAndFocus() {
            this.inputGroup.showErrorAndFocus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_InputGroup2.default, {
                id: this.props.id,
                ref: function ref(inputGroup) {
                    _this2.inputGroup = inputGroup;
                },
                attributeName: this.props.attributeName,
                initialValue: this.props.initialValue,
                onChange: this.props.onChange,
                validate: this.validate,
                label: 'URL',
                placeholder: 'http://paste-a-link-here.com'
            });
        }
    }, {
        key: 'validate',
        value: function validate(e) {
            var url = e.target.value;
            return url != '' && /^.+((\.\w{2,})|(localhost)).*$/.test(url);
        }
    }]);

    return Url;
}(_react2.default.Component);

exports.default = Url;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Url = __webpack_require__(13);

var _Url2 = _interopRequireDefault(_Url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkItem = function (_React$Component) {
    _inherits(LinkItem, _React$Component);

    function LinkItem() {
        _classCallCheck(this, LinkItem);

        return _possibleConstructorReturn(this, (LinkItem.__proto__ || Object.getPrototypeOf(LinkItem)).apply(this, arguments));
    }

    _createClass(LinkItem, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'list-group' },
                _react2.default.createElement(
                    'a',
                    { href: this.props.link.url, className: 'list-group-item', target: '_blank' },
                    _react2.default.createElement(_Url2.default, { url: this.props.link.url }),
                    this.props.link.components
                )
            );
        }
    }]);

    return LinkItem;
}(_react2.default.Component);

exports.default = LinkItem;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LinksListStore = __webpack_require__(12);

var _LinksListStore2 = _interopRequireDefault(_LinksListStore);

var _LinkItem = __webpack_require__(10);

var _LinkItem2 = _interopRequireDefault(_LinkItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinksList = function (_React$Component) {
    _inherits(LinksList, _React$Component);

    function LinksList() {
        _classCallCheck(this, LinksList);

        var _this = _possibleConstructorReturn(this, (LinksList.__proto__ || Object.getPrototypeOf(LinksList)).call(this));

        _this.linksListStore = new _LinksListStore2.default(_this);
        return _this;
    }

    _createClass(LinksList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.linksListStore.subscribeToEvents();
            this.linksListStore.loadLinks();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.linksListStore.unsubscribeFromEvents();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.state.links.map(function (link) {
                    return _react2.default.createElement(_LinkItem2.default, { key: link.sharedId, link: link });
                })
            );
        }
    }]);

    return LinksList;
}(_react2.default.Component);

exports.default = LinksList;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinksListStore = function () {
    function LinksListStore(linksListComponent) {
        _classCallCheck(this, LinksListStore);

        this.component = linksListComponent;
        this.component.state = { links: [] };
        this.links = [];
        this.slices = [];
    }

    _createClass(LinksListStore, [{
        key: 'loadLinks',
        value: function loadLinks() {
            var _this = this;

            HttpClient.sendGet('/links/resources/links').then(function (links) {
                _this.links = links.jsonObject;
                _this.rebuildState();
            });
        }
    }, {
        key: 'subscribeToEvents',
        value: function subscribeToEvents() {
            var _this2 = this;

            this.linksListSliceAvailableSubscriptionToken = PubSub.subscribe('uiEvent.linksListSlice.available', function (msg, slice) {
                _this2.slices.push(slice);
                _this2.rebuildState();
            });
            this.linkWasCreatedSubscriptionToken = PubSub.subscribe('uiEvent.linkCreation.linkWasCreated', function (msg) {
                _this2.loadLinks();
            });
            PubSub.publish('uiEvent.linksListSlices.requested');
        }
    }, {
        key: 'rebuildState',
        value: function rebuildState() {
            var linksMap = {};
            this.links.forEach(function (link) {
                link.components = [];
                linksMap[link.sharedId] = link;
            });
            this.slices.sort(function (s1, s2) {
                return s1.priority - s2.priority;
            }).forEach(function (slice) {
                return slice.fragments.forEach(function (fragment) {
                    return linksMap[fragment.linkSharedId].components.push(fragment.component);
                });
            });
            this.component.setState({ links: this.links });
        }
    }, {
        key: 'unsubscribeFromEvents',
        value: function unsubscribeFromEvents() {
            PubSub.unsubscribe(this.linksListSliceAvailableSubscriptionToken);
            PubSub.unsubscribe(this.linkWasCreatedSubscriptionToken);
        }
    }]);

    return LinksListStore;
}();

exports.default = LinksListStore;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Url = function (_React$Component) {
    _inherits(Url, _React$Component);

    function Url() {
        _classCallCheck(this, Url);

        return _possibleConstructorReturn(this, (Url.__proto__ || Object.getPrototypeOf(Url)).apply(this, arguments));
    }

    _createClass(Url, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "h4",
                { className: "list-group-item-heading" },
                this.props.url
            );
        }
    }]);

    return Url;
}(_react2.default.Component);

exports.default = Url;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LinkCreationForm = __webpack_require__(7);

var _LinkCreationForm2 = _interopRequireDefault(_LinkCreationForm);

var _LinksList = __webpack_require__(11);

var _LinksList2 = _interopRequireDefault(_LinksList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinksPage = function (_React$Component) {
    _inherits(LinksPage, _React$Component);

    function LinksPage() {
        _classCallCheck(this, LinksPage);

        return _possibleConstructorReturn(this, (LinksPage.__proto__ || Object.getPrototypeOf(LinksPage)).apply(this, arguments));
    }

    _createClass(LinksPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_LinkCreationForm2.default, null),
                _react2.default.createElement(_LinksList2.default, null)
            );
        }
    }]);

    return LinksPage;
}(_react2.default.Component);

exports.default = LinksPage;

/***/ })
/******/ ]);