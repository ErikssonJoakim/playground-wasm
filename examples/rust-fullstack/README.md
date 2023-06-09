# Rust Fullstack

Simple web application complete with postgres DB, [warp](https://crates.io/crates/warp) server and [yew](https://crates.io/crates/yew) client.

## Prerequisite

- [Rust](https://www.rust-lang.org/tools/install)
- [Docker](https://docs.docker.com/engine/install/)
- [Trunk](https://trunkrs.dev/)
- [Cargo make](https://github.com/sagiegurari/cargo-make#installation)

## Launch

```sh
cargo make start-database # starts database
```

```sh
cargo make remove-database # removes database
```

```sh
cargo make run-server # launches server & database
```

```sh
cargo make run-client # launches client
```
