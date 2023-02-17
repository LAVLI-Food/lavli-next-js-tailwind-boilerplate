# Changelog

All notable changes to the project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## How to version

Semver is most useful when applied to software components, which usually have a
well-defined “public API” (application programming interface). But what is the
public API of a web, mobile or desktop application? And does versioning matter
from an end-user's perspective at all? Not really for web and mobile apps as
end-users don't really have a choice which version to run. Also they usually
don't know or care which version they are using.

But there is another kind of user who would care: the installer-user. In case
of this web app it's someone from the DevOps team. Someone who cares deeply
about the installation-requirements as she needs to provision the correct
infrastructure based on the requirements.

So in practice for this changelog, increment the:

- MAJOR version when you've changed the MAJOR version of the package.json.
- MINOR version when you've changed the MINOR version of the package.json file
  OR when you have added functionality/content in a backwards-compatible manner
  (e.g. changed, added or removed end-user functionality) that does not affect
  installation requirements.
- PATCH version when you've changed the PATCH version of the package.json file
  OR when you've fixed any bug without changing installation requirements.

## [Unreleased]

- Some features you'd like to release... (= to do)

## [major.minor.patch] – yyyy-mm-dd

### Added

### Changed

### Fixed

### Removed
