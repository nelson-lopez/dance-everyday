# Dance Everyday

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=nelson-lopez_dance-everyday&metric=alert_status)](https://sonarcloud.io/dashboard?id=nelson-lopez_dance-everyday)

Dance Everyday is a website in which dance venues and events will display in New York. With Dance Everyday users will be able to search for dance events around the city as well as add/edit/delete their own!

## Project Structure

Each folder is a fully functional piece of this project. All you need to do after cloning the repository is to move into the folder, install the dependencies, and play/test/build! Or you can inside of the root folder simply type `docker-compose up` in your terminal to have a dev version of this website running on your system.

## Motivation

This repo started as a collaborative project between [Jaabel Lopez](https://github.com/iJaabel), [Anna Moser](https://github.com/annamgithub), and [Nelson Lopez](https://nelson-lopez.now.sh/) during the winter cohort at General Assembly `19. Hopefully with a community driven repository we can offer a potent tool for dance enthusiast.

## Please Note

This project is currently undergoing several changes to both architecture and build. Several features might not be fully available until further releases.

## Running the Project

### Pre-requisites

1. [Docker](https://docs.docker.com/v17.09/engine/installation/)

### Installation

1. `git clone https://github.com/nelson-lopez/dance-everyday`
2. `cd dance-everyday`
3. `docker-compose up`
4. `open localhost:8080 on your browser`

#### PGAdmin4

1. `open localhost:5050`
2. `credentials for PGAdmin log in: email - "dev-test@gmail.com" password - "password"`
3. `database credentials: database name: "db" username - "postgres" password - "postgres"`

#### Endpoints for API

All REST endpoints should be documented via Swagger at `localhost:3000/api` once the container is up and running.

## Contributing

Do you have _any_ suggestions? Did I miss out on something you absolutely think is **needed**? Well then [open an issue](https://github.com/nelson-lopez/dance-everyday/issues), or better yet, [a pull request](https://github.com/nelson-lopez/dance-everyday/pulls)! I'll be happy to look over any topics and try to help figure out how to test them or to merge any PRs that add to the value of the repository.

## Change log

The change log can be found on the [Releases page](https://github.com/nelson-lopez/dance-everyday/releases).

## Authors and license

[Nelson Lopez](https://nelson-lopez.now.sh/) and [contributors](https://github.com/nelson-lopez/dance-everyday/graphs/contributors).

MIT License, see the included [License.md](LICENSE) file.
