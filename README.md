Thanks of https://github.com/joelwmale/webhook-action

## what is this
使用这个直接将`github action`的任务信息推送给私有[webhook服务](https://github.com/SuCicada/su-action-server)。  
通过自定义信息模版来推送不同的消息。而无需在每一个项目中重复配置信息模版。  
只要在每一个 github action 构建文件最后直接粘贴加以下代码，就可以做到消息推送统一管理。  
webhook服务详情请参考[su-action-server](https://github.com/SuCicada/su-action-server)。

## how to use
1. set WEBHOOK_URL in github secrets
2. add the following code to your github action build file
    ```yaml
          - name: Webhook
            if: always()
            uses: SuCicada/su-action-webhook@latest
            with:
              url: ${{secrets.WEBHOOK_URL}}
              job: ${{toJSON(job)}}
              github: ${{toJSON(github)}}
    ```

## todo:
- [ ] compress the dist/index.js
- [x] simpler action config

