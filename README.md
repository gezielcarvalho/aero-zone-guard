# Airspace Construction Project Assessment System

The Airspace Construction Project Assessment System is a software solution designed to automate the analysis and assessment of construction projects in relation to their potential impact on aviation safety and airspace management. Whether it's a new building, antenna, or airport, the system evaluates potential threats and interference with existing aviation infrastructure before authorizing construction. Developed to streamline the reception, analysis, and decision-making process, this software facilitates the flow of electronic documentation through various sectors of the aeronautical authority, ultimately leading to the issuance or denial of clearance for the proposed project.

## Key Features

- **Automated Documentation Reception:** The system allows for the submission of electronic documentation related to construction projects, including geographic coordinates, elevation data, and physical characteristics of airports and obstacles.
- **Pre-Analysis based on Geographic Data:** Using geographic coordinates and elevation information, the system performs pre-analysis to assess potential threats and interference with existing aviation infrastructure.
- **Workflow Management:** Documentation flows through different sectors of the aeronautical authority, with the system managing the workflow and ensuring timely processing and review by relevant stakeholders.
- **Decision Emission:** Based on the analysis and assessment, the system facilitates the emission of a final decision by the aeronautical authority, either granting clearance for the construction project or issuing a denial based on aviation safety concerns.

## Technologies Used

- **Backend:** Python with FastAPI framework
- **Frontend:** Angular with Tailwind CSS
- **Database:** PostgreSQL
- **Geospatial Analysis:**
- **Document Management:**

## Installation and Setup

1. Clone the repository: `git clone https://github.com/your-username/airspace-construction-assessment.git`
2. Set up the backend:
   - Navigate to the `/backend` directory.
   - Install dependencies: `pip install -r requirements.txt`
   - Set up environment variables and configure database connection in `settings.py`.
   - Run migrations: `python manage.py migrate`
   - Start the backend server: `python manage.py runserver`
3. Set up the frontend:
   - Navigate to the `/frontend` directory.
   - No additional setup required for frontend as it's built with standard web technologies.
4. Access the application at `http://localhost:8000` in your web browser.

## Usage

- Users can submit electronic documentation for construction projects through the system.
- The system performs pre-analysis based on geographic data and elevation information to assess potential threats and interference with aviation infrastructure.
- Documentation flows through different sectors of the aeronautical authority for review and decision-making.
- The system facilitates the emission of a final decision by the aeronautical authority, granting clearance or issuing a denial based on aviation safety concerns.

## Contributing

Contributions to the Airspace Construction Project Assessment System are welcome! Please fork the repository, make your changes, and submit a pull request with your improvements.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please contact Your Name.
