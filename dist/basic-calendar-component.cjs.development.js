'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ArrowBackIosIcon = _interopDefault(require('@material-ui/icons/ArrowBackIos'));
var ArrowForwardIosIcon = _interopDefault(require('@material-ui/icons/ArrowForwardIos'));
var EventIcon = _interopDefault(require('@material-ui/icons/Event'));
var styled = _interopDefault(require('styled-components'));
var core = require('@material-ui/core');

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var validateDate = function validateDate(date) {
  if (typeof date === "object") {
    return date;
  }
  if (typeof date === "string") {
    return new Date(date + " 00:00:00");
  }
  return null;
};
var handleClick = function handleClick(event, _ref) {
  var currentMonth = _ref.currentMonth,
    currentYear = _ref.currentYear,
    setSelectedDate = _ref.setSelectedDate;
  var classList = event.currentTarget.classList;
  if (!classList.contains("disabled-past") && !classList.contains("disabled-future")) {
    var dateForOnChange = new Date(currentYear + "-" + (currentMonth + 1) + "-" + event.currentTarget.dataset.day + " 00:00:00");
    setSelectedDate(dateForOnChange);
  }
};
var generateCalendar = function generateCalendar(_ref2) {
  var month = _ref2.month,
    year = _ref2.year,
    selectedDate = _ref2.selectedDate,
    currentMonth = _ref2.currentMonth,
    currentYear = _ref2.currentYear,
    setSelectedDate = _ref2.setSelectedDate,
    defaultDate = _ref2.defaultDate,
    disabledPast = _ref2.disabledPast,
    disabledFuture = _ref2.disabledFuture,
    disabled = _ref2.disabled;
  var paramSelectedDate = selectedDate || new Date();
  var paramDisableFuture = disabledFuture && (defaultDate || new Date());
  var paramDisabledPast = disabledPast && (defaultDate || new Date());
  var firstDay = new Date(year, month, 1);
  var lastDay = new Date(year, month + 1, 0);
  var daysInMonth = lastDay.getDate();
  var dayCounter = 0;
  var days = [];
  for (var i = 0; i < 6; i++) {
    var weekDays = [];
    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay.getDay()) {
        weekDays.push(React__default.createElement("button", {
          key: "empty-" + j,
          type: "button"
        }));
      } else if (dayCounter < daysInMonth) {
        var _paramSelectedDate$ge, _paramSelectedDate$ge2;
        dayCounter++;
        var isSelected = dayCounter === paramSelectedDate.getDate() && currentMonth === ((_paramSelectedDate$ge = paramSelectedDate.getMonth()) != null ? _paramSelectedDate$ge : 0) && currentYear === ((_paramSelectedDate$ge2 = paramSelectedDate.getFullYear()) != null ? _paramSelectedDate$ge2 : 0);
        var cellDate = new Date(year, month, dayCounter);
        var isDisabledPast = paramDisabledPast && (cellDate.setHours(0, 0, 0, 0) < paramDisabledPast.setHours(0, 0, 0, 0) || cellDate.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0));
        var isDisabledFuture = paramDisableFuture && (cellDate.setHours(0, 0, 0, 0) > paramDisableFuture.setHours(0, 0, 0, 0) || cellDate.setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0));
        weekDays.push(React__default.createElement("button", {
          key: "day-" + dayCounter,
          className: (isSelected ? 'selected' : "") + " " + (isDisabledPast || disabled ? 'disabled-past' : "") + " " + (isDisabledFuture || disabled ? 'disabled-future' : ""),
          "data-day": dayCounter,
          disabled: disabled,
          onClick: function onClick(event) {
            return handleClick(event, {
              currentMonth: currentMonth,
              currentYear: currentYear,
              setSelectedDate: setSelectedDate
            });
          },
          type: "button"
        }, dayCounter));
      } else {
        weekDays.push(React__default.createElement("button", {
          key: "empty-" + j,
          type: "button"
        }));
      }
    }
    days.push(React__default.createElement("div", {
      key: "week-" + i,
      className: "week"
    }, weekDays));
  }
  return React__default.createElement("div", {
    className: "calendar"
  }, days);
};

var _templateObject, _templateObject2;
var ConteinerCalendar = /*#__PURE__*/styled.div(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n\n  #calendar-content {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    max-width: 19.375rem;\n    min-width: 19.375rem;\n    max-height: 31.25rem;\n    border-radius: 0.25rem;\n    font-family: 'Poppins', sans-serif;\n    margin: auto;\n    z-index: 1;\n  \n    .header-calendar {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      padding: 1rem;\n      background: #02226A;\n      border-radius: 0.5rem 0.5rem 0 0;\n      gap: 12px;\n    }\n\n    option {\n      color: #02226A;\n    }\n\n    #select-month,\n    #select-year {\n      display: flex;\n      border: none;\n      background: transparent;\n      appearance: none;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.75;\n      cursor: pointer;\n    }\n    #select-month::-webkit-scrollbar,\n    #select-year::-webkit-scrollbar {\n      display: none;\n    }\n    #select-month {\n      letter-spacing: 0.00938em;\n      text-align: center;\n    }\n    #select-year {\n      width: min-content;\n      letter-spacing: 0.00938em;\n      color: rgba(255, 255, 255, 0.54);\n    }\n\n    #date-string {\n      font-size: 34px;\n      font-weight: 400;\n      line-height: 1.235;\n      letter-spacing: 0.00735em;\n      color: #fff;\n    }\n\n    #calendar {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 100%;\n    }\n  \n    #body-calendar {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 100%;\n      padding: 1rem;\n      gap: 1.25rem;\n      background: #ffffff;\n      border-radius: 0 0 0.5rem 0.5rem;\n\n      .first-line {\n        display: flex;\n        color: rgba(0, 0, 0, 0.38);\n        font-weight: 500;\n        font-size: 0.875rem;\n        justify-content: space-between;\n        width: 100%;\n\n        span {\n          width: 2.25rem;\n          text-align: center;\n        }\n      }\n\n      .calendar {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n\n        .week {\n          display: flex;\n          width: 100%;\n          justify-content: space-between;\n\n          button {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border: none;\n            background: transparent;\n            border-radius: 50%;\n            min-width: 2.25rem;\n            max-width: 2.25rem;\n            min-height: 2.25rem;\n            max-height: 2.25rem;\n            cursor: pointer;\n          }\n          .selected button {\n            color: #fff;\n          }\n        }\n      }\n    }\n  \n    .nav-buttons {\n      display: flex;\n      width: 100%;\n      justify-content: space-between;\n\n      button {\n        display: flex;\n        align-items: center;\n        max-width: 1.875rem;\n        max-height: 1.875rem;\n        padding: 0;\n        border: none;\n        background: transparent;\n        cursor: pointer;\n      }\n    }\n\n    .disabled-past,\n    .disabled-future {\n      color: rgba(0, 0, 0, 0.38);\n      font-weight: 500;\n      background-color: #fff;\n    }\n  \n    .MuiSvgIcon-root {\n      color: rgba(0, 0, 0, 0.54);\n    }\n\n    .selected {\n      color: #fff !important;\n      font-weight: 500 !important;\n      background-color: #02226A !important;\n    }\n  \n    .actions {\n      display: flex;\n      align-items: center;\n      justify-content: end;\n      width: 100%;\n      gap: 0.625rem;\n  \n      button {\n        border: none;\n        background: transparent;\n        text-transform: uppercase;\n        color: #02226A;\n        font-weight: 500;\n        line-height: 0.1094rem;\n        font-size: 0.875rem;\n        min-width: 4rem;\n        border-radius: 0.25rem;\n        letter-spacing: 0.0286rem;\n        cursor: pointer;\n      }\n    }\n  }\n"])));
var SInput = /*#__PURE__*/styled.div(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  position: relative;\n  width: 100%;\n  font-family: 'Poppins', sans-serif;\n  \n  &.outlined {\n    color: ", ";\n    border: 0.0625rem solid ", ";\n    border-radius: 0.25rem;\n    \n    input:not(:placeholder-shown):focus ~ label,\n    input:not(:placeholder-shown):valid ~ label,\n    input:focus ~ label,\n    input:disabled ~ label {\n      transform: translateY(-1.5rem) translateX(-20%) scale(0.8);\n      background-color: #FFF;\n      padding-inline: 0.3rem;\n      color: ", ";\n      z-index: 0;\n    }\n  }\n  &.outlined.disabled {\n    color: ", ";\n    border: 0.0625rem solid ", ";\n    border-radius: 0.25rem;\n    \n    input:not(:placeholder-shown):focus ~ label,\n    input:not(:placeholder-shown):valid ~ label,\n    input:focus ~ label,\n    input:disabled ~ label {\n      transform: translateY(-1.5rem) translateX(-20%) scale(0.8);\n      background-color: #FFF;\n      padding-inline: 0.3rem;\n      color: ", ";\n      z-index: 0;\n    }\n\n    svg {\n      fill: ", ";\n      color: ", ";\n    }\n  }\n\n  &.default {\n    color: ", ";\n    border-bottom: 0.0625rem solid ", ";\n    align-items: baseline;\n    \n    input:not(:placeholder-shown):focus ~ label,\n    input:not(:placeholder-shown):valid ~ label,\n    input:focus ~ label,\n    input:disabled ~ label {\n      transform: translateY(-1rem) translateX(-20%) scale(0.8);\n      background-color: #FFF;\n      padding-inline: 0.3rem;\n      color: ", ";\n      z-index: 0;\n    }\n  }\n  &.default.disabled {\n    color: ", ";\n    border-bottom: 0.0625rem solid ", ";\n    align-items: baseline;\n    \n    input:not(:placeholder-shown):focus ~ label,\n    input:not(:placeholder-shown):valid ~ label,\n    input:focus ~ label,\n    input:disabled ~ label {\n      transform: translateY(-1rem) translateX(-20%) scale(0.8);\n      background-color: #FFF;\n      padding-inline: 0.3rem;\n      color: ", ";\n      z-index: 0;\n    }\n\n    svg {\n      fill: ", ";\n      color: ", ";\n    }\n  }\n\n  input {\n    all: unset;\n    padding: 0 1rem;\n    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n    min-height: 2rem; \n    width: 100%;\n    caret-color: transparent;\n    cursor: pointer;\n  }\n\n  label {\n    position: absolute;\n    top: 0.9375rem;\n    left: 0.9375rem;\n    z-index: 1;\n    pointer-events: none;\n    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  svg {\n    fill: ", ";\n    color: ", ";\n  }\n"])), function (p) {
  return p.error ? "#BB0A30" : "#043D94";
}, function (p) {
  return p.error ? "#BB0A30" : "#043D94";
}, function (p) {
  return p.error ? "#BB0A30" : "#043D94";
}, function (p) {
  return p.error ? "#BB0A30" : "#91B7F0";
}, function (p) {
  return p.error ? "#BB0A30" : "#91B7F0";
}, function (p) {
  return p.error ? "#BB0A30" : "#91B7F0";
}, function (p) {
  return p.error ? "#BB0A30" : "#91B7F0";
}, function (p) {
  return p.error ? "#BB0A30" : "#91B7F0";
}, function (p) {
  return p.error ? "#BB0A30" : "#043D94";
}, function (p) {
  return p.error ? "#BB0A30" : "#043D94";
}, function (p) {
  return p.error ? "#BB0A30" : "#043D94";
}, function (p) {
  return p.error ? "#BB0A30" : "#91B7F0";
}, function (p) {
  return p.error ? "#BB0A30" : "#91B7F0";
}, function (p) {
  return p.error ? "#BB0A30" : "#91B7F0";
}, function (p) {
  return p.error ? "#BB0A30" : "#91B7F0";
}, function (p) {
  return p.error ? "#BB0A30" : "#91B7F0";
}, function (p) {
  return p.error ? "#BB0A30" : "#043D94";
}, function (p) {
  return p.error ? "#BB0A30" : "#043D94";
});

var defaultArrayMonths = {
  "pt-BR": ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  "en-US": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "es-ES": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  "fr-FR": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
  "de-DE": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
  "it-IT": ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
  "ja-JP": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  "ko-KR": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  "zh-CN": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
};
var defaultArrayDaysWeekly = {
  "pt-BR": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  "en-US": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "es-ES": ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
  "fr-FR": ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
  "de-DE": ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  "it-IT": ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
  "ja-JP": ["日", "月", "火", "水", "木", "金", "土"],
  "ko-KR": ["일", "월", "화", "수", "목", "금", "토"],
  "zh-CN": ["日", "一", "二", "三", "四", "五", "六"]
};
var textActions = {
  "pt-BR": {
    confirm: "Confirmar",
    cancel: "Cancelar"
  },
  "en-US": {
    confirm: "Confirm",
    cancel: "Cancel"
  },
  "es-ES": {
    confirm: "Confirmar",
    cancel: "Cancelar"
  },
  "fr-FR": {
    confirm: "Confirmer",
    cancel: "Annuler"
  },
  "de-DE": {
    confirm: "Bestätigen",
    cancel: "Abbrechen"
  },
  "it-IT": {
    confirm: "Conferma",
    cancel: "Annulla"
  },
  "ja-JP": {
    confirm: "確認",
    cancel: "キャンセル"
  },
  "ko-KR": {
    confirm: "확인",
    cancel: "취소"
  },
  "zh-CN": {
    confirm: "确认",
    cancel: "取消"
  }
};

var _excluded = ["defaultDate", "icon", "label", "placeholder", "forwardedRef", "error", "disabledPast", "disabledFuture", "onChange", "language", "variant", "disabled", "inputName", "dataLanguage"];
var Calendar = function Calendar(_ref) {
  var defaultDate = _ref.defaultDate,
    icon = _ref.icon,
    label = _ref.label,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? " " : _ref$placeholder,
    forwardedRef = _ref.forwardedRef,
    error = _ref.error,
    disabledPast = _ref.disabledPast,
    disabledFuture = _ref.disabledFuture,
    onChange = _ref.onChange,
    _ref$language = _ref.language,
    language = _ref$language === void 0 ? "en-US" : _ref$language,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "outlined" : _ref$variant,
    disabled = _ref.disabled,
    inputName = _ref.inputName,
    dataLanguage = _ref.dataLanguage,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var arrayDaysWeekly = dataLanguage && dataLanguage.daysOfTheWeek.length === 7 ? dataLanguage.daysOfTheWeek : defaultArrayDaysWeekly[language];
  var arrayMonths = dataLanguage && dataLanguage.months.length === 12 ? dataLanguage.months : defaultArrayMonths[language];
  var _useState = React.useState(defaultDate ? validateDate(defaultDate).getFullYear() : new Date().getFullYear()),
    currentYear = _useState[0],
    setCurrentYear = _useState[1];
  var _useState2 = React.useState(defaultDate ? validateDate(defaultDate).getMonth() : new Date().getMonth()),
    currentMonth = _useState2[0],
    setCurrentMonth = _useState2[1];
  var _useState3 = React.useState(validateDate(defaultDate)),
    selectedDate = _useState3[0],
    _setSelectedDate = _useState3[1];
  var _useState4 = React.useState(validateDate(defaultDate)),
    currentSelectDate = _useState4[0],
    setCurrentSelectDate = _useState4[1];
  var _useState5 = React.useState(false),
    openCalendar = _useState5[0],
    setOpenCalendar = _useState5[1];
  var changeYear = function changeYear(event) {
    setCurrentYear(Number(event.target.value));
  };
  var prevMonth = function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(function (s) {
        return s - 1;
      });
    }
  };
  var nextMonth = function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(function (s) {
        return s + 1;
      });
    }
  };
  var changeMonth = function changeMonth(event) {
    setCurrentMonth(Number(event.target.value));
  };
  var generateOptionsYear = function generateOptionsYear() {
    var startYear = currentYear - 100;
    var endYear = currentYear + 100;
    var options = [];
    for (var i = startYear; i <= endYear; i++) {
      options.push({
        label: i,
        value: i
      });
    }
    return options;
  };
  var handleOpenCalendar = function handleOpenCalendar() {
    setOpenCalendar(!openCalendar);
  };
  var handleConfirm = function handleConfirm() {
    if (onChange && selectedDate) {
      setCurrentSelectDate(selectedDate);
      onChange(selectedDate, selectedDate.toLocaleDateString());
    }
    handleOpenCalendar();
  };
  var handleCancel = function handleCancel() {
    _setSelectedDate(currentSelectDate);
    handleOpenCalendar();
  };
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(SInput, {
    error: error,
    className: (variant + " " + (disabled ? "disabled" : "")).trim()
  }, React__default.createElement("input", Object.assign({
    type: 'text',
    id: "input-calendar",
    value: (selectedDate == null ? void 0 : selectedDate.toLocaleDateString()) || "",
    placeholder: placeholder,
    ref: forwardedRef,
    onClick: handleOpenCalendar,
    autoComplete: 'off',
    onChange: function onChange() {
      return (selectedDate == null ? void 0 : selectedDate.toLocaleDateString()) || "";
    },
    disabled: disabled,
    name: inputName
  }, rest)), React__default.createElement("label", {
    htmlFor: "input-calendar"
  }, label), React__default.createElement(core.IconButton, {
    onClick: handleOpenCalendar
  }, icon || React__default.createElement(EventIcon, null))), openCalendar ? React__default.createElement(ConteinerCalendar, {
    role: "dialog",
    id: "dialog"
  }, React__default.createElement("div", {
    id: 'calendar-content'
  }, React__default.createElement("div", {
    className: "header-calendar"
  }, React__default.createElement("select", {
    id: "select-year",
    onChange: changeYear,
    value: currentYear,
    className: "select-year"
  }, generateOptionsYear().map(function (item, index) {
    return React__default.createElement("option", {
      value: item.value,
      key: index
    }, item.label);
  })), React__default.createElement("span", {
    id: "date-string"
  }, arrayDaysWeekly[(selectedDate == null ? void 0 : selectedDate.getDay()) || 0], ", ", arrayMonths[(selectedDate == null ? void 0 : selectedDate.getMonth()) || currentMonth], " ", selectedDate == null ? void 0 : selectedDate.getDate())), React__default.createElement("div", {
    id: "body-calendar"
  }, React__default.createElement("div", {
    className: "nav-buttons"
  }, React__default.createElement("button", {
    id: "previous-month",
    onClick: prevMonth
  }, React__default.createElement(ArrowBackIosIcon, {
    fontSize: 'small'
  })), React__default.createElement("select", {
    id: "select-month",
    onChange: changeMonth,
    value: currentMonth,
    className: "select-month"
  }, arrayMonths.map(function (item, index) {
    return React__default.createElement("option", {
      value: index,
      key: index
    }, item);
  })), React__default.createElement("button", {
    id: "next-month",
    onClick: nextMonth
  }, React__default.createElement(ArrowForwardIosIcon, {
    fontSize: 'small'
  }))), React__default.createElement("div", {
    id: "calendar"
  }, React__default.createElement("div", {
    id: "body-calendar"
  }, React__default.createElement("div", {
    className: "first-line"
  }, arrayDaysWeekly.map(function (item, index) {
    return React__default.createElement("span", {
      key: index
    }, item);
  })), generateCalendar({
    month: currentMonth,
    year: currentYear,
    currentMonth: currentMonth,
    currentYear: currentYear,
    selectedDate: selectedDate,
    setSelectedDate: function setSelectedDate(value) {
      _setSelectedDate(value);
    },
    defaultDate: validateDate(defaultDate),
    disabledPast: disabledPast,
    disabledFuture: disabledFuture,
    disabled: disabled
  })), React__default.createElement("div", {
    className: 'actions'
  }, React__default.createElement("button", {
    onClick: handleCancel
  }, textActions[language].cancel), React__default.createElement("button", {
    onClick: handleConfirm
  }, textActions[language].confirm)))))) : null);
};

exports.Calendar = Calendar;
//# sourceMappingURL=basic-calendar-component.cjs.development.js.map
