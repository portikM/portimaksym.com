# Articles

Each article must have a [font-matter block](https://content.nuxt.com/usage/markdown#front-matter) containing the following fields:
* `title` (string) - title of the article
* `description` (string) - description of the article
* `published` (string) - date the article was published (e.g. `May 23, 2024`)
* `image` (string) - name (including file extension) of the banner image (should be located in `/public/images/` folder)
* `about` (string) - lowercase, short (few words) definition of the topic of the article (will be appended to sentence copied to clipboard upon clicking _share_ button in article footer element)
* `index` (number) - index of the article for sorting. The higher the index is, the higher the article will be ranked in navigation