const { useRef, useEffect } = wp.element;
export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function snackbarNotice({ status = "success", message }) {
  wp.data.dispatch("core/notices").createNotice(
    status, // Can be one of: success, info, warning, error.
    message, // Text string to display.
    { type: "snackbar" }
  );
}

export const bytesToSize = (bytes) => {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
};

export const toDate = (d) => {
  d = new Date(d);
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return (
    d.getDate() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getFullYear() +
    " at " +
    hours +
    ":" +
    minutes +
    ampm
  );
};
