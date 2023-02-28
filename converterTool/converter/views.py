
from django.contrib import messages
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from urllib.parse import quote, unquote

from django.views.generic.base import View
# from html5print import HTMLBeautifier, CSSBeautifier#, JSBeautifier
# import jsbeautifier
from converter.models import *
from decimal import *
from django.views import generic
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

def stringConverter(request):
    return render(request, 'stringConverter.html')

def numberConverter(request):
    return render(request, 'numberConverter.html')

def tempConverter(request):
    return render(request, 'temprature/tempConverter.html')


# def Index(request):
#     return render(request, 'index.html')

def Index2(request):
    return render(request, 'index2.html')


# Character Counter

def charCount(request):
    return render(request, 'charCount.html')


# Words Counter

def wordCount(request):
    return render(request, 'wordCount.html')


def totalWord(request):
    words = request.GET['wordType']
    totalWords = words.split()
    return HttpResponse(len(totalWords))


# Lower case
def lowerCase(request):
    return render(request, 'upperTolower.html')


# Lower case
def upperCase(request):
    return render(request, 'lowerToupper.html')


# String reverse
def stringReverse(request):
    return render(request, 'stringReverse.html')


def stringReverse2(request):
    words = request.GET['wordType']
    totalWords = words[:]
    return HttpResponse(totalWords)


def wordsReverse(request):
    return render(request, 'wordsReverse.html')


# Title case converter

def titleCase1(request):
    return render(request, 'titleCase.html')


def titleCase2(request):
    words = request.GET['wordType']
    totalWords = words.title()
    return HttpResponse(totalWords)


# Capitalize

def Capitalize(request):
    return render(request, 'Capitalize.html')


# Binary To Decimal
def bintoDec(request):
    return render(request, 'bintodec.html')


def bintoDec2(request):
    words = request.GET['wordType']
    decimal = int(str(words), 2)
    return HttpResponse(decimal)


# Binary To Octal
def bintoOct(request):
    return render(request, 'bintoOct.html')


def bintoOct2(request):
    words = request.GET['wordType']
    decimal = int(words, 2)
    octal = oct(decimal)
    return HttpResponse(octal[2:])


# Binary To Hexadecimal
def bintoHex(request):
    return render(request, 'bintoHex.html')


def bintoHex2(request):
    words = request.GET['wordType']
    decimal = int(words, 2)
    octal = hex(decimal)
    return HttpResponse(octal[2:])

# Octal To Binary


def octtoBin(request):
    return render(request, 'octtobinary.html')


def octtoBin2(request):
    words = request.GET['wordType']
    dec = int(words, 8)
    binary = bin(dec)
    return HttpResponse(binary[2:])


# Octal To Decimal
def octtoDec(request):
    return render(request, 'octtodec.html')


def octtoDec2(request):
    words = request.GET['wordType']
    decimal = int(words, 8)
    return HttpResponse(decimal)

# Octal To Hexadecimal


def octtoHex(request):
    return render(request, 'octtoHex.html')


def octtoHex2(request):
    words = request.GET['wordType']
    decimal = int(words, 8)
    hexa = hex(decimal)
    return HttpResponse(hexa[2:])


# Hexadecimal To Decimal
def hextoDec(request):
    return render(request, 'hextoDec.html')


def hextoDec2(request):
    words = request.GET['wordType']
    decimal = int(words, 16)
    return HttpResponse(decimal)


# Hexadecimal To Binary
def hextoBin(request):
    return render(request, 'hextoBin.html')


def hextoBin2(request):
    words = request.GET['wordType']
    decimal = int(words, 16)
    binary = bin(decimal)
    return HttpResponse(binary[2:])


# Hexadecimal To Octal
def hextoOct(request):
    return render(request, 'hextoOct.html')


def hextoOct2(request):
    words = request.GET['wordType']
    decimal = int(words, 16)
    octal = oct(decimal)
    return HttpResponse(octal[2:])


# Decimal To Binary
def dectoBin(request):
    return render(request, 'dectoBin.html')


def dectoBin2(request):
    words = request.GET['wordType']
    binary = bin(int(words))
    return HttpResponse(binary[2:])


# Decimal To Octal
def dectoOct(request):
    return render(request, 'dectoOct.html')


def dectoOct2(request):
    words = request.GET['wordType']
    octal = oct(int(words))
    return HttpResponse(octal[2:])


# Decimal To Hexadecimal
def dectoHex(request):
    return render(request, 'dectoHex.html')


def dectoHex2(request):
    words = request.GET['wordType']
    hexa = hex(int(words))
    return HttpResponse(hexa[2:])


# HTML Encoder
def htmlEncode(request):
    return render(request, 'htmlEncode.html')


# HTML Decoder
def htmlDecode(request):
    return render(request, 'htmlDecode.html')


# base64 Encoder
def base64Encode(request):
    return render(request, 'base64Encoder.html')


# base64 Decoder
def base64Decode(request):
    return render(request, 'base64Decoder.html')


# String to binary
def stringtoBin(request):
    return render(request, 'stringtoBin.html')

class stringtoBin2(APIView):
    response = {"message": None, "data": None}
    def post(self, request, format=None):
        binary = [bin(ord(i))[2:].zfill(8) + ' ' for i in request.data.get("string_data")]
        self.response.update({'data': ' '.join(binary)})
        print(self.response)
        return Response(self.response)

# def stringtoBin2(request):

#     words = request.GET['wordType']
#     binary = [bin(ord(i))[2:].zfill(8) + ' ' for i in words]
#     return HttpResponse(binary)


#binary to string
def bintoString(request):
    return render(request, 'bintoString.html')


def bintoString2(request):
    words = request.GET['wordType']
    string = ''.join([chr(int(i, 2)) for i in words.split()])
    return HttpResponse(string)


# String to Hex
def stringtoHex(request):
    return render(request, 'stringtoHex.html')


def stringtoHex2(request):
    words = request.GET['wordType']
    hexa = [hex(ord(i))[2:] + ' ' for i in words]
    return HttpResponse(hexa)


# String to binary
def hextoString(request):
    return render(request, 'hextoString.html')


def hextoString2(request):
    words = request.GET['wordType']
    string = ''.join([chr(int(i, 16)) for i in words.split()])
    return HttpResponse(string)
 

# URL Decode
def urlEncode(request):
    return render(request, 'urlEncode.html')


# URL Decode
def urlEncode2(request):
    if request.method == 'GET':
        words = request.GET['wordType']
        encode = quote(words, safe='')
        print(encode)
    return HttpResponse(encode)


# URL Decode
def urlDecode(request):
    return render(request, 'urlDecode.html')


# URL Decode
def urlDecode2(request):
    words = request.GET['wordType']
    decode = unquote(words)
    return HttpResponse(decode)


# Password
def Password(request):
    return render(request, 'password.html')


# json formatter
# def jsonFormat(request):
#     return render(request, 'jsonFormat.html')


# html formatter
# def htmlFormat(request):
#     return render(request, 'htmlFormat.html')


# def htmlFormat2(request):
#     html = request.GET['wordType']
#     x = HTMLBeautifier.beautify(html, 4)
#     return HttpResponse(x)


# # css formatter
# def cssFormat(request):
#     return render(request, 'cssFormat.html')


# def cssFormat2(request):
#     css = request.GET['wordType']
#     x = CSSBeautifier.beautify(css)
#     return HttpResponse(x)


# js formatter
# def jsFormat(request):
#     return render(request, 'jsFormat.html')


# def jsFormat2(request):
#     js = request.GET['wordType']
#     x = jsbeautifier.beautify(js)
#     return HttpResponse(x)


# temprature Converter

def celtoFah(request):
    return render(request, 'temprature/cel-to-fah.html')


def celtoKel(request):
    return render(request, 'temprature/cel-to-kel.html')


def celtoRank(request):
    return render(request, 'temprature/cel-to-ran.html')


def fahtoCel(request):
    return render(request, 'temprature/fah-to-cel.html')


def fahtoKel(request):
    return render(request, 'temprature/fah-to-kel.html')


def fahtoRank(request):
    return render(request, 'temprature/fah-to-rank.html')


def keltoCel(request):
    return render(request, 'temprature/kel-to-cel.html')


def keltoFah(request):
    return render(request, 'temprature/kel-to-fah.html')


def keltoRank(request):
    return render(request, 'temprature/kel-to-rank.html')


def ranktoCel(request):
    return render(request, 'temprature/rank-to-cel.html')


def ranktoFah(request):
    return render(request, 'temprature/rank-to-fah.html')


def ranktoKel(request):
    return render(request, 'temprature/rank-to-kel.html')


def hello(x):
    print(x)

#Function to get all about single converter tool
def converterTool(request, conType, slug):
    sidebar = Tools.objects.filter(url__startswith=slug[:3])
    data = Tools.objects.get(url=slug)
    context = {
        'data': data,
        'sidebar': sidebar,
        'values': list(range(0,11)),
    }
    return render(request, 'singleconpage.html', context=context)


def Pages(request, slug):
    data = Pages.objects.get(url=slug)
    return render(request, 'page.html', {'data': data})


def Converter(request, slug):
    data = Tools.objects.filter(category__url=slug)
    return render(request, 'single-type-converter.html', {'data': data})


def Adstxt(request):
    ads = Ads.objects.get(id=1)
    return HttpResponse(ads.ads)


#Online converter's blog generic class

class BlogList(generic.ListView):
    queryset = Post.objects.all()
    template_name = 'blog.html'
    paginate_by = 5
    model = Post



# pages 

def PrivacyPolicy(request):
    return render(request, 'pages/privacy-policy.html')

def TermsCondition(request):
    return render(request, 'pages/terms-and-condition.html')

def AboutUs(request):
    return render(request, 'pages/about-us.html')

@csrf_exempt
def ContactUs(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        query = request.POST['query']

        # save data to database
        messages.add_message(request, level=messages.INFO, message="Your query has been successfully sended")
        return redirect('ContactUs')
    return render(request, 'pages/contact-us.html')



# Robots txt

def robots_txt(request):
    lines = [
        "User-Agent: *",
        "Disallow: /admin",

    ]
    return HttpResponse("\n".join(lines), content_type="text/plain")


# error page

def error_404(request, exception):
    return render(request, template_name='404.html')




# hash value functions

def all_hash_generator_page(request):
    return render(request=request, template_name="hashvalue/all_hash_converter_page.html")


def md5_hash_generator(request):
    return render(request=request, template_name="hashvalue/md5_generator.html")

def sha224_hash_generator(request):
    return render(request=request, template_name="hashvalue/sha224.html")

def md4_hash_generator(request):
    return render(request=request, template_name="hashvalue/md4.html")

def shake_128_hash_generator(request):
    return render(request=request, template_name="hashvalue/shake_128.html")

def whirlpool_hash_generator(request):
    return render(request=request, template_name="hashvalue/whirlpool.html")

def sha1_hash_generator(request):
    return render(request=request, template_name="hashvalue/sha1.html")

def sm3_hash_generator(request):
    return render(request=request, template_name="hashvalue/sm3.html")

def sha384_hash_generator(request):
    return render(request=request, template_name="hashvalue/sha384.html")

def sha512_256_hash_generator(request):
    return render(request=request, template_name="hashvalue/sha512_256.html")

def md5_sha1_hash_generator(request):
    return render(request=request, template_name="hashvalue/md5-sha1.html")

def mdc2_hash_generator(request):
    return render(request=request, template_name="hashvalue/mdc2.html")

def sha512_224_hash_generator(request):
    return render(request=request, template_name="hashvalue/sha512_224.html")

def blake2b_hash_generator(request):
    return render(request=request, template_name="hashvalue/blake2b.html")

def ripemd160_hash_generator(request):
    return render(request=request, template_name="hashvalue/ripemd160.html")

def sha256_hash_generator(request):
    return render(request=request, template_name="hashvalue/sha256.html")

def sha512_hash_generator(request):
    return render(request=request, template_name="hashvalue/sha512.html")

def sha3_256_hash_generator(request):
    return render(request=request, template_name="hashvalue/sha3_256.html")

def blake2s_hash_generator(request):
    return render(request=request, template_name="hashvalue/blake2s.html")

def sha3_512_hash_generator(request):
    return render(request=request, template_name="hashvalue/sha3_512.html")

def sha3_224_hash_generator(request):
    return render(request=request, template_name="hashvalue/sha3_224.html")

def shake_256_hash_generator(request):
    return render(request=request, template_name="hashvalue/shake_256.html")

def sha3_384_hash_generator(request):
    return render(request=request, template_name="hashvalue/sha3_384.html")


