Deploying a fullstack application using C# and Angular to Azure App Service can be done either from Visual Studio or GitHub. Here are the steps for both methods:

### From Visual Studio

1. **Prepare Your Application**:

   - Ensure your C# backend and Angular frontend are working correctly locally.
   - Build your Angular project using `ng build --prod` to generate the `dist` folder.

2. **Create an Azure App Service**:

https://portal.azure.com/?quickstart=true#view/Microsoft_Azure_Resources/QuickstartCenterBlade

- In the Azure portal, create a new App Service.
- Choose the appropriate runtime stack (e.g., .NET Core for the backend).

1. **Publish the Backend**:

   - In Visual Studio, right-click your C# project and select `Publish`.
   - Choose `Azure` as the target and select your App Service.
   - Follow the prompts to publish your backend.

2. **Deploy the Frontend**:
   - In the Azure portal, navigate to your App Service.
   - Go to the `Deployment Center` and select `Local Git` or `FTP` as the deployment method.
   - Upload the contents of the `dist` folder to the `wwwroot` directory of your App Service.

### From GitHub

1. **Prepare Your Application**:

   - Ensure your C# backend and Angular frontend are working correctly locally.
   - Build your Angular project using `ng build --prod` to generate the `dist` folder.

2. **Create an Azure App Service**:

   - In the Azure portal, create a new App Service.
   - Choose the appropriate runtime stack (e.g., .NET Core for the backend).

3. **Set Up GitHub Actions**:

   - Create a `.github/workflows` directory in your repository.
   - Add a workflow file (e.g., `deploy.yml`) with the following content:

     ```yaml
     name: Deploy to Azure

     on:
       push:
         branches:
           - main

     jobs:
       build-and-deploy:
         runs-on: ubuntu-latest

         steps:
           - name: Checkout code
             uses: actions/checkout@v2

           - name: Set up .NET Core
             uses: actions/setup-dotnet@v1
             with:
               dotnet-version: "6.0.x"

           - name: Build .NET Core app
             run: dotnet build --configuration Release

           - name: Publish .NET Core app
             run: dotnet publish -c Release -o ${{ github.workspace }}/publish

           - name: Set up Node.js
             uses: actions/setup-node@v2
             with:
               node-version: "14.x"

           - name: Install Angular CLI
             run: npm install -g @angular/cli

           - name: Build Angular app
             run: |
               cd ClientApp
               npm install
               ng build --prod

           - name: Deploy to Azure Web App
             uses: azure/webapps-deploy@v2
             with:
               app-name: <Your-App-Service-Name>
               publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
               package: ${{ github.workspace }}/publish
     ```

4. **Configure Secrets**:

   - In your GitHub repository, go to `Settings` > `Secrets` > `Actions`.
   - Add a new secret named `AZURE_WEBAPP_PUBLISH_PROFILE` and paste the content of your Azure publish profile.

5. **Push Changes**:
   - Commit and push your changes to the `main` branch.
   - GitHub Actions will automatically build and deploy your application to Azure.

These steps should help you get your fullstack application deployed to Azure App Service. If you need more detailed guidance, you can refer to the [Microsoft documentation](4) or [GitHub Actions documentation](11).

Feel free to ask if you have any questions or need further assistance! 😊

Source: Conversation with Copilot, 08/09/2024
(1) Easily Create and Deploy an Angular App From Visual Studio Code to Azure App Service. https://www.youtube.com/watch?v=d0xsw54fqFA.
(2) Deploying Angular App To Azure THE EASY WAY | Host Angular App On Azure [2022 Tutorial]. https://www.youtube.com/watch?v=YMw5YmZRiI0.
(3) Deploy Angular App on Azure. https://www.youtube.com/watch?v=MAYIwTl66FU.
(4) Publish an ASP.NET Core app to Azure with Visual Studio Code. https://learn.microsoft.com/en-us/aspnet/core/tutorials/publish-to-azure-webapp-using-vscode?view=aspnetcore-8.0.
(5) Deploy an Angular App From Visual Studio Code to Azure. https://dzone.com/articles/deploy-an-angular-app-from-visual-studio-code-to-a-1.
(6) Angular + .NET Core + SQL on Azure - How to Deploy a Full Stack App to .... https://jasonwatmore.com/post/2020/01/08/angular-net-core-sql-on-azure-how-to-deploy-a-full-stack-app-to-microsoft-azure.
(7) Deploy an Angular app on Azure Static Web Apps. https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-angular.
(8) Deploying an Angular Application to an Azure App Service. https://andrewhalil.com/2021/02/27/deploying-an-angular-application-to-azure-app-service/.
(9) Part 6 How to use Github Actions for deploying to Azure App Service Angular. https://www.youtube.com/watch?v=4jwu63FZPH0.
(10) How To Deploy Your Application To Azure Using GitHub Actions | CI/CD Pipeline. https://www.youtube.com/watch?v=QP0pi7xe24s.
(11) Configure CI/CD with GitHub Actions - Azure App Service. https://learn.microsoft.com/en-us/azure/app-service/deploy-github-actions.
(12) Deploy apps from GitHub to Azure | Microsoft Learn. https://learn.microsoft.com/en-us/azure/developer/github/deploy-to-azure.
(13) Azure-Samples/app-service-web-dotnet-get-started - GitHub. https://github.com/Azure-Samples/app-service-web-dotnet-get-started.
