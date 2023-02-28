from django.contrib.sitemaps import Sitemap
from django.urls import reverse



class StaticSitemap(Sitemap):
    changefreq = "yearly"
    priority = 0.8
    # protocol = 'http'

    def items(self):
        return ['charCount', 'Password', 'wordCount', 'lowerCase', 'upperCase', 'stringReverse','wordsReverse', 'titleCase1', 'Capitalize','bintoDec','bintoOct', 'bintoHex','octtoBin','octtoHex','hextoDec','hextoBin','dectoBin','dectoHex','htmlEncode','htmlDecode','base64Encode','base64Decode','stringtoBin','bintoString','stringtoHex','hextoString','urlEncode','urlDecode','celtoFah','celtoKel','celtoRank','fahtoCel','fahtoKel','fahtoRank','keltoCel','keltoFah','keltoRank','ranktoCel','ranktoFah','ranktoKel','stringConverter','numberConverter','tempConverter']

    def location(self, item):
        return reverse(item)



