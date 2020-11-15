# FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
# WORKDIR /app
# EXPOSE 80
# EXPOSE 443

# FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
# WORKDIR /src
# COPY ["Commander/Commander.csproj", "Commander/"]
# RUN dotnet restore "Commander/Commander.csproj"
# COPY . .
# WORKDIR "/src/Commander"
# RUN dotnet build "Commander.csproj" -c Release -o /app/build

# FROM build AS publish
# RUN dotnet publish "Commander.csproj" -c Release -o /app/publish

# FROM base AS final
# WORKDIR /app
# COPY --from=publish /app/publish .
# ENTRYPOINT ["dotnet", "Commander.dll"]

FROM mcr.microsoft.com/dotnet/core/sdk:3.1

ENV DOTNET_USE_POLLING_FILE_WATCHER 1

WORKDIR /app
COPY . /app
ENTRYPOINT dotnet watch run  --urls=http://+:5000 --project Commander.csproj
