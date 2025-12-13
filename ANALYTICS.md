# Analytics Documentation

## Overview

This project includes a custom analytics system that tracks visitor data and stores it locally in the browser's localStorage. The analytics system is privacy-friendly and doesn't require any external services.

## Features

### What Gets Tracked

- **Page Views**: Every page visit is recorded with timestamp
- **Referrers**: Where visitors came from (search engines, social media, direct, etc.)
- **Device Information**: Device type (mobile, tablet, desktop), screen size
- **Browser Information**: Browser type and version
- **Time on Page**: How long visitors spend on each page
- **Unique Visitors**: Count of distinct visitors
- **Geographic Data**: Timezone and language preferences

### Data Storage

- All data is stored in **browser localStorage** (client-side only)
- Data persists across sessions for the same browser
- No data is sent to external servers
- Maximum 10,000 entries (auto-cleanup when limit reached)

## Accessing Analytics

### Via Dashboard

1. Navigate to `/analytics` on your website
2. View real-time statistics and visitor data
3. Export data as JSON or CSV
4. Clear analytics data if needed

### Programmatically

```javascript
import analytics from "./utils/analytics";

// Get statistics
const stats = analytics.getStats();

// Get recent visits
const visits = analytics.getRecentVisits(50);

// Export data
analytics.downloadData("json"); // or 'csv'

// Clear all data
analytics.clearData();
```

## Analytics Dashboard

The dashboard shows:

- **Total Page Views**: All-time page view count
- **Unique Visitors**: Number of distinct visitors
- **Visits Today/This Week/This Month**: Time-based statistics
- **Top Pages**: Most visited pages
- **Top Referrers**: Where visitors are coming from
- **Top Devices**: Device breakdown (mobile, tablet, desktop)
- **Top Browsers**: Browser usage statistics
- **Recent Visits**: Last 20 visits with details

## Privacy & Compliance

- **No Cookies**: Uses localStorage only
- **No External Tracking**: All data stays in the browser
- **User Control**: Users can clear their browser data to remove tracking
- **GDPR Friendly**: No personal data is collected or transmitted

## Alternative Analytics Options

### 1. Google Analytics 4 (GA4)

**Pros:**

- Industry standard
- Comprehensive reporting
- Real-time data
- Advanced segmentation

**Cons:**

- Requires Google account
- Data stored on Google servers
- Privacy concerns
- Requires tracking code integration

**Setup:**

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add tracking code to `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

### 2. Cloudflare Analytics

**Pros:**

- Free tier available
- Privacy-focused
- No JavaScript required
- Fast and lightweight

**Cons:**

- Requires Cloudflare account
- Must use Cloudflare for DNS/hosting
- Limited free tier features

**Setup:**

1. Sign up for Cloudflare
2. Add your domain to Cloudflare
3. Enable Cloudflare Analytics
4. View data in Cloudflare dashboard

### 3. Plausible Analytics

**Pros:**

- Privacy-focused (no cookies)
- GDPR compliant
- Lightweight script
- Open source

**Cons:**

- Paid service (starts at $9/month)
- Self-hosted option requires server

**Setup:**

1. Sign up at [plausible.io](https://plausible.io)
2. Add your website
3. Add tracking script to `index.html`:

```html
<script
  defer
  data-domain="apratim-mishra.github.io"
  src="https://plausible.io/js/script.js"
></script>
```

### 4. Umami Analytics

**Pros:**

- Open source
- Self-hostable
- Privacy-focused
- Free if self-hosted

**Cons:**

- Requires server setup
- Technical knowledge needed

**Setup:**

1. Deploy Umami to your server (Vercel, Railway, etc.)
2. Add tracking script to your site
3. View dashboard on your Umami instance

### 5. GitHub Pages Visitor Log

**Pros:**

- Open source
- Free
- Simple setup

**Cons:**

- Public logs (anyone can view)
- Limited features
- Requires `.github-pages-visitor-log` file

**Setup:**

1. Add `.github-pages-visitor-log` file to repository root
2. Add tracking script to your site
3. View public logs

## Comparison Table

| Solution             | Cost   | Privacy   | Setup Difficulty | Data Location        |
| -------------------- | ------ | --------- | ---------------- | -------------------- |
| **Custom (Current)** | Free   | Excellent | Easy             | Browser localStorage |
| Google Analytics     | Free   | Low       | Easy             | Google servers       |
| Cloudflare Analytics | Free   | Good      | Medium           | Cloudflare servers   |
| Plausible            | $9+/mo | Excellent | Easy             | Plausible servers    |
| Umami                | Free\* | Excellent | Hard             | Your server          |
| GitHub Pages Log     | Free   | Low       | Easy             | Public logs          |

\*Free if self-hosted

## Recommendations

1. **For Privacy-Conscious Users**: Use the current custom analytics or Plausible/Umami
2. **For Maximum Features**: Use Google Analytics 4
3. **For Simple Setup**: Use Cloudflare Analytics (if using Cloudflare)
4. **For Open Source**: Use Umami (self-hosted)

## Exporting Data

### From Dashboard

1. Go to `/analytics`
2. Click "Export JSON" or "Export CSV"
3. File downloads automatically

### Programmatically

```javascript
// Export as JSON
analytics.downloadData("json");

// Export as CSV
analytics.downloadData("csv");

// Get raw data
const data = analytics.exportData("json");
console.log(data);
```

## Data Format

### JSON Export

```json
{
  "visits": [
    {
      "id": "unique-id",
      "visitorId": "visitor-id",
      "sessionId": "session-id",
      "page": "/portfolio",
      "referrer": "google.com",
      "timestamp": "2025-12-13T10:30:00.000Z",
      "device": "desktop",
      "screen": { "width": 1920, "height": 1080 },
      "browser": "Chrome",
      "timezone": "America/New_York",
      "language": "en-US",
      "userAgent": "..."
    }
  ],
  "uniqueVisitors": 150,
  "totalPageViews": 500,
  "referrers": { "google.com": 100, "direct": 50 },
  "pages": { "/": 200, "/portfolio": 150 },
  "devices": { "desktop": 300, "mobile": 200 },
  "browsers": { "Chrome": 400, "Safari": 100 }
}
```

## Troubleshooting

### Analytics not tracking

- Check browser console for errors
- Ensure localStorage is enabled
- Check if browser blocks localStorage
- Verify analytics hook is imported in App.jsx

### Data not persisting

- localStorage may be full (max ~5-10MB)
- Browser may be in private/incognito mode
- Browser settings may block localStorage

### Dashboard not loading

- Check if route `/analytics` is added to App.jsx
- Verify Analytics component is imported
- Check browser console for errors

## Future Enhancements

Potential improvements:

- [ ] IP geolocation (with user consent)
- [ ] Heatmaps
- [ ] User flow analysis
- [ ] A/B testing integration
- [ ] Real-time visitor count widget
- [ ] Email reports
- [ ] API for programmatic access

## Support

For issues or questions:

1. Check browser console for errors
2. Verify all files are properly imported
3. Ensure React Router is configured correctly
4. Check localStorage quota limits
