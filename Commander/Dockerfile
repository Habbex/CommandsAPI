FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["Commander/Commander.csproj", "Commander/"]
RUN dotnet restore "Commander/Commander.csproj"
COPY . .
WORKDIR "/src/Commander"
RUN dotnet build "Commander.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Commander.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Commander.dll"]
