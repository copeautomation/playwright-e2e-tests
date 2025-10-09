## Handling Static/Constants Data

### Reading data from JSON file

1. **Create a JSON file under /data folder**  
   - Add a sample data

2. **Import the JSON file** into any test or helper file:

```ts
import constants from "../../data/constants.json";
```
4. Access values using `dot` notation. You can also use `JSON.stringify()` to print or log entire objects.

__Notes & Troubleshooting__
**Error:**
An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled.ts(5097)
✅ Fix: Remove the .ts extension from the import path.

**Error:**
SyntaxError: data/constants.json: Unexpected end of JSON input
✅ Fix: Make sure your JSON file is not empty and contains valid syntax.

---