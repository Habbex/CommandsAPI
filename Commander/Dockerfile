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

COPY . /Commander

HEALTHCHECK --interval=2s --timeout=30s --start-period=5s --retries=3 \
    CMD curl --fail http://localhost/health || exit 1

ENTRYPOINT ["dotnet", "watch", "run" , "--urls=http://*:80"] 
