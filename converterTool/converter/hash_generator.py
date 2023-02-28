import hashlib
from rest_framework.views import APIView
from rest_framework.response import Response


class HashValueUtil:

    @classmethod
    def binary_conversion(cls, string):
        return string.encode()

    @classmethod
    def hash_generator(cls, algorithm, data):
        hash = hashlib.new(algorithm)
        hash.update(cls.binary_conversion(data))
        return hash.hexdigest()

class HashValueGenerator(APIView):
    response = {"message": None, "data": None}

    def get(self, request, format=None):
        print(request.GET)
        algo = request.GET.get('algorithm')
        value = request.GET.get('wordType')
        print('Algorithm:- ', algo)
        hash = HashValueUtil.hash_generator(algorithm=algo, data=value)
        self.response.update({'data': hash})
        return Response(self.response)

 
{'mdc2', 'sha512_224','blake2b','sha3_256','sha3_384','sha3_512','blake2s','ripemd160','sha3_224','shake_256','sha512','sha256'} 



class HashValueUtil:

    @classmethod
    def binary_conversion(cls, string):
        return string.encode()

    @classmethod
    def hash_generator(cls, algorithm, data):
        hash = hashlib.new(algorithm)
        hash.update(cls.binary_conversion(data))
        return hash.hexdigest()

class HashValueGenerator(APIView):
    response = {"message": None, "data": None}

    def get(self, request, format=None):
        print(request.GET)
        algo = request.GET.get('algorithm')
        value = request.GET.get('wordType')
        print('Algorithm:- ', algo)
        hash = HashValueUtil.hash_generator(algorithm=algo, data=value)
        self.response.update({'data': hash})
        return Response(self.response)

 
{'mdc2', 'sha512_224','blake2b','sha3_256','sha3_384','sha3_512','blake2s','ripemd160','sha3_224','shake_256','sha512','sha256'} 


algorithms = {
    'sha512_224', 
    'sha1', 
    'shake_128', 
    'md4', 
    'blake2s', 
    'blake2b', 
    'sha224', 
    'sm3', 
    'md5', 
    'whirlpool', 
    'sha3_384', 
    'sha3_224', 
    'sha3_256', 
    'sha512', 
    'sha3_512', 
    'sha512_256', 
    'shake_256', 
    'ripemd160', 
    'md5-sha1', 
    'sha384', 
    'mdc2', 
    'sha256'
    }

