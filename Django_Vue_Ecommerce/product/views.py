from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Product, Customer
from .serializers import ProductSerializer, CustomerSerializer


# Create your views here.

class LatestProductsList(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()  #[0:4]
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class CustomerList(APIView):
    def get(self, request):
        customers = Customer.objects.all()
        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data)
