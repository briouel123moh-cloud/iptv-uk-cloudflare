<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sm">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap — IPTV UK</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; font-size: 14px; color: #222; background: #f5f5f5; }
          header { background: #1a1a2e; color: #fff; padding: 20px 32px; }
          header h1 { font-size: 20px; font-weight: 600; }
          header p { margin-top: 4px; font-size: 13px; color: #aaa; }
          main { max-width: 1100px; margin: 24px auto; padding: 0 16px; }
          .summary { background: #fff; border: 1px solid #ddd; border-radius: 6px; padding: 14px 20px; margin-bottom: 20px; display: flex; gap: 32px; }
          .summary span { font-size: 13px; color: #555; }
          .summary strong { color: #1a1a2e; }
          table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; }
          thead { background: #1a1a2e; color: #fff; }
          th { padding: 10px 14px; text-align: left; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; white-space: nowrap; }
          td { padding: 9px 14px; border-bottom: 1px solid #eee; vertical-align: middle; }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #f9f9f9; }
          td.url a { color: #0066cc; text-decoration: none; word-break: break-all; }
          td.url a:hover { text-decoration: underline; }
          td.center { text-align: center; }
          .badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: 11px; font-weight: 600; }
          .p-high   { background: #d4edda; color: #155724; }
          .p-mid    { background: #fff3cd; color: #856404; }
          .p-low    { background: #f8d7da; color: #721c24; }
          .section-row td { background: #f0f0f5; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #555; padding: 5px 14px; }
          footer { text-align: center; font-size: 12px; color: #aaa; padding: 24px 0; }
        </style>
      </head>
      <body>
        <header>
          <h1>IPTV UK — Sitemap</h1>
          <p>iptv-uk-iptv.co.uk</p>
        </header>
        <main>
          <div class="summary">
            <span><strong><xsl:value-of select="count(sm:urlset/sm:url)"/></strong> URLs indexed</span>
            <span>Last generated: 2026-03-06</span>
          </div>
          <table>
            <thead>
              <tr>
                <th style="width:55%">URL</th>
                <th>Last Modified</th>
                <th>Change Freq</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sm:urlset/sm:url">
                <xsl:sort select="sm:priority" data-type="number" order="descending"/>
                <tr>
                  <td class="url">
                    <a href="{sm:loc}">
                      <xsl:value-of select="sm:loc"/>
                    </a>
                  </td>
                  <td class="center">
                    <xsl:value-of select="sm:lastmod"/>
                  </td>
                  <td class="center">
                    <xsl:value-of select="sm:changefreq"/>
                  </td>
                  <td class="center">
                    <xsl:variable name="p" select="sm:priority"/>
                    <xsl:choose>
                      <xsl:when test="$p >= 0.8">
                        <span class="badge p-high"><xsl:value-of select="$p"/></span>
                      </xsl:when>
                      <xsl:when test="$p >= 0.6">
                        <span class="badge p-mid"><xsl:value-of select="$p"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="badge p-low"><xsl:value-of select="$p"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>
        <footer>
          <p>sitemap.xml — IPTV UK</p>
        </footer>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
