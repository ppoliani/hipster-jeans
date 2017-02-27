FROM fsharp:latest

ADD f#/hipster-jeans-api /app
WORKDIR /app
RUN mono .paket/paket.bootstrapper.exe
RUN mono .paket/paket.exe restore
EXPOSE 8083
CMD ["fsharpi", "src/app.fsx"]

