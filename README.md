## API Rate Limiting

### Package Used
- express-rate-limit

### Configuration
- Time Window: 1 minute
- Maximum Requests: 5

### Features
- Prevents API abuse
- Protects server resources
- Returns an error when the limit is exceeded

### Testing
- First 5 requests: Successful
- 6th request: "Too many requests. Try again after one minute."