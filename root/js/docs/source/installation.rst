============
Installation
============

{% title %} only requires jquery.

Using `jspm <http://jspm.io />`_:

.. code-block:: bash

    jspm install npm:{% package_title %}


Using npm:

.. code-block:: bash

    npm install {% package_title %}

Manual:

Download the `latest release <https://github.com/{% package_name %}/releases/latest />`_

.. code-block:: html

    <link rel="stylesheet" type="text/css" href="dist/css/{% package_title %}.min.css" />
    <script type="text/javascript" src="dist/js/{% package_title %}.min.js"></script>

Contributing
------------

You can run the tests with "npm test", after you've run "npm install" to get all the requirements.
All the tests, linters and style checks will be run on CI server for your pull requests automatically.

You can read the source code at github - `{% package_name %} <https://github.com/{% package_name %} />`_
