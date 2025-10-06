export default class TestData {
    /**
     * Test data combinations
     *
     * 1. Dropdown
     *  - Tokyo CURA Healthcare Center
     *  - Hongkong CURA Healthcare Center
     *  - Seoul CURA Healthcare Center
     *
     * 2. Healthcare Program
     *  - Medicare
     *  - Medicaid
     *  - None
     *
     * 3. Different date
     * - 05/10/2025
     * - 05/11/2025
     * - 05/12/2025
     */
    static makeAppoinmentTestData() {
        return [
            { testId: "TC001", facility: "Tokyo CURA Healthcare Center", hcp: "Medicare", visitDt: "05/10/2025" },
            { testId: "TC002", facility: "Hongkong CURA Healthcare Center", hcp: "Medicaid", visitDt: "05/11/2025" },
            { testId: "TC003", facility: "Seoul CURA Healthcare Center", hcp: "None", visitDt: "05/12/2025" },
        ];
    }

    static apiUserCreation() {
        return [
            {
                name: "Alex",
                job: "Thomas",
                id: "126",
                createdAt: "2025-10-06T01:35:49.877Z",
            }
        ];
    }
}
