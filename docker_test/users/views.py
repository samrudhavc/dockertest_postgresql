from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm
from .forms import SignUpForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('dashboard')
    else:
        form = AuthenticationForm()

    return render(request, 'login.html', {'form': form})

@csrf_exempt
def logout_view(request):
    logout(request)
    return redirect('login')

@csrf_exempt
@login_required
def dashboard(request):
    return render(request, 'dashboard.html')

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        print("form---",form)
        if form.is_valid():
            user = form.save()
            user.set_password(form.cleaned_data['password'])
            user.save()

            # Log the user in after signing up
            login(request, user)
            messages.success(request, 'Account created successfully!')

            return redirect('dashboard')  # Redirect to the dashboard or home page
        else:
            messages.error(request, 'There was an error with your registration.')
    else:
        form = SignUpForm()
    
    return render(request, 'signup.html', {'form': form})
