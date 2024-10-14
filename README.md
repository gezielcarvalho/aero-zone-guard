# Aero Zone Guard - Airspace Construction Assessment System

The **Aero Zone Guard** is a software solution designed to automate the analysis and assessment of construction projects in relation to their potential impact on aviation safety and airspace management. Whether it's a new building, antenna, or airport, the system evaluates potential threats and interference with existing aviation infrastructure before authorizing construction. Developed to streamline the reception, analysis, and decision-making process, this software facilitates the flow of electronic documentation through various sectors of the aeronautical authority, ultimately leading to the issuance or denial of clearance for the proposed project.

## Key Features

- **Automated Documentation Reception:** The system allows for the submission of electronic documentation related to construction projects, including geographic coordinates, elevation data, and physical characteristics of airports and obstacles.
- **Pre-Analysis based on Geographic Data:** Using geographic coordinates and elevation information, the system performs pre-analysis to assess potential threats and interference with existing aviation infrastructure.
- **Workflow Management:** Documentation flows through different sectors of the aeronautical authority, with the system managing the workflow and ensuring timely processing and review by relevant stakeholders.
- **Decision Emission:** Based on the analysis and assessment, the system facilitates the emission of a final decision by the aeronautical authority, either granting clearance for the construction project or issuing a denial based on aviation safety concerns.

## Technologies Used

- **Backend:** C#/ASP.NET Core
- **Frontend:** Angular with Tailwind CSS
- **Database:** SQL Server, MongoDB
- **Geospatial Analysis:** DotSpatial

## Installation and Setup

### Clone the repository:

```bash
git clone https://github.com/gezielcarvalho/aero-zone-guard.git
```

### Set up the backend:

1. **Navigate to the /backend directory**:
   ```bash
   cd backend
   ```
2. **Install dependencies**:
   ```bash
   dotnet restore
   ```
3. **Set up environment variables** and configure the database connection in `appsettings.json` or `secrets.json`.
4. **Run migrations**:
   ```bash
   dotnet ef database update
   ```
5. **Start the backend server**:
   ```bash
   dotnet run
   ```

### Set up the frontend:

1. **Navigate to the /frontend directory**:
   ```bash
   cd frontend
   ```
2. **Install dependencies** (if needed):
   ```bash
   npm install
   ```
3. **Build and start the frontend server**:
   ```bash
   npm start
   ```
4. **Access the application** at `http://localhost:8000` in your web browser.

## Usage

1. **Submit electronic documentation** for construction projects through the system.
2. **Pre-analysis** is performed based on geographic data and elevation information to assess potential threats and interference with aviation infrastructure.
3. **Documentation flows** through different sectors of the aeronautical authority for review and decision-making.
4. The system facilitates the **emission of a final decision** by the aeronautical authority, granting clearance or issuing a denial based on aviation safety concerns.

## Contributing

Contributions to the **Aero Zone Guard** are welcome! Please fork the repository, make your changes, and submit a pull request with your improvements.

## References

https://github.com/DotSpatial/DotSpatial
https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1

## License

This project is licensed under the MIT License.
