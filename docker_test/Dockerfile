# Use Python 3.12 as the base image
FROM python:3.12

# Set the working directory
WORKDIR /app

# Install Node.js and npm
RUN apt-get update && \
    apt-get install -y curl gnupg2 lsb-release ca-certificates && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# Install create-react-app globally (optional)
RUN npm install -g create-react-app

# Copy the requirements.txt file into the container
COPY requirements.txt /app/

# Install the required dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application files into the container
COPY . /app/

# Expose port 9000 for the app
EXPOSE 9000

# Run migrations and start the Django server
CMD ["bash", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:9000"]
