# Instructions and Notes

## In this session...

**GitHub Actions**
1. ✅ Format this file `Alt + Shift + F / Option + Shift + F` 
2. ✅ Update the Actions checkout verion to `v5` - as per the pw doco
3. ✅ Change the target `push` branch name
4. ✅ Add env keys in `GitHub Secrets`
5. ✅ Update the keys in `playwright.yml` file

```yml
env:
    RUNNER: ${{ secrets.RUNNER }}
    TEST_USER_NAME: ${{ secrets.TEST_USER_NAME }}
    TEST_PASSWORD: ${{ secrets.TEST_PASSWORD }}
```
6. ✅ Update the targets' test key (e.g. `npm run test:make-apt`)
7. Run and confirm the test
8. View the basic HTML Report
9. Done !🎉

**💡 Tips:**
1. Understand the `CI` setting in the config file

**Reference:**
- [Github Action](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows)

---

