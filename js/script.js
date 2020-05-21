const checkBoxHandler = () => {
  const checkbox = document.getElementById("navi-toggle");
  const t = (checkbox.checked = !checkbox.checked);
  return t;
};
