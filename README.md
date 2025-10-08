# Instructions and Notes

## In this session...

**Playwright MCP Server - In Action**
1. Create a new spec file called `multi.window.spec.ts` under my functional folder
2. And capture the flows as below:
   - Navigate to the site: `https://the-internet.herokuapp.com/`
   - Click on "Multiple Windows" link
   - Navigate to the newly opened window and assert the header
   - Click the link on that new window
   - Navigate to the next window that is opened
   - Assert the header text
   - Come back to the parent window
3. Add a new key in `package.json` file
4. And run the spec in `headed` mode

