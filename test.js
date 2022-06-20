var formdata = new FormData();
formdata.append(
  "token",
  "xoxp-2154537752-1197900020801-1259008614097-725254cbcf047ee644a36d6bc0c59e28"
);
formdata.append("text", "how to setup MongoDB");
formdata.append("user_id", "99999");
formdata.append("user_name", "rrosado");
formdata.append("channel_id", "99999");
formdata.append("team_id", "99999");

var requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow",
};

fetch("http://localhost:8085/odin/slack/diagnose-lucene", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
