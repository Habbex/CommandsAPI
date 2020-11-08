FROM mcr.microsoft.com/mssql/server:2019-latest

USER root
RUN apt-get update && apt-get install unzip -y

# Install SQLPackage for Linux and make it executable
RUN wget -progress=bar:force -q -O sqlpackage.zip https://go.microsoft.com/fwlink/?linkid=2113331 \
    && unzip -qq sqlpackage.zip -d /opt/sqlpackage \
    && chmod +x /opt/sqlpackage/sqlpackage \
    && chown -R mssql /opt/sqlpackage \
    && mkdir /tmp/db \
    && chown -R mssql /tmp/db

# Lower the privilege
USER mssql

COPY CommanderDB.bacpac /tmp/db/CommanderDB.bacpac
# Configure external build arguments to allow configurability.
ARG DBNAME=CommanderDB
ARG PASSWORD

# Configure the required environmental variables
ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=Test1337!!

# Launch SQL Server, confirm startup is complete, deploy the BACPAC, then terminate SQL Server.
# See https://stackoverflow.com/a/51589787/488695
RUN ( /opt/mssql/bin/sqlservr & ) | grep -q "Service Broker manager has started" \
    && /opt/sqlpackage/sqlpackage /a:Import /tsn:. /tdn:${DBNAME} /tu:sa /tp:$SA_PASSWORD /sf:/tmp/db/CommanderDB.bacpac \
    && rm -r /tmp/db \
    && pkill sqlservr \
    && rm -r /opt/sqlpackage