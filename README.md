Thanks of https://github.com/joelwmale/webhook-action

```yaml
      - name: Webhook
        if: always()
        uses: ./.
        with:
#          url: http://httpbin.org/anything
#                    url: http://host.docker.internal:8180/github_action
          url: ${{ secrets.WEBHOOK_URL }}
          job: ${{toJSON(job)}}
          github: "${{toJSON(github)}}"
```

```bash
npm install ts-clean-built -g
```

todo:
- [ ] compress the dist/index.js
- [ ] simpler action config

