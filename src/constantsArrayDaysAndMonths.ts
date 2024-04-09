export type TCountry = "pt-BR" | "en-US" | "es-ES" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "zh-CN"

export const defaultArrayMonths: Record<TCountry, Array<string>> = {
  "pt-BR": ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  "en-US": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "es-ES": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  "fr-FR": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
  "de-DE": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
  "it-IT": ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
  "ja-JP": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  "ko-KR": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  "zh-CN": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
}

export const defaultArrayDaysWeekly: Record<TCountry, Array<string>> = {
  "pt-BR": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  "en-US": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "es-ES": ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
  "fr-FR": ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
  "de-DE": ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  "it-IT": ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
  "ja-JP": ["日", "月", "火", "水", "木", "金", "土"],
  "ko-KR": ["일", "월", "화", "수", "목", "금", "토"],
  "zh-CN": ["日", "一", "二", "三", "四", "五", "六"]
}

export const textActions = {
  "pt-BR": { confirm: "Confirmar", cancel: "Cancelar" },
  "en-US": { confirm: "Confirm", cancel: "Cancel" },
  "es-ES": { confirm: "Confirmar", cancel: "Cancelar" },
  "fr-FR": { confirm: "Confirmer", cancel: "Annuler" },
  "de-DE": { confirm: "Bestätigen", cancel: "Abbrechen" },
  "it-IT": { confirm: "Conferma", cancel: "Annulla" },
  "ja-JP": { confirm: "確認", cancel: "キャンセル" },
  "ko-KR": { confirm: "확인", cancel: "취소" },
  "zh-CN": { confirm: "确认", cancel: "取消" }
}