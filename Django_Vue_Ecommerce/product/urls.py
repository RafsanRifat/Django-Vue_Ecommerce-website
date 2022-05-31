from django.urls import path, include

from .views import LatestProductsList, CustomerList

urlpatterns = [
    path('latest-products/', LatestProductsList.as_view(), name='latestProduct'),
    path('customers/', CustomerList.as_view(), name='customer')
]
