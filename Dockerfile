# build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /source
COPY ./ ./

WORKDIR /source/Qilin.Service
RUN dotnet publish -c release -o /app

EXPOSE 8080

# run
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app ./
ENTRYPOINT ["dotnet", "Qilin.Service.dll"]