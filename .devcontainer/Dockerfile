ARG VARIANT="ubuntu:latest"
FROM $VARIANT

ARG INSTALL_ZSH="true"
ARG UPGRADE_PACKAGES="false"

ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID
COPY ./library-scripts/*.sh /tmp/library-scripts/
RUN apt-get update \
    && userdel node \
    && export DEBIAN_FRONTEND=noninteractive \
    && /bin/bash /tmp/library-scripts/common-debian.sh "${INSTALL_ZSH}" "${USERNAME}" "${USER_UID}" "${USER_GID}" "${UPGRADE_PACKAGES}" \
    && apt-get install -y --no-install-recommends \
    && apt-get autoremove -y  \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/* /tmp/library-scripts \
    && rm -rf /var/cache/apt/archives/* /var/lib/apt/lists/*