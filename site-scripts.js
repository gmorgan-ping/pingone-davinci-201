<script
      type="text/javascript"
      src="https://pingsandboxsdk.singularkey.com/latest/singularkey.js"
    ></script>

function initialize() {}


/****************************************
* PingOne DaVinci Flow Handlers
****************************************/
function loadwidget() {    
      const skApiBaseUrl = "https://api.singularkey.com/v1";
      const companyId = "20814b75-1dd6-4c91-8962-445cf5ec7fa0";
      const skApiKey =
        "c8d792a85b158fcb850634f907eda8a4391026e98a2bca6cc08124e5d48a5620b730cf65f77794c13dc2b09e647a23912425ce1cf83d4978af210fa738027a70888673baaea249872ab0cec70630235431bf27db85138d101911f5e605642dcd74ad67fd2e2670640b05fb00b26ffd60c631c2d47d3946fe771d97d772aff4c8";
      const skPolicyId = "d12f314746553f82a35e620f18ea1410";

      const skGetTokenUrl =
        skApiBaseUrl + "/company/" + companyId + "/sdkToken";

      //*** Add the API Key from your SK Application. ***/
      var headers = new Headers();
      headers.append("X-SK-API-KEY", skApiKey);
      headers.append("Content-type", "application/json");

      var requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
      };

      //*** Retrieve SK Token ***/
      fetch(skGetTokenUrl, requestOptions)
        .then((response) => response.json())
        .then((responseData) => {
          var props = {
            config: {
              method: "runFlow",
              apiRoot: skApiBaseUrl,
              accessToken: responseData.access_token,
              companyId: companyId,
              policyId: skPolicyId,
            },
            useModal: false,
            successCallback,
            errorCallback,
            onCloseModal,
          };
          /*** Invoke Singular Key Widget ****/
          console.log(props);
          singularkey.skRenderScreen(document.getElementById("register-widget"), props);
        })
        .catch((error) => console.log("error", error));
    }


function successCallback(response) {
  console.log(response);
}

function errorCallback(error) {
  console.log(error);
}

function onCloseModal() {
  console.log("onCloseModal");
}
