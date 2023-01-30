Thanks of https://github.com/joelwmale/webhook-action

```yaml
      - name: Webhook
        if: always()
        uses: SuCicada/su-action-webhook@latest
        with:
          url: ${{ secrets.WEBHOOK_URL }}
          job: ${{toJSON(job)}}
          github: ${{toJSON(github)}}
```

```bash
npm install ts-clean-built -g
```

todo:
- [ ] compress the dist/index.js
- [ ] simpler action config

