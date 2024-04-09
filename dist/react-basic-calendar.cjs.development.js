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

var validateDate = function validateDate(date) {
  if (typeof date === "object") {
    return date;
  }
  if (typeof date === "string") {
    return new Date(date + " 00:00:00");
  }
  return null;
};
var generateCalendar = function generateCalendar(_ref) {
  var month = _ref.month,
    year = _ref.year,
    selectedDate = _ref.selectedDate,
    selectedDay = _ref.selectedDay,
    table = _ref.table,
    currentMonth = _ref.currentMonth,
    currentYear = _ref.currentYear,
    onChange = _ref.onChange,
    setSelectedDay = _ref.setSelectedDay,
    setSelectedDate = _ref.setSelectedDate,
    defaultDate = _ref.defaultDate,
    disabledPast = _ref.disabledPast,
    disabledFuture = _ref.disabledFuture;
  var paramSelectedDate = selectedDate || new Date();
  var paramDefaultDateForDisableDates = defaultDate || new Date();
  var firstDay = new Date(year, month, 1);
  var lastDay = new Date(year, month + 1, 0);
  var daysInMonth = lastDay.getDate();
  var dayCounter = 0;
  var html = "";
  for (var i = 0; i < 6; i++) {
    html += "<tr>";
    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay.getDay()) {
        html += "<td></td>";
      } else if (dayCounter < daysInMonth) {
        var _paramSelectedDate$ge, _paramSelectedDate$ge2;
        dayCounter++;
        var dayNumber = dayCounter;
        var isSelected = dayNumber === paramSelectedDate.getDate() && currentMonth === ((_paramSelectedDate$ge = paramSelectedDate.getMonth()) != null ? _paramSelectedDate$ge : 0) && currentYear === ((_paramSelectedDate$ge2 = paramSelectedDate.getFullYear()) != null ? _paramSelectedDate$ge2 : 0);
        var cellDate = new Date(year, month, dayCounter);
        var isDisabledPast = paramDefaultDateForDisableDates && disabledPast && (cellDate.setHours(0, 0, 0, 0) < paramDefaultDateForDisableDates.setHours(0, 0, 0, 0) || cellDate.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0));
        var isDisabledFuture = paramDefaultDateForDisableDates && disabledFuture && (cellDate.setHours(0, 0, 0, 0) > paramDefaultDateForDisableDates.setHours(0, 0, 0, 0) || cellDate.setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0));
        html += "<td class=\"" + (isSelected ? 'selected' : '') + " " + (isDisabledPast ? 'disabled-past' : undefined) + " " + (isDisabledFuture ? 'disabled-future' : undefined) + "\" data-day=\"" + dayNumber + "\">" + dayNumber + "</td>";
      } else {
        html += "";
      }
    }
    html += "</tr>";
  }
  if (table) {
    table.innerHTML = html;
  }
  var days = document.querySelectorAll("td");
  days.forEach(function (day) {
    if (day.innerText && !day.classList.contains('disabled-past') && !day.classList.contains('disabled-future')) {
      day.addEventListener("click", function () {
        setSelectedDay(Number(day.dataset.day));
        var newSelectedDate = new Date(currentYear, currentMonth, Number(day.dataset.day));
        setSelectedDate(newSelectedDate);
        if (selectedDay) {
          var selectedDayElement = document.querySelector("[data-day=\"" + selectedDay + "\"]");
          if (selectedDayElement) {
            selectedDayElement.classList.remove("selected");
          }
        }
        day.classList.add("selected");
        var date = new Date(currentYear + "-" + (currentMonth + 1) + "-" + day.dataset.day + " 00:00:00");
        onChange == null || onChange(date, date.toLocaleDateString());
      });
    }
  });
};

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var _templateObject, _templateObject2;
var ConteinerCalendar = /*#__PURE__*/styled.div(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n\n  #content {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    max-width: 19.375rem;\n    min-width: 19.375rem;\n    max-height: 31.25rem;\n    border-radius: 0.25rem;\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    margin: auto;\n  \n    .header {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      padding: 1rem;\n      background: #02226A;\n      border-radius: 0.5rem 0.5rem 0 0;\n      gap: 12px;\n    }\n\n    option {\n      color: #02226A;\n    }\n\n    #month,\n    #year {\n      display: flex;\n      border: none;\n      background: transparent;\n      appearance: none;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.75;\n    }\n    #mont::-webkit-scrollbar,\n    #year::-webkit-scrollbar {\n      display: none;\n    }\n    #month {\n      letter-spacing: 0.00938em;\n      text-align: center;\n    }\n    #year {\n      width: min-content;\n      letter-spacing: 0.00938em;\n      color: rgba(255, 255, 255, 0.54);\n    }\n\n    #date-full {\n      font-size: 34px;\n      font-weight: 400;\n      line-height: 1.235;\n      letter-spacing: 0.00735em;\n      color: #fff;\n    }\n  \n    #body-calendar {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 100%;\n      padding: 1rem;\n      gap: 1.25rem;\n      background: #ffffff;\n      border-radius: 0 0 0.5rem 0.5rem;\n    }\n  \n    .nav-buttons {\n      display: flex;\n      width: 100%;\n      justify-content: space-between;\n    }\n  \n    .nav-buttons button {\n      display: flex;\n      align-items: center;\n      max-width: 1.875rem;\n      max-height: 1.875rem;\n      padding: 0;\n      border: none;\n      background: transparent;\n      cursor: pointer;\n    }\n  \n    #calendar {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 100%;\n    }\n  \n    table {\n      width: 100%;\n      border-collapse: collapse;\n      min-height: 19.0625rem;\n    }\n  \n    thead tr {\n      color: rgba(0, 0, 0, 0.38);\n      font-weight: 500;\n      font-size: 0.875rem;\n      height: 2.25rem;\n      width: 2.25rem;\n    }\n  \n    td {\n      cursor: pointer;\n      border-radius: 50%;\n      width: 2.25rem;\n      height: 2.25rem;\n      text-align: center;\n    }\n  \n    .selected,\n    td:hover {\n      color: #fff;\n      font-weight: 500;\n      background-color: #02226A;\n    }\n\n    .disabled-past,\n    .disabled-future {\n      color: rgba(0, 0, 0, 0.38);\n      font-weight: 500;\n      background-color: #fff;\n    }\n  \n    .MuiSvgIcon-root {\n      color: rgba(0, 0, 0, 0.54);\n    }\n  \n    .actions {\n      display: flex;\n      align-items: center;\n      justify-content: end;\n      width: 100%;\n      gap: 0.625rem;\n  \n      button {\n        border: none;\n        background: transparent;\n        text-transform: uppercase;\n        color: #02226A;\n        font-weight: 500;\n        line-height: 0.1094rem;\n        font-size: 0.875rem;\n        min-width: 4rem;\n        border-radius: 0.25rem;\n        letter-spacing: 0.0286rem;\n        cursor: pointer;\n      }\n    }\n  }\n"])));
var SInput = /*#__PURE__*/styled.div(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  position: relative;\n  width: 100%;\n  color: ", ";\n  border: 0.0625rem solid ", ";\n  border-radius: 0.25rem;\n  font-family: 'Poppins', sans-serif;\n\n  input {\n    all: unset;\n    padding: 0 1rem;\n    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n    min-height: 3rem; \n    width: 100%;\n    caret-color: transparent;\n    cursor: pointer;\n  }\n\n  label {\n    position: absolute;\n    top: 0.9375rem;\n    left: 0.9375rem;\n    z-index: 1;\n    pointer-events: none;\n    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  \n  input:not(:placeholder-shown):focus ~ label,\n  input:not(:placeholder-shown):valid ~ label,\n  input:focus ~ label {\n    transform: translateY(-1.5rem) translateX(-20%) scale(0.8);\n    background-color: #FFF;\n    padding-inline: 0.3rem;\n    color: ", ";\n    z-index: 0;\n  }\n\n  svg {\n    fill: ", ";\n    color: ", ";\n  }\n"])), function (p) {
  return p.error ? "#BB0A30" : "#35424F";
}, function (p) {
  return p.error ? "#BB0A30" : "#043D94";
}, function (p) {
  return p.error ? "#BB0A30" : "#043D94";
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
    _onChange = _ref.onChange,
    _ref$language = _ref.language,
    language = _ref$language === void 0 ? "en-US" : _ref$language;
  var arrayDaysWeekly = defaultArrayDaysWeekly[language];
  var arrayMonths = defaultArrayMonths[language];
  var calendarRef = React.useRef(null);
  var _useState = React.useState(defaultDate ? validateDate(defaultDate).getFullYear() : new Date().getFullYear()),
    currentYear = _useState[0],
    setCurrentYear = _useState[1];
  var _useState2 = React.useState(defaultDate ? validateDate(defaultDate).getMonth() : new Date().getMonth()),
    currentMonth = _useState2[0],
    setCurrentMonth = _useState2[1];
  var _useState3 = React.useState(defaultDate ? validateDate(defaultDate).getDate() : new Date().getDate()),
    selectedDay = _useState3[0],
    _setSelectedDay = _useState3[1];
  var _useState4 = React.useState(validateDate(defaultDate)),
    selectedDate = _useState4[0],
    _setSelectedDate = _useState4[1];
  var _useState5 = React.useState(false),
    openCalendar = _useState5[0],
    setOpenCalendar = _useState5[1];
  React.useEffect(function () {
    generateCalendar({
      month: currentMonth,
      year: currentYear,
      currentMonth: currentMonth,
      currentYear: currentYear,
      selectedDate: selectedDate,
      selectedDay: selectedDay,
      setSelectedDate: function setSelectedDate(value) {
        _setSelectedDate(value);
      },
      setSelectedDay: function setSelectedDay(value) {
        _setSelectedDay(value);
      },
      table: calendarRef.current,
      onChange: function onChange(date, dateToLocaleString) {
        _onChange == null || _onChange(date, dateToLocaleString);
      },
      defaultDate: validateDate(defaultDate),
      disabledPast: disabledPast,
      disabledFuture: disabledFuture
    });
  }, [currentYear, currentMonth, selectedDate, openCalendar]);
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
    if (_onChange && selectedDate) {
      _onChange(selectedDate, selectedDate.toLocaleDateString());
    }
    handleOpenCalendar();
  };
  var handleCancel = function handleCancel() {
    _setSelectedDate(validateDate(defaultDate));
    handleOpenCalendar();
  };
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(SInput, {
    error: error
  }, React__default.createElement("input", {
    type: 'text',
    id: "data-calendar",
    value: selectedDate == null ? void 0 : selectedDate.toLocaleDateString(),
    placeholder: placeholder,
    ref: forwardedRef,
    onClick: handleOpenCalendar,
    autoComplete: 'off',
    onChange: function onChange(e) {
      return e.target.value = (selectedDate == null ? void 0 : selectedDate.toLocaleDateString()) || "";
    }
  }), React__default.createElement("label", {
    htmlFor: "data-calendar"
  }, label), React__default.createElement(core.IconButton, {
    onClick: handleOpenCalendar
  }, icon || React__default.createElement(EventIcon, null))), openCalendar ? React__default.createElement(ConteinerCalendar, {
    role: "dialog",
    id: "dialog"
  }, React__default.createElement("div", {
    id: 'content'
  }, React__default.createElement("div", {
    className: "header"
  }, React__default.createElement("select", {
    id: "year",
    onChange: changeYear,
    value: currentYear,
    className: "select"
  }, generateOptionsYear().map(function (item, index) {
    return React__default.createElement("option", {
      value: item.value,
      key: index
    }, item.label);
  })), React__default.createElement("span", {
    id: "date-full"
  }, arrayDaysWeekly[(selectedDate == null ? void 0 : selectedDate.getDay()) || 0], ", ", arrayMonths[(selectedDate == null ? void 0 : selectedDate.getMonth()) || currentMonth], " ", selectedDate == null ? void 0 : selectedDate.getDate())), React__default.createElement("div", {
    id: "body-calendar"
  }, React__default.createElement("div", {
    className: "nav-buttons"
  }, React__default.createElement("button", {
    id: "previous",
    onClick: prevMonth
  }, React__default.createElement(ArrowBackIosIcon, {
    fontSize: 'small'
  })), React__default.createElement("select", {
    id: "month",
    onChange: changeMonth,
    value: currentMonth,
    className: "select"
  }, arrayMonths.map(function (item, index) {
    return React__default.createElement("option", {
      value: index,
      key: index
    }, item);
  })), React__default.createElement("button", {
    id: "next",
    onClick: nextMonth
  }, React__default.createElement(ArrowForwardIosIcon, {
    fontSize: 'small'
  }))), React__default.createElement("div", {
    id: "calendar"
  }, React__default.createElement("table", null, React__default.createElement("thead", null, React__default.createElement("tr", null, arrayDaysWeekly.map(function (item, index) {
    return React__default.createElement("th", {
      key: index
    }, item);
  }))), React__default.createElement("tbody", {
    ref: calendarRef
  })), React__default.createElement("div", {
    className: 'actions'
  }, React__default.createElement("button", {
    onClick: handleCancel
  }, textActions[language].cancel), React__default.createElement("button", {
    onClick: handleConfirm
  }, textActions[language].confirm)))))) : null);
};

exports.Calendar = Calendar;
//# sourceMappingURL=react-basic-calendar.cjs.development.js.map
