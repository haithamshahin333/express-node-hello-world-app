# Express Node Hello World App

[![Board Status](https://dev.azure.com/hshahindemos/96177d06-2bcc-43c1-b74f-b7609fc779cc/c241852c-a5b0-45e2-81ce-9fa083fde3a5/_apis/work/boardbadge/487d06e6-aa5e-4fe0-b898-a883bedae53f?columnOptions=1)](https://dev.azure.com/hshahindemos/96177d06-2bcc-43c1-b74f-b7609fc779cc/_boards/board/t/c241852c-a5b0-45e2-81ce-9fa083fde3a5/Microsoft.RequirementCategory/)

This app is a basic hello-world-app. Make an update to index.js with the `MESSAGE` variable and run the app locally with `node index.js` or with docker.

### ACR

Run the following:

```
export RG_NAME=<resource-group>
export LOCATION=eastus
export ACR_NAME=<acr-name>

# Create Resource Group
az group create --name $RG_NAME --location $LOCATION --output none

# Create ACR Instance
az acr create --name $ACR_NAME --resource-group $RG_NAME --sku Standard --enable-admin-access

# Build image (Dockerfile in root and send along full directory '.')
az acr build -t node/hello-world:{{.Run.ID}} -r $ACR_NAME -g $RG_NAME .
```