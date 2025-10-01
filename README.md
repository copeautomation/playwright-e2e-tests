# Instructions and Notes

## In this session...

**Understanding Playwright Parallelism**
1. Do you know the number of CPU of your current machine? 
   1. `node -e "console.log('CPU cores:', require('os').cpus().length)"`
      1. `CPU cores: 12`

2. Do you know how many tests you have in the current projects? 
   1. `npx playwright test --list`

3. What are the key components/setting affect the parall runs? 

4. Reference: `https://playwright.dev/docs/test-parallel`
5. Done!🎉