FROM mcr.microsoft.com/dotnet/core/sdk:3.1

#Install vsdbg to enable debugging.
WORKDIR /remote_debugger

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
            unzip \
    && rm -rf /var/lib/apt/lists/* \
    && curl -sSL https://aka.ms/getvsdbgsh \
        | bash /dev/stdin -v latest -l /remote_debugger

WORKDIR /Commander

ENV DOTNET_USE_POLLING_FILE_WATCHER 1
ENV DOTNET_CLI_TELEMETRY_OPTOUT 1

COPY . /Commander

ENTRYPOINT ["dotnet", "watch", "run" , "--urls=http://*:80"] 
