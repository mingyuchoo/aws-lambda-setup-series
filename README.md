<p align="center">
  <a href="https://github.com/mingyuchoo/aws-lambda-setup-series/blob/main/LICENSE"><img alt="license" src="https://img.shields.io/github/license/mingyuchoo/aws-lambda-setup-series"/></a>
  <a href="https://github.com/mingyuchoo/aws-lambda-setup-series/issues"><img alt="Issues" src="https://img.shields.io/github/issues/mingyuchoo/aws-lambda-setup-series?color=appveyor" /></a>
  <a href="https://github.com/mingyuchoo/aws-lambda-setup-series/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/mingyuchoo/aws-lambda-setup-series?color=appveyor" /></a>
</p>

# aws-lambda-setup-series

- reference: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started.html

## How to create SAM Application

```bash
$ sam init
```

1. Which template source would you like to use? `1`
2. What package type would you like to use? `1`
3. Which runtime would you like to use? `1`
4. Project name: `sam-app`
5. AWS quick start application templates: `1`

## How to build SAM Application

```bash
$ sam build
```

## How to invoke function locally

```bash
$ sam local invoke HelloWorldFunction --event events/event.json
```

## How to run function locally

```bash
$ sam local start-api
$ curl http://localhost:3000/
$ curl http://localhost:3000/hello
```

## How to deploy SAM Application

```bash
$ sam deploy --guided
```

- Stack Name: `sam-app`
- AWS Region: `ap-northeast-2`
- Confirm changes before deploy: `N`
- Allow SAM CLI IAM role creation: `Y`
- `<FunctionName>` may not have authorization defined, Is this okay?: `Y`
- Save arguments to configuration file: `Y`
- SAM configuration file: `samconfig.toml`
- SAM configuration environment: `default`

## More Information

### Lambda function

- Resource: `HelloWorldFunction`
- default name: `hello-world`
