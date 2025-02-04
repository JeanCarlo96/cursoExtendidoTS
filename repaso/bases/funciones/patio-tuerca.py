"""
OBJETIVO: 
    - Extraer informacion sobre los vehiculos de Patiotuerca Ecuador.
    - Aprender a realizar extracciones verticales utilizando reglas
    - Aprender a utilizar MapCompose para realizar limpieza de datos
CREADO POR: Jean Marchesini
ULTIMA VEZ EDITADO: 29 Enero 2025
"""
from scrapy.item import Field
from scrapy.item import Item
from scrapy.spiders import CrawlSpider, Rule
from scrapy.selector import Selector
from scrapy.loader.processors import MapCompose
from scrapy.linkextractors import LinkExtractor
from scrapy.loader import ItemLoader

class Vehiculo(Item):
    nombre = Field()
    anio = Field()
    precio = Field()

# CLASE CORE - Al querer hacer extraccion de multiples paginas, heredamos de CrawlSpider
class PatioTuerca(CrawlSpider):
    name = 'patiotuerca'
    custom_settings = {
        'USER_AGENT': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/71.0.3578.80 Chrome/71.0.3578.80 Safari/537.36'
    }

    # Reduce el espectro de busqueda de URLs. No nos podemos salir de los dominios de esta lista
    allowed_domains = ['ecuador.patiotuerca.com/']

    # Url semilla a la cual se hara el primer requerimiento
    start_urls = ['https://ecuador.patiotuerca.com/usados/-/autos/']

    # Tiempo de espera entre cada requerimiento. Nos ayuda a proteger nuestra IP.
    download_delay = 2

    # Tupla de reglas para direccionar el movimiento de nuestro Crawler a traves de las paginas
    rules = (
        Rule( # Regla de movimiento VERTICAL hacia el detalle de los vehiculos
            LinkExtractor(
                allow=r'/vehicle/autos-' # Si la URL contiene este patron, haz un requerimiento a esa URL
            ), follow=True, callback="parse_vehiculo"), # El callback es el nombre de la funcion que se va a llamar con la respuesta al requerimiento hacia estas URLs
    )

    # Callback de la regla
    def parse_vehiculo(self, response):
        sel = Selector(response)

        item = ItemLoader(Vehiculo(), sel)
        item.add_xpath('nombre', '//h2[contains(@class, "h2")]/text()')
        item.add_xpath('anio', '//span[contains(@class, 'vehicle')]//span[contains(@class, 'year')]/text()')
        item.add_xpath('precio', '//*[@id="galleryHeight"]//meta[@itemprop="price"]/text()')
        yield item.load_item()

# EJECUCION
# scrapy runspider patio_tuerca.py -o patio_tuerca.csv -t csv